"use client";
import ContactForm from "./ContactForm";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="w-full py-20 flex flex-col space-y-10 justify-center items-center">
      <h3 className="uppercase tracking-[15px] text-[15px] font-medium">
        Contact Us
      </h3>
      <ContactForm />
      <FooterLinks />
    </div>
  );
};

export default Footer;
