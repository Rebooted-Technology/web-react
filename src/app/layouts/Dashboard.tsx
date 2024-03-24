import { useEffect, useState } from "react";
import Navbar from "./StickyNavbar";
import Sidebar from "./Sidebar";
import { isWindowMedium } from ".";

export enum DashboardMenuState {
  Sidebar,
  Collapsed,
  Expanded,
}

function Dashboard() {
  const [menuState, setMenuState] = useState<DashboardMenuState>(
    isWindowMedium(window)
      ? DashboardMenuState.Collapsed
      : DashboardMenuState.Sidebar
  );

  useEffect(() => {
    const handleResize = () => {
      if (menuState != DashboardMenuState.Sidebar && !isWindowMedium(window)) {
        setMenuState(DashboardMenuState.Sidebar);
      } else if (
        menuState === DashboardMenuState.Sidebar &&
        isWindowMedium(window)
      ) {
        setMenuState(DashboardMenuState.Collapsed);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuState]);

  return (
    <div className="min-h-screen">
      <Navbar menuState={menuState} updateMenuState={setMenuState} />
      <Sidebar menuState={menuState} />
      <div
        className={`inset-0 flex-1 md:ml-64 mt-16 overflow-y-auto transition-all duration-300`}
      ></div>
    </div>
  );
}

export default Dashboard;
