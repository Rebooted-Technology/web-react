import React from "react";
import {
  Navbar as TailwindNavbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { DashboardMenuState } from "./Dashboard";

interface NavbarProps {
  menuState: DashboardMenuState;
  updateMenuState: (state: DashboardMenuState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuState, updateMenuState }) => {
  const toggleMenu = () => {
    if (menuState === DashboardMenuState.Collapsed) {
      updateMenuState(DashboardMenuState.Expanded);
    } else if (menuState === DashboardMenuState.Expanded) {
      updateMenuState(DashboardMenuState.Collapsed);
    }
  }

  return (
    <>
      <TailwindNavbar
        className="fixed top-0 h-16 z-50 flex items-center justify-between rounded-none border-0 border-b border-blue-gray-100 bg-blue-gray-50/50 shadow-none"
        fullWidth
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex items-center gap-x-2">
          <IconButton
            className=""
            variant="text"
            size="lg"
            disabled={menuState === DashboardMenuState.Sidebar}
            ripple={false}
            onClick={toggleMenu}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {menuState === DashboardMenuState.Collapsed && <>=</>}
            {menuState === DashboardMenuState.Expanded && <>x</>}
          </IconButton>
          <Typography
            as="a"
            href="/"
            className="cursor-pointer py-1.5 font-medium text-black"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Rebooted Technology
          </Typography>
        </div>

        <div className="flex items-center gap-x-2">
          <Button
            variant="text"
            size="sm"
            ripple={false}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span>Button</span>
          </Button>
        </div>
      </TailwindNavbar>
    </>
  );
};

export default Navbar;