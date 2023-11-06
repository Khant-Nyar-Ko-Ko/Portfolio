import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import { useDarkMode } from "./DarkMode";


const Menubar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const data = [
    {
      id: "1",
      to: "home",
      title: "Home",
    },
    {
      id: "2",
      to: "about",
      title: "About",
    },
    {
      id: "3",
      to: "education",
      title: "Education",
    },
    {
      id: "4",
      to: "skills",
      title: "Skills",
    },
    {
      id: "5",
      to: "projects",
      title: "Projects",
    },
    {
      id: "6",
      to: "contact",
      title: "Contact",
    },
  ];
  return (
    <Navbar expand="lg" className={`  shadow-md relative`}>
      <label className="ui-switch fixed z-[1000] top-8 left-5">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>

      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-green-100"
        } w-screen pt-4 ps-[300px] md:ps-[500px] fixed top-0 z-[999] pb-3`}
      >
        <div className="">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className=" mb-3"
            style={{ border: "1px solid black", background: "#ffffffbf"}}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className=" text-start"
            style={{ color: "#15803d" }}
          >
            <Nav className=" block ">
              {data?.map((item) => (
                <Link to={item.to} key={item.id}>
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-green-700"
                    }  text-sm md:text-base hover:text-green-500 md:ms-14 sm:ms-0 font-serif `}
                  >
                    {item.title}
                  </p>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default Menubar;
