import "animate.css";
import home from "../images/profileHome.png";
import { Link } from "react-scroll";
import TypewriterComponent from "typewriter-effect";
import { useDarkMode } from "../components/DarkMode";

const Home = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <section
      name="home"
      className={`${
        isDarkMode ? "bg-gray-700" : "bg-green-50"
      } w-screen  min-vh`}
    >
      <div className=" flex flex-col justify-center gap-10 min-vh my-3 md:my-0">
        <div className="block md:flex w-[65%] justify-between gap-5 md:gap-10 items-center mx-auto">
          <div className=" flex flex-col justify-center mb-5 md:mb-0 ">
            <div className=" animate__animated animate__bounceIn flex flex-col gap-0 md:gap-5 z-0">
              <h2
                className={`${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                } text-lg md:text-4xl flex  font-semibold `}
              >
                {"\"Hi, I'm"}
                <p className=" ms-2 text-green-600 animate__animated animate__jello">
                  {'Khant Nyar Ko Ko ! "'}
                </p>
              </h2>
              <h2
                className={`${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                } text-lg md:text-4xl flex  font-semibold`}
              >
                <TypewriterComponent
                  options={{
                    strings: ["Front-end Developer", "Software Engineer"],
                    autoStart: true,
                    loop: true,
                    typeSpeed: 50,
                    deleteSpeed: 25,
                  }}
                />
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-slate-100" : "text-green-900"
                } text-sm md:text-base mt-3 animate__animated animate__fadeInDown font-serif`}
              >
                {` I'm a junior front‑end web developer`}
                <span className=" flex gap-1 font-serif">
                  who is <span className=" text-green-600">seeking</span> a job
                  to contribute
                </span>
              </p>
            </div>
            <div className=" mt-10 md:mt-20 animate__animated animate__fadeInDown flex gap-3 md:gap-5 z-0">
              <Link to="projects" smooth={true} duration={700}>
                <button
                  className=" md:w-[150px] bg-green-700 border-green-700 px-4 py-2 text-white text-sm md:text-lg rounded cursor-pointer hover:bg-green-900"
                  to="projects"
                >
                  My Work
                </button>
              </Link>
              <Link to="contact" smooth={true} duration={700}>
                <button
                  className={` w-[100px] md:w-[150px] border border-green-500 py-2 ${
                    isDarkMode ? "text-slate-100" : "text-green-700"
                  } text-sm md:text-lg rounded cursor-pointer hover:bg-green-700 hover:text-white`}
                >
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
          <div className=" z-0 ">
            <img
              src={home}
              className=" w-[200px] md:w-[400px] mx-auto md:ms-10 "
              alt=""
            />
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "border-white" : "border-green-600"
          } t border-l-2 md:border-l-4  w-[220px] flex items-center flex-col ms-[50px] md:ms-[300px]`}
        >
          <p
            className={`me-20 font-semibold ${
              isDarkMode ? "text-green-500" : "text-green-900"
            } text-sm md:text-base`}
          >
            +66997820067
          </p>
          <p
            className={`font-semibold ${
              isDarkMode ? "text-green-500" : "text-green-900"
            }  text-sm md:text-base`}
          >
            kokhantnyar19@gmail.com
          </p>
          <p
            className={` me-12 font-semibold ${
              isDarkMode ? "text-green-500" : "text-green-900"
            }  text-sm md:text-base`}
          >
            Chiang Rai, Thailand
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
