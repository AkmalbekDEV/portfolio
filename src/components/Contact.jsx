import React from "react";
import party from "../assets/contact/party.png";
import github from "../assets/contact/github.png";
import MyForm from "./Message";

function Contact() {
  return (
    <section
      id="contact"
      className="text-center dark:bg-[#03001C] bg-light duration-700 pt-24"
    >
      <h2 className="mx-auto text-6xl dark:text-white text-black font-bold">
        Contact
        <hr className="w-24 h-1 mx-auto my-6 bg-name rounded border-0"></hr>
      </h2>
      <div className="flex flex-col-reverse space-y-10 items-center justify-center mx-10 md:flex-row md:space-x-24 md:space-y-0 md:p-4">
        <div data-aos="fade-up-right" className="py-6 text-center md:w-1/3">
          <img src={party} alt="Party illustration" width="360" />
        </div>
        <div
          data-aos="flip-right"
          className="rounded-2xl md:w-1/3 dark:text-light text-dark shadow-[#d9bcb3] dark:shadow-[#020010] dark:bg-[#111928bf] bg-[#f2f1f556] p-4 md:m-3 m-1 shadow-2xl"
        >
          <MyForm />
        </div>
      </div>
      <h4 className="text-center pt-12 md:inline text-md md:border-l-8 border-dark dark:border-light md:px-4 md:py-2 p-12 font-bold dark:text-light text-dark">
        You can fill out the above form and contact me or you can reach out to
        me just by clicking below social media icons
      </h4>
      <div className="flex py-12 flex-row justify-center gap-8">
        <a href="https://github.com/AkmalbekDEV" target="_blank">
          <img src={github} alt="Github" width="80" />
        </a>
      </div>
      <h2 className="text-dark font-bold py-4 bg-name text-md  text-center">
        Designed with Akmal
      </h2>
    </section>
  );
}

export default Contact;
