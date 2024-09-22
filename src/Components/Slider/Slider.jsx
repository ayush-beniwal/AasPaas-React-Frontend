import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderPic1 from "../../assets/Slider/SliderPic1.webp";
import SliderPic2 from "../../assets/Slider/SliderPic2.webp";
import styles from "./Slider.module.css"; // Adjust the path if necessary

function Slider() {
  return (
    <Carousel className={styles.carousel} infiniteLoop showStatus={false} showThumbs={false} autoPlay>
      <div>
        <img src={SliderPic1} />
      </div>
      <div>
        <img src={SliderPic2} />
      </div>
    </Carousel>
  );
}

export default Slider;
