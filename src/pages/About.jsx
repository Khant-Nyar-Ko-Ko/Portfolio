import { Link } from "react-scroll";
import { useDarkMode } from "../components/DarkMode";

const About = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <section
      name="about"
      className={` ${
        isDarkMode ? "bg-gray-600" : "bg-slate-50"
      } w-screen min-vh  flex flex-col justify-center gap-5 md:gap-20 items-center`}
    >
      <div className="w-screen block md:flex justify-around sm:ms-1 md:ms-[400px] mt-[50px] md:mt-[100px] z-50">
        <div className=" w-screen md:w-[25%] flex flex-col md:gap-5 ms-[50px] md:ms-0">
          <div className="">
            <p
              className={`${
                isDarkMode ? "text-green-500" : "text-green-900"
              } md:text-xl  mt-10 md:mt-0   mb-3`}
            >
              - Nice to Meet You!
            </p>
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-green-900"
              }   text-xl md:text-3xl font-semibold font-serif  mb-2`}
            >
              Khant Nyar Ko Ko
            </h3>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-green-900"
              }  md:text-xl mb-3 md:mb-0 text-green-900`}
            >
              Front-end Web Developer
            </p>
          </div>
          <div className=" flex gap-2">
            <Link to="contact" smooth={true} duration={700}>
              <button
                className={`${
                  isDarkMode ? "bg-green-700" : "bg-green-900"
                } w-[130px] md:w-[180px] mb-10 md:mb-0 rounded py-2  text-[10px] md:text-base text-white hover:bg-green-700  border border-green-900`}
              >
                Got A Project?
              </button>
            </Link>
            <button
              className={`${
                isDarkMode ? "bg-green-700" : "bg-green-900"
              } w-[130px] md:w-[180px] mb-10 md:mb-0 rounded py-2  text-[10px] md:text-base text-white hover:bg-green-700  border border-green-900`}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className=" w-[75%] mx-auto md:w-[600px]">
          <p
            className={` ${
              isDarkMode ? "text-green-500" : "text-green-900"
            } text-sm md:text-base  font-serif`}
          >
            Hello there! My name is Khant Nyar Ko Ko. I am a front-end Web
            Developer, and I am very passionate and love my work.
          </p>
          <br />
          <p
            className={` ${
              isDarkMode ? "text-green-500" : "text-green-900"
            } text-sm md:text-base  font-serif`}
          >
            {` I've`} set out on a path to bring beautiful ideas to life and
            provide smooth user experiences thanks to a solid foundation in web
            technologies and a natural sense of creativity. I am now creating
            responsive websites with JavaScript language using React and Vue
            frameworks. I am now learning Java Standard Edition in order to know
            more about programming concepts.
          </p>
          <div className=" grid grid-cols-1 gap-0 md:gap-10 md:grid-cols-6 mt-5">
            <div className="">
              <p
                className={`${
                  isDarkMode ? "text-green-500" : "text-green-700"
                } px-4 font-semibold text-start py-0 md:py-2 text-sm md:text-base uppercase`}
              >
                Age
              </p>
              <p
                className={`${
                  isDarkMode ? "text-green-500" : "text-green-900"
                } px-4 text-start pb-2 `}
              >
                21
              </p>
            </div>
            <div className=" col-span-2">
              <p
                className={`${
                  isDarkMode ? "text-green-500" : "text-green-700"
                } px-4 font-semibold text-start py-0 md:py-2 text-sm md:text-base uppercase`}
              >
                Born in
              </p>
              <p className={`${isDarkMode ? 'text-green-500' : 'text-green-700'} px-4 font-semibold text-start py-0 md:py-2 text-sm md:text-base `}>
             
                Yangon,Myanmar
              </p>
            </div>
            <div className=" col-span-2">
              <p
                className={`${
                  isDarkMode ? "text-green-500" : "text-green-700"
                } px-4 font-semibold text-start py-0 md:py-2 text-sm md:text-base uppercase`}
              >
                Mail
              </p>
              <p className={`${isDarkMode ? 'text-green-500' : 'text-green-700'} px-4 font-semibold text-start py-0 md:py-2 text-sm md:text-base `}>
             
                kokhantnyar19@gmail.com
              </p>
            </div>
            <div className="ps-2">
              <p
                className={`${
                  isDarkMode ? "text-green-500" : "text-green-700"
                } px-4 font-semibold text-start py-0 md:py-2 text-sm md:text-base uppercase`}
              >
                Phone
              </p>
              <p className={`${isDarkMode ? 'text-green-500' : 'text-green-700'} px-4 font-semibold text-start py-0 md:py-2 text-sm md:text-base `}>
             +6697820067</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:w-[60%] grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-3 z-50 text-center mb-10 md:mb-0">
        <div className=" bg-green-200 px-auto py-2 w-[300px] h-auto md:w-[300px] md:h-[150px] rounded transition duration-75 hover:translate-y-1 hover:bg-green-300">
          <h4 className=" text-3xl md:text-5xl font-serif font-semibold md:pt-6 md:ps-20">
            1+
          </h4>
          <p className=" md:text-lg font-serif md:ps-7">Years of Experience</p>
        </div>
        <Link to="projects" smooth={true} duration={700}>
          <div className=" bg-blue-200 px-auto py-2 w-[300px] h-auto md:w-[300px] md:h-[150px] rounded transition duration-75 hover:translate-y-1 hover:bg-blue-300">
            <h4 className=" text-3xl md:text-5xl font-serif font-semibold md:pt-6 md:ps-20">
              10+
            </h4>
            <p className="  md:text-lg font-serif md:ps-7">
              Projects Completed
            </p>
          </div>
        </Link>
        <div className=" bg-orange-200  px-auto py-2 w-[300px] h-auto md:w-[300px] md:h-[150px] rounded transition duration-75 hover:translate-y-1 hover:bg-orange-300">
          <h4 className=" text-3xl md:text-5xl font-serif font-semibold md:pt-6 md:ps-20">
            1+
          </h4>
          <p className="  md:text-lg font-serif md:ps-7">Happy Client</p>
        </div>
      </div>
    </section>
  );
};

export default About;
