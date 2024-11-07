import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-yellow-500 w-full h-24">
            <h1 className="text-white flex justify-center pt-6">
               Made with ❤️ and ☕ by 
               <a className="px-1 text-blue-600" href="https://www.linkedin.com/in/mohannad-waheeb-660501319/" target="_blank">
                Mohannad
               </a>
            </h1>
            <div className="flex justify-center gap-6 mt-4">
                <a href="https://github.com/mohannad05waheeb" target="_blank">
                <BsGithub className="text-2xl"/>                 
                </a>
                <a href="https://www.linkedin.com/in/mohannad-waheeb-660501319/" target="_blank">
                <FaLinkedin className="text-2xl text-blue-600"/>                 
                </a>
                <a href="https://facebook.com/mohannadismail.waheeb" target="_blank">
                <FaFacebook className="text-2xl text-blue-600"/>                 
                </a>
            </div>
        </div>
    );
};
export default Footer;  