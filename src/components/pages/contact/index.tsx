import React from "react";

function Contact() {
  return (
    <section
      className="bg-accent dark:bg-secondary w-full h-full transition-colors duration-500 flex items-center justify-center "
      aria-label="Contact section"
    >
      <div className="flex flex-row items-end justify-between w-full p-5 md:w-1/2 z-20">
        <div className="flex flex-col gap-5 md:gap-16 w-full mt-8 md:mt-0">
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-end">
            <h1
              className="text-[100px] md:text-[128px] font-bold text-primary leading-[10px] md:leading-[70px] uppercase font-micro"
              aria-label="Contact"
            >
              <span className="hidden md:inline">
                Con-<br></br>tact
              </span>
              <span className="md:hidden">Contact</span>
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

          <form
            action="/contact"
            method="get"
            className="relative w-full flex flex-col gap-3"
          >
            <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-10">
              <label htmlFor="name-input" className="sr-only">
                Name input
              </label>
              <input
                type="text"
                className="input w-full z-40 relative"
                name="name"
                id="name-input"
                placeholder="Name"
              />
              <label htmlFor="subject-input" className="sr-only">
                Subject input
              </label>
              <input
                type="text"
                className="input w-full z-40 relative"
                name="subject"
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
              name="mail"
              id="mail-input"
              placeholder="E-mail"
            />
            <label htmlFor="message-input" className="sr-only">
              Message input
            </label>
            <textarea
              rows={8}
              className="input w-full z-40 relative"
              name="message"
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
                      className="stroke-primary stroke-1 fill-accent dark:fill-secondary group-hover:fill-primary transition-colors duration-500"
                    />
                  </svg>
                  <button
                    type="reset"
                    className="absolute transform -translate-y-5 md:-translate-y-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] p-1 text-primary group-hover:text-secondary transition-colors duration-500 font-inter uppercase font-semibold tracking-[0.075rem] w-full"
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
                      className="fill-primary group-hover:fill-accent group-hover:dark:fill-secondary stroke-1 stroke-primary transition-colors duration-500"
                    />
                  </svg>

                  <button
                    type="submit"
                    className="absolute transform -translate-y-5 md:-translate-y-6 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] p-1 text-secondary group-hover:text-primary transition-colors duration-500 font-inter uppercase font-semibold tracking-[0.075rem] w-full"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
