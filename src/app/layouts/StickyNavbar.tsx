import React, { useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScreenSM, setIsScreenSM] = useState(window.innerWidth <= 960);

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      setIsScreenSM(window.innerWidth <= 720)
    );
  }, []);

  return (
    <>
      <Navbar
        className="h-16 z-50 flex items-center justify-between rounded-none border-none bg-blue-gray-50/50"
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
            disabled={!isScreenSM}
            ripple={false}
            onClick={() => setIsNavOpen(!isNavOpen)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {isScreenSM ? (
              isNavOpen ? (
                "x"
              ) : (
                "="
              )
            ) : (
              <></>
            )}
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
      </Navbar>
    </>
  );
}
