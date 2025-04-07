import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mblgpoaq", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Oops! There was a problem.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row" style={{paddingBottom:10}}>
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          name="message"
          className="form-control"
          rows="4"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-custom btn-lg">
        Send Message
      </button>
      {status && <p className="text-success mt-3">{status}</p>}
    </form>
  );
};

export default ContactForm;
