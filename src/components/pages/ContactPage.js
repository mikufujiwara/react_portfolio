import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();
  //   const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    // setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);

    e.preventDefault();

    emailjs
      .sendForm(
        "service_zkekmxa",
        "template_v5thdga",
        form.current,
        "yg8Wrr_OT_w-RrsTj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container mb-5 pt-5 d-flex col-lg-6 flex-column">
      <h2 className="mt-5 text-center">CONTACT</h2>
      <p className="text-center">
        Thank you for your interest :)
        <br />
        Please feel free to reach out to me. <br />I will respond to you within
        24 hours.
      </p>
      <form ref={form} onSubmit={onSubmit}>
        <div className="mb-3 text-center">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="mb-3 text-center">
          <label
            className="form-label d-flex justify-content-center"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="mb-3 text-center">
          <label
            className="form-label d-flex justify-content-center"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="button ml-auto" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactPage;
