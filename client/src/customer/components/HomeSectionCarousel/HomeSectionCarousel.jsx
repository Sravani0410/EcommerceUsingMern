import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from "@mui/material";

const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 5.5 },
};
const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
const HomeSectionCarousel = () => {
  return (
    <div className="px-4 lg:px-8 border border-black">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          infinite
          disableDotsControls
        />
        <Button varient="contained" className="z-50 bg-white" sx={{position:'absolute',top:"8rem", right:'0rem',transform:'translateX(50%) rotate(90deg)',bgcolor:"white"}} aria-label="next">
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)',color:"black"}}/>
        </Button>
        <Button varient="contained" className="z-50 bg-white" sx={{position:'absolute',top:"8rem", left:'0rem',transform:'translateX(50%) rotate(-90deg)',bgcolor:"white"}} aria-label="next">
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)',color:"black"}}/>
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
