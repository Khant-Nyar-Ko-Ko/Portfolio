import { useDarkMode } from "./DarkMode";

const Footer = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className=" text-center w-screen absolute bottom-0 border-t-2 border-b-0 border-x-0 border-slate-300">
      <p
        className={` ${isDarkMode ? "text-slate-100" : "text-slate-500"} my-3 `}
      >
        &copy; 2023 Khant Nyar Ko Ko. All rights reserved.
      </p>
    </div>
  );
}

export default Footer