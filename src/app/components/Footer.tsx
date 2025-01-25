import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
          {/* Copyright Section */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Shahbaz Zulfiqar. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Shahbaz894"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub className="text-2xl sm:text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahbaz-zulfiqar-182a84273/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl sm:text-3xl" />
            </a>
            <a
              href="https://wa.me/+923327332894"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaWhatsapp className="text-2xl sm:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
