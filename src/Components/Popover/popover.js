import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

export default function AnchorElTooltips() {
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <div className="popover-card">
      <div className="d-flex gap-4 main-popover">
        <Tooltip
          title="Add to Wishlist"
          placement="top"
          arrow
          PopperProps={{
            popperRef,
            anchorEl: {
              getBoundingClientRect: () => {
                return new DOMRect(
                  positionRef.current.x,
                  areaRef.current.getBoundingClientRect().y,
                  0,
                  0
                );
              },
            },
          }}
        >
          <Box
            ref={areaRef}
            onMouseMove={handleMouseMove}
            className="Box-icons"
          >
            <i class="fa-regular fa-heart heart-tooltip"></i>
          </Box>
        </Tooltip>
        <Tooltip
          title="Add to Cart"
          placement="top"
          arrow
          PopperProps={{
            popperRef,
            anchorEl: {
              getBoundingClientRect: () => {
                return new DOMRect(
                  positionRef.current.x,
                  areaRef.current.getBoundingClientRect().y,
                  0,
                  0
                );
              },
            },
          }}
        >
          <Box
            ref={areaRef}
            onMouseMove={handleMouseMove}
            className="Box-icons"
          >
            <i class="fa-solid fa-bag-shopping heart-tooltip"></i>
          </Box>
        </Tooltip>
        <Tooltip
          title="Add to Wishlist"
          placement="top"
          arrow
          PopperProps={{
            popperRef,
            anchorEl: {
              getBoundingClientRect: () => {
                return new DOMRect(
                  positionRef.current.x,
                  areaRef.current.getBoundingClientRect().y,
                  0,
                  0
                );
              },
            },
          }}
        >
          <Box
            ref={areaRef}
            onMouseMove={handleMouseMove}
            className="Box-icons"
          >
            <i class="fa-solid fa-signal heart-tooltip"></i>
          </Box>
        </Tooltip>
      </div>
    </div>
  );
}
