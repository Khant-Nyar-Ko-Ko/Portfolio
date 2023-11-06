import { useDarkMode } from "../components/DarkMode";

function EducationTimeline() {
  const { isDarkMode } = useDarkMode();
  const education = [
    {
      id: 1,
      achievement: "Certificate in Life skills and Leadership skills",
      school: "American University of Yangon",
      time: "2018",
      studies:
        "Studied a summer leadership program in American University of Yangon(Connect University)",
    },
    {
      id: 2,
      achievement: "Bachelor's of Electronics and Communication Engineering",
      school: "Technological University(Dawei)",
      time: "2018 - 2020",
      studies:
        "Studied 2 years in Electronics and Communication Engineering program and stopped due to the political conflict.",
    },

    {
      id: 3,
      achievement: "Certificate in CS50T Understanding Technology",
      school: "Burma Academy",
      time: "2022 - 2023",
      studies: "Studied basic knowledge of computer science and technologies.",
    },
    {
      id: 4,
      achievement: "Certificate in Basic Wed Design",
      school: "MMS One Stop IT Solutions",
      time: "2022",
      studies:
        "Studied the introduction of Computer System, Networking and Server, essential skills for coding, basic knowledge of HTML, CSS and  JavaScript",
    },
    {
      id: 5,
      achievement: "Certificate in Introduction to Cybersecurity",
      school: "Cisco Networking Academy",
      time: "2023",
      studies:
        "Studied introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing profession.",
    },
    {
      id: 6,
      achievement: "Certificate in Special Wed Design",
      school: "MMS One Stop IT Solutions",
      time: "2022 - 2023",
      studies:
        "Studied HTML 5, CSS 3, JavaScript ES6, SASS languages and Bootstrap, Tailwind CSS, React, Redux Toolkit libraries and frameworks.",
    },
    {
      id: 7,
      achievement: "Certificate in Apsara Clouder - Artificial Intelligence",
      school: "Alibaba Cloud Academy",
      time: "2023",
      studies: "Studied Machine Learning and AI.",
    },
    {
      id: 8,
      achievement: "Bachelor's Degree in Software Engineering",
      school: "Mae Fah Luang University",
      time: "2023 - present",
      studies: "Studies Bachelor Program of Software Engineering.",
    },
  ];
  return (
    <section
      id="education"
      className={`${
        isDarkMode ? "bg-gray-700" : "bg-blue-50"
      } pb-8 pt-[100px] `}
    >
      <div className=" w-screen flex flex-col justify-center gap-20 items-center min-vh">
        <h2
          className={`${
            isDarkMode ? "text-slate-50" : "text-green-700"
          } text-lg md:text-2xl font-semibold text-green-700 font-serif z-50 ps-1`}
        >
          Education
        </h2>
        <div className="flex flex-col ms-[50px] md:ms-[100px] z-50">
          {education?.map((item) => (
            <div className="relative" key={item.id}>
              <div className="dot"></div>
              <div className="line"></div>
              <div className="ml-6 flex flex-col gap-0 md:gap-1">
                <h3
                  className={` ${
                    isDarkMode ? "text-green-600" : "text-green-800"
                  }  text-lg md:text-xl font-semibold`}
                >
                  {item?.achievement}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-slate-200" : "text-gray-600"
                  }   mb-1`}
                >
                  {item?.school}
                </p>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-slate-300" : "text-gray-500"
                  }`}
                >
                  {item?.time}
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-slate-300" : "text-gray-500"
                  } text-sm md:text-base`}
                >
                  {item?.studies}
                </p>
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationTimeline;
