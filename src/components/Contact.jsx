import React, { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "565b6227-3b8d-4044-9662-90de9d48d32b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      formRef.current.reset();
    }
  };

  return (
    <>
      <section
        className="contact flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-800 from-10% via-blue-400 via-50% to-blue-800 to-90%"
        id="contact"
      >
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="max-w-2xl w-full bg-slate-900 rounded-md shadow-lg shadow-blue-900 text-white m-10 p-10"
        >
          <h2 className="text-3xl text-center">Contact Form</h2>
          <div className="input-box my-10">
            <label htmlFor="name">Full Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              className="field"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-box my-10">
            <label htmlFor="email">Email Address :</label>
            <input
              type="text"
              id="email"
              name="email"
              className="field"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-box my-5">
            <label htmlFor="message">Your Message :</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              className="field-mess rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-slate-600 px-2 py-2 rounded-lg transition ease-in hover:bg-slate-800 w-full "
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
