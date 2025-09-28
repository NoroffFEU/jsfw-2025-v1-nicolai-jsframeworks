import React, { createContext, useContext, useState, ReactNode } from "react";
import ToastMessage from "../ToastMessage";

type ToastType = "success" | "error" | "warning";

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastContextProps {
  toasts: Toast[];
  showToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType = "success") => {
    const id = `${Date.now()}-${Math.random()}`;
    const toast: Toast = { id, message, type };
    setToasts((prev) => {
      const updated = [...prev, toast];
      return updated.slice(-3);
    });

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast }}>
      {children}
      <div className="fixed bottom-2 left-2 md:bottom-14 md:left-14 z-50 space-y-2">
        <ul className="flex flex-col space-y-2">
          {toasts.map((toast) => (
            <li key={toast.id}>
              <ToastMessage type={toast.type} message={toast.message} />
            </li>
          ))}
        </ul>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
