// import MiddleSection from "@/components/dashboard/MiddleSection";
// import TopSection from "@/components/dashboard/TopSection";
import TestSection from "@/components/TestSection";
import { UserContext } from "@/context/UserProvider";
import { useRouter } from "next/router";
import React, { useContext } from "react";

const DashboardPage = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  if (!user) {
    router.push("/login");
  }

  return (
    <div>
      <TestSection user={user} />
      {/* <TopSection /> */}
      {/*<MiddleSection /> */}
      <h1>Welcome Dashboard -{user.name}</h1>
      <button className="btn" onClick={() => {}}>
        Change
      </button>
    </div>
  );
};

export default DashboardPage;
