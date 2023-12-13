import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { FaBeer, FaHome } from "react-icons/fa";
import { UserContext } from "@/context/UserProvider";

export default function Home() {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const getIcons = (name, color) => {
    const icons = {
      beer: <FaBeer size={90} color={color} />,
      home: <FaHome size={90} color={color} />,
    };
    return icons[name];
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <div>
        <h1>Welcome Home Page - {user.name}</h1>
        <h2>Email: {user.email}</h2>
        <button className="btn" onClick={logout}>
          logout
        </button>
      </div>
    </main>
  );
}
