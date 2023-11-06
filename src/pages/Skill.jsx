import { Progress } from "@mantine/core";
import { useDarkMode } from "../components/DarkMode";



const Services = () => {
const experience = [
  {
    id: 1,
    position: "Junior Front-end Developer",
    work: "MMS IT Workshop",
    time: "May 2023 - July 2023",
    about:
      "built real-world projects such as Responsive Static Website, Admin Dashboard, Web Project App with API Auth, CRUD, Feature Development and knew how to register domain and deploy on server",
  },
];
  const { isDarkMode } = useDarkMode();

  return (
    <section
      name="skills"
      className={` ${isDarkMode ? "bg-gray-600" : "bg-green-50"}`}
    >
      <div className=" w-screen flex flex-col items-center min-vh gap-5 mt-[100px]">
        <div className="flex flex-col justify-center my-10 gap-7 items-center w-[85%] group z-50">
          <h2
            className={`text-lg md:text-2xl  font-semibold ${
              isDarkMode ? "text-slate-50" : "text-green-700"
            } font-serif z-50 ps-1`}
          >
            Experiences
          </h2>
          <div>
            <div
              id="exp"
              className={`py-3 ${isDarkMode ? "dark:bg-gray-800" : "bg-white"}`}
            >
              {experience?.map((exp) => (
                <div
                  className={`card ${
                    isDarkMode ? "dark:border-dark" : "border-gray-300"
                  }`}
                  key={exp.id}
                >
                  <div
                    className={`content ${
                      isDarkMode ? "dark:text-white" : "text-black"
                    }`}
                  >
                    <p
                      className={`heading ${
                        isDarkMode ? "dark:text-white" : "text-black"
                      }`}
                    >
                      {exp?.position}
                    </p>
                    <div className="flex gap-36">
                      <p
                        className={`para ${
                          isDarkMode ? "dark:text-gray-300" : "text-black"
                        }`}
                      >
                        {exp.work}
                      </p>
                      <p
                        className={`para ${
                          isDarkMode ? "dark:text-gray-300" : "text-black"
                        }`}
                      >
                        {exp.time}
                      </p>
                    </div>
                    <p
                      className={`para ${
                        isDarkMode ? "dark:text-gray-300" : "text-black"
                      } ${exp?.about}`}
                    >
                      {exp.about}
                    </p>
                    <a
                      href="https://github.com/Khant-Nyar-Ko-Ko"
                      className={`btn ${
                        isDarkMode
                          ? "dark:bg-blue-600 dark:text-white"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center mb-10 md:mb-0  w-[85%] z-50">
          <h2
            className={`text-lg md:text-2xl  font-semibold ${
              isDarkMode ? "text-slate-50" : "text-green-700"
            } font-serif z-50 ps-1`}
          >
            Skills
          </h2>
          <div className=" block md:flex gap-20 mb-5">
            <div className="flex flex-col gap-3 mb-3 md:mb-0">
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                HTML
              </p>
              <Progress
                color="orange"
                radius="md"
                size="lg"
                value={95}
                className=" w-[250px] md:w-[300px]"
              />
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                CSS
              </p>
              <Progress
                color="blue"
                radius="md"
                size="lg"
                value={80}
                className=" w-[250px] md:w-[300px]"
              />
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                JavaScript
              </p>
              <Progress
                color="yellow"
                radius="md"
                size="lg"
                value={90}
                className=" w-[250px] md:w-[300px]"
              />
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                Bootstrap
              </p>
              <Progress
                color="purple"
                radius="md"
                size="lg"
                value={85}
                className=" w-[250px] md:w-[300px]"
              />
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                SASS
              </p>
              <Progress
                color="pink"
                radius="md"
                size="lg"
                value={80}
                className=" w-[250px] md:w-[300px]"
              />
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                Tailwind
              </p>
              <Progress
                color="cyan"
                radius="md"
                size="lg"
                value={100}
                className=" w-[250px] md:w-[300px]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                React
              </p>
              <Progress
                color="skyblue"
                radius="md"
                size="lg"
                value={95}
                className=" w-[250px] md:w-[300px]"
              />
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                Redux Toolkit
              </p>
              <Progress
                color="violet"
                radius="md"
                size="lg"
                value={82}
                className=" w-[250px] md:w-[300px]"
              />
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                Vue
              </p>
              <Progress
                color="teal"
                radius="md"
                size="lg"
                value={55}
                className=" w-[250px] md:w-[300px]"
              />
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                Java
              </p>
              <Progress
                color="rgba(255, 162, 48, 1)"
                radius="md"
                size="lg"
                value={35}
                className=" w-[250px] md:w-[300px]"
              />
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                C#
              </p>
              <Progress
                color="rgba(166, 0, 255, 1)"
                radius="md"
                size="lg"
                value={25}
                className=" w-[250px] md:w-[300px]"
              />
              <p
                className={`font-bold ${
                  isDarkMode ? "text-slate-100" : "text-green-800"
                }`}
              >
                C
              </p>
              <Progress
                radius="md"
                size="lg"
                value={10}
                className=" w-[250px] md:w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

//html css bs sass js react tail redux vue java c#
