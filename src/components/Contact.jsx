import React, { useState } from "react";
import Title from "./Title";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!/^[A-Za-z]+( [A-Za-z]+)*$/.test(name)) {
      alert("Please provide a valid name.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please provide a valid email address.");
    } else if (message.trim() === "") {
      alert("Please provide a message.");
    } else {
      // Submit the form
      const form = e.target.closest("form");
      form.submit();
    }
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center">
        <form
          action="https://getform.io/f/a41080e3-f5f2-4364-ad24-16a66544c4f8"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-black drop-shadow-md dark:bg-white dark:text-black"
            onClick={handleSend}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
