import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/ainfiniti.techhub/?utm_source=qr&r=nametag "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.instagram.com/ainfiniti.techhub/?utm_source=qr&r=nametag "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://twitter.comhttps://x.com/AdamDev" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/Adam-ahmed-6abb49273/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://wa.me/qr/SSJCV4DUJE4LK1 "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={24} />
      </a>
      
    </footer>
  );
};

export default Footer;