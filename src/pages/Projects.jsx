import hotelPj from "../images/hotel.jpg";
import dashboardPj from "../images/dashboard.jpg";
import contactPj from "../images/contactin.jpg";
import blogPj from "../images/BlogWebsite.png"
import vuePj from "../images/reactionTimer.png"
import vue2Pj from "../images/testTRacker.png"
import portfo from "../images/portfolio.jpg"
import { useDarkMode } from "../components/DarkMode";


const Projects = () => {
  const { isDarkMode } = useDarkMode();

  const pjData = [
    {
      id: 1,
      title: "Hotel Project",
      desc: "Group Project with React",
      img: hotelPj,
      aImg: "https://hotel-project-cjahgenxu-khant-nyar-ko-ko.vercel.app/",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      desc: "Group Project with React",
      img: dashboardPj,
      aImg: "https://admin-dashboard-xi-one.vercel.app/",
    },
    {
      id: 3,
      title: "Portfolio Project",
      desc: "Group Project with React",
      img: portfo,
      aImg: "https://team-l-portfolio.vercel.app/",
    },
    {
      id: 4,
      title: "Goggle Contact Clone",
      desc: "CRUD with React",
      img: contactPj,
      aImg: " https://team-l-contact.netlify.app/",
    },
    {
      id: 5,
      title: "Blog Website Design",
      desc: "Class Project with HTML & CSS",
      img: blogPj,
      aImg: "https://blog-website-design.vercel.app/",
    },
    {
      id: 6,
      title: "Ninja Reaction Timer",
      desc: "Tutorial Project with Vue",
      img: vuePj,
      aImg: "https://ninja-reaction-timer.vercel.app/",
    },
    {
      id: 7,
      title: "Test Tracker App",
      desc: "Tutorial Project with React",
      img: vue2Pj,
      aImg: "https://task-tracker-app-seven.vercel.app/",
    },
  ];
  return (
    <>
      <section
        name="projects"
        id="projects"
        className={`${
          isDarkMode ? "bg-gray-700" : "bg-green-50"
        } w-screen  min-vh`}
      >
        <div className=" w-screen flex flex-col justify-center gap-16 items-center min-vh mt-[50px] ">
          <h2 className=" text-2xl md:text-3xl font-serif text-green-500">
            My Projects
          </h2>
          <div className="parent w-[300px]">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 mb-5 md:mb-0">
              {pjData?.map((item) => (
                <div className="card z-20" key={item.id}>
                  <div className="content-box">
                    <span className="card-title">{item.title}</span>
                    <p className="card-content">{item.desc}</p>

                    <a className="see-more" href={item?.aImg}>
                      View Demo
                    </a>
                  </div>
                  <div className="date-box">
                    <img src={item.img} className=" w-[100%] h-[100%]" alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
