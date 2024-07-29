import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer my-6 border-gray-200">

        <div className="logo text-center">
        <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
          DART
        </a>
        <p className="text-gray-600 lg:pr-24 pt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatem aut veritatis illo quibusdam.
        </p>
        </div>
        <div className="flex justify-center gap-3 pb-5">
            <FaGithub className="text-2xl"/>
            <AiFillInstagram className="text-2xl"/>
            <FaLinkedin className="text-2xl"/>
        </div>
        <p className="w-full bg-black/5 text-center">
            © Irsyad Kelana | All Rights Reserved
        </p>
    </footer>
  );
}

export default Footer;
