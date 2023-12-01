import { ThemeContext } from "@/context/ThemeContex";
import { useContext } from "react";
import { FaBeer, FaHome } from "react-icons/fa";

export default function Home() {
  const { changeTheme } = useContext(ThemeContext);

  const getIcons = (name, color) => {
    const icons = {
      beer: <FaBeer size={90} color={color} />,
      home: <FaHome size={90} color={color} />,
    };
    return icons[name];
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <button className="btn btn-primary" onClick={() => changeTheme("light")}>
        Light
      </button>
      <audio
        src="http://localhost:8008/images/image-1701425564623.mp3"
        controls
        autoPlay
      ></audio>

      <input type="file" />

      <FaBeer
        onClick={() => {
          console.log("beer");
        }}
        size={90}
        color={"violet"}
      />

      <FaHome size={90} color={"blue"} />
      {/* {getIcons(category.iconName, category.iconColor)} */}

      <button className="btn btn-primary" onClick={() => changeTheme("dark")}>
        Dark
      </button>
    </main>
  );
}
