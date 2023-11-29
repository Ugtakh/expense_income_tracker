import { ThemeContext } from "@/context/ThemeContex";
import { useContext } from "react";

export default function Home() {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <button className="btn btn-primary" onClick={() => changeTheme("light")}>
        Light
      </button>
      <button className="btn btn-primary" onClick={() => changeTheme("dark")}>
        Dark
      </button>
    </main>
  );
}
