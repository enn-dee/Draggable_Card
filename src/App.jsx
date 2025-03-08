import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Background from "./components/BG/Background";
import Foreground from "./components/FG/Foreground";


function App() {
  const [theme, changeTheme] = useState("light");

  // change it to false/true accordingly
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  return (
    <div className="">
      {isSplashVisible ? (
        <div
          className={`transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <SplashScreen />
        </div>
      ) : (
        // main injection
        <div className="relative w-full h-screen bg-base-100 mx-auto my-auto bg-slate-500">
          <div data-theme="dark">
            <Background />
          <Foreground/>
            {/* <Navbar />
            <Hero/> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
