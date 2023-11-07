import { useEffect } from "react";
import RootLayout from "./layout/RootLayout"
import AOS from "aos";
import "aos/dist/aos.css";



// eslint-disable-next-line react/prop-types
const App = () => {
 useEffect(() => {
   AOS.init();
 }, []);

  return (
    <div className=" w-screen relative overflow-x-hidden">
      <div className="">
        <RootLayout />
      </div>
    </div>
  );
}

export default App