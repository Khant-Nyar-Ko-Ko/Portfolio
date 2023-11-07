/* eslint-disable react/no-unknown-property */
// import { TextInput } from "@mantine/core";
import {
  BsCodeSlash,
  BsFacebook,
  BsFillTelephoneInboundFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Footer from "../components/Footer";
import { IoIosArrowDropup } from "react-icons/io";
import { useDarkMode } from "../components/DarkMode";
import { Link } from "react-scroll";

const facebook = "https://www.facebook.com/khantnyar.koko.16?mibextid=9R9pXO";
const instagram = "https://www.instagram.com/knkk_2002/";
const linkedin = "https://www.linkedin.com/in/khant-nyar-ko-ko-b993b3195/";
const github = "https://github.com/Khant-Nyar-Ko-Ko";
const twitter = "https://twitter.com/DamianS28619131";
const mail = "mailto:kokhantnyar19@gmail.com";
const phone = "tel:+66997820067";

const Contact = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section
      name="contact"
      className={` w-screen ${
        isDarkMode ? "bg-gray-600" : "bg-blue-100 "
      } min-vh flex justify-center items-center relative`}
    >
      <div className=" w-[80%] block md:flex  justify-around items-center mx-auto pt-5 md:pt-0  md:ps-[200px] ">
        <div className="relative flex items-center justify-center">
          <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <BsFacebook className="fbIcon w-8 h-8" />
                </span>
              </button>
            </a>

            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <BsInstagram className="igIcon w-8 h-8 p-1" />
                </span>
              </button>
            </a>

            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <BsLinkedin className="linkedInIcon w-8 h-8 p-1" />
                </span>
              </button>
            </a>

            <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <BsGithub className="gitIcon w-8 h-8" />
                </span>
              </button>
            </a>

            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <BsTwitter className="tweetIcon w-8 h-8 p-1" />
                </span>
              </button>
            </a>

            <a
              href={mail}
              className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                <FiMail className="gmailIcon w-8 h-8 p-1" />
              </span>
            </a>
            <a href={phone} target="_blank" rel="noopener noreferrer">
              <button className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                  <BsFillTelephoneInboundFill className="phoneIcon w-6 h-6 mt-1 ms-1" />
                </span>
              </button>
            </a>

            <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div className="w-full bg-white hover:bg-slate-50 h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                <span className="w-20 h-20 inline-block">
                  <BsCodeSlash className="codeIcon w-20 h-20" />
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className=" flex flex-col justify-around relative mb-[200px] ms-2 md:ms-0 pt-5 md:pt-0">
          <div className=" animate__animated animate__bounceIn flex flex-col  z-1 ">
            <h2
              className={` ${
                isDarkMode ? "text-green-400" : "text-green-700"
              } text-2xl md:text-4xl flex  font-semibold uppercase`}
            >
              You can contact me
            </h2>
            <p
              className={` ${
                isDarkMode ? "text-green-500" : "text-green-900"
              } text-green-900 mt-3 animate__animated animate__fadeInDown`}
            >
              <span
                className={`${
                  isDarkMode ? "text-green-500" : "text-green-900"
                }`}
              >
                I am a Thailand based burmese front‑end web developer
              </span>
              <span
                className={`${
                  isDarkMode ? "text-green-500" : "text-green-900"
                } flex gap-1`}
              >
                with{" "}
                <span
                  className={`${
                    isDarkMode ? "text-green-600" : "text-green-800"
                  }`}
                >
                  1 year
                </span>{" "}
                of experience.
              </span>
            </p>
          </div>
        </div>
      </div>
      <Link to="home">
        <button
          className={` ${
            isDarkMode ? "text-green-500" : "text-green-700"
          } absolute bottom-20 right-10 text-5xl `}
        >
          <IoIosArrowDropup />
        </button>
      </Link>

      <Footer />
    </section>
  );
};

export default Contact;
