import React from 'react';
import ContactCard from './ContactCard';
import ContactMessage from './ContactMessage';

const Contact = () => {
    return (
         <section className="bg-[#f9f9fb] py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactCard />
        <ContactMessage />
      </div>
    </section>
    );
};

export default Contact;