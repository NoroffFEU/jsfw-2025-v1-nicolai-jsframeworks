import React, { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "../ToastContext";

const contactFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  subject: z.string().min(3, "Subject must be at least 3 characters long"),
  mail: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function ContactForm() {
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    showToast("Message sent successfully!", "success");
    reset();
  };

  useEffect(() => {
    if (errors.name) {
      showToast(errors.name.message || "Invalid name", "error");
    }
    if (errors.subject) {
      showToast(errors.subject.message || "Invalid subject", "error");
    }
    if (errors.mail) {
      showToast(errors.mail.message || "Invalid email", "error");
    }
    if (errors.message) {
      showToast(errors.message.message || "Invalid message", "error");
    }
  }, [errors, showToast]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full flex flex-col gap-3"
    >
      <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-10">
        <label htmlFor="name-input" className="sr-only">
          Name input
        </label>
        <input
          type="text"
          className="input w-full z-40 relative"
          id="name-input"
          placeholder="Name"
          {...register("name")}
        />
        <label htmlFor="subject-input" className="sr-only">
          Subject input
        </label>
        <input
          type="text"
          className="input w-full z-40 relative"
          {...register("subject")}
          id="subject-input"
          placeholder="Subject"
        />
      </div>
      <label htmlFor="mail-input" className="sr-only">
        E-mail input
      </label>
      <input
        type="email"
        className="input w-full z-40 relative"
        {...register("mail")}
        id="mail-input"
        placeholder="E-mail"
      />
      <label htmlFor="message-input" className="sr-only">
        Message input
      </label>
      <textarea
        rows={8}
        className="input w-full z-40 relative"
        {...register("message")}
        id="message-input"
        placeholder="Message"
      />
      <div className="absolute bottom-[-21px] md:bottom-[-26px] md:right-4 -z-10 -translate-x-1/2 left-1/2 md:-translate-x-0 md:left-auto">
        <div className="flex flex-row gap-1 md:gap-2">
          <div className="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="127"
              height="21"
              viewBox="0 0 127 21"
              fill="none"
              className="block md:hidden"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M126.513 0.160156C124.792 0.160343 122.728 1.47704 121.959 2.24609L106.568 17.6367C104.865 19.34 102.554 20.2958 100.146 20.2959H94.4727L26.7734 20.2969C24.3664 20.2968 22.0548 19.3408 20.3516 17.6377L4.96094 2.24609C4.19186 1.47703 2.12786 0.161311 0.407227 0.161133H87.7656V0.160156H126.513Z"
                className="stroke-primary stroke-1"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="157"
              height="26"
              viewBox="0 0 157 26"
              fill="none"
              className="hidden md:block rotate-180 -translate-y-[1px]"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M123.165 0.0578613C126.166 0.0579715 129.048 1.24908 131.171 3.37231L150.356 22.5588C151.315 23.5176 153.888 25.1584 156.033 25.1584H0.46582C2.61075 25.1583 5.18388 23.5175 6.14258 22.5588L25.3281 3.37329C27.4515 1.24996 30.3332 0.0578611 33.334 0.0578613H38.7725V0.0568848L123.165 0.0578613Z"
                className="stroke-primary stroke-1 fill-accent dark:fill-secondary lg:group-hover:fill-primary  "
              />
            </svg>
            <button
              type="reset"
              className="absolute transform -translate-y-5 md:-translate-y-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] p-1 text-primary lg:group-hover:text-secondary   font-inter uppercase font-semibold tracking-[0.075rem] w-full"
            >
              <div className="flex items-center justify-center gap-1">
                <p>Reset</p>
              </div>
            </button>
          </div>
          <div className="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="127"
              height="21"
              viewBox="0 0 127 21"
              fill="none"
              className="block md:hidden"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M126.513 0.160156C124.792 0.160343 122.728 1.47704 121.959 2.24609L106.568 17.6367C104.865 19.34 102.554 20.2958 100.146 20.2959H94.4727L26.7734 20.2969C24.3664 20.2968 22.0548 19.3408 20.3516 17.6377L4.96094 2.24609C4.19186 1.47703 2.12786 0.161311 0.407227 0.161133H87.7656V0.160156H126.513Z"
                fill="#F5542A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="157"
              height="26"
              viewBox="0 0 157 26"
              fill="none"
              className="hidden md:block rotate-180 -translate-y-[1px]"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M123.165 0.0578613C126.166 0.0579715 129.048 1.24908 131.171 3.37231L150.356 22.5588C151.315 23.5176 153.888 25.1584 156.033 25.1584H0.46582C2.61075 25.1583 5.18388 23.5175 6.14258 22.5588L25.3281 3.37329C27.4515 1.24996 30.3332 0.0578611 33.334 0.0578613H38.7725V0.0568848L123.165 0.0578613Z"
                className="fill-primary lg:group-hover:fill-accent lg:group-hover:dark:fill-secondary stroke-1 stroke-primary  "
              />
            </svg>

            <button
              type="submit"
              className="absolute transform -translate-y-5 md:-translate-y-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] p-1 text-secondary lg:group-hover:text-primary   font-inter uppercase font-semibold tracking-[0.075rem] w-full"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
