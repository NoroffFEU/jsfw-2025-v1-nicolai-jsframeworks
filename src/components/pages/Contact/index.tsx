import React from "react";
import ContactForm from "../../ContactForm";

function Contact() {
  return (
    <section
      className="bg-accent dark:bg-secondary w-full h-full flex items-center justify-center "
      aria-label="Contact section"
    >
      <div className="flex flex-row items-end justify-between w-full p-5 md:w-[80%] xl:w-1/2 z-20">
        <div className="flex flex-col gap-5 md:gap-16 w-full mt-8 md:mt-0">
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-end">
            <h1
              className="text-[100px] md:text-[128px] font-bold text-primary leading-[10px] md:leading-[70px] uppercase font-micro md:w-1/2"
              aria-label="Contact"
            >
              Con&shy;tact
            </h1>
            <p className="bodytext text-secondary dark:text-accent text-center md:text-right w-[260px] md:w-[40%]">
              <span className="hidden md:block">
                Got an inquiry about our products or a complaint?
              </span>
              <br></br>
              <br></br>
              Contact us using the form under.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
