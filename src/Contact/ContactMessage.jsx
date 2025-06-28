import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';

const ContactMessage = () => {
 
   const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_19i0uy9',
        'template_cjrwxd7',
        formRef.current,
        'BJtCHdY3xMCODuxn3'
      )
      .then(
        () => {
          setSent(true);
          formRef.current.reset();
        },
        (error) => {
          alert('Failed to send message. Try again.');
          console.error(error);
        }
      );
  };
    return (
         <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-pink-600 inline-block pb-1 mb-6">
        Get in Touch
      </h2>
      <form ref={formRef} onSubmit={sendEmail}  className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
          <input
            type="text"
            name='name'
            placeholder="Your name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name='email'
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full border border-pink-500 rounded px-4 py-2 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full bg-pink-600 hover:bg-pink-700 text-white"
        >
          Send Message
        </button>
      </form>
       {sent && (
        <p className="text-green-600 mt-4 font-semibold">
          ✅ Message sent successfully!
        </p>
      )}
    </div>
    );
};

export default ContactMessage;