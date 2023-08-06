import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import PImg from '@components/PImg';
import doodle1M from '@assets/doodle1-min.png';
import doodle2M from '@assets/doodle2-min.png';
import doodle3M from '@assets/doodle3-min.png';
import doodle4M from '@assets/doodle4-min.png';
import doodle1 from '@assets/doodle1.png';
import doodle2 from '@assets/doodle2.png';
import doodle3 from '@assets/doodle3.png';
import doodle4 from '@assets/doodle4.png';

const AnimCard: React.FC = () => {
  return (
    <Swiper
      className="w-full h-fit max-w-450px"
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <PImg placeHolderSrc={doodle1M} src={doodle1} alt="doodle1" className="w-full h-auto max-w-450px box-border border-solid border-2px" />
      </SwiperSlide>
      <SwiperSlide>
        <PImg placeHolderSrc={doodle2M} src={doodle2} alt="doodle1" className="w-full h-auto max-w-450px box-border border-solid border-2px" />
      </SwiperSlide>
      <SwiperSlide>
        <PImg placeHolderSrc={doodle3M} src={doodle3} alt="doodle1" className="w-full h-auto max-w-450px box-border border-solid border-2px" />
      </SwiperSlide>
      <SwiperSlide>
        <PImg placeHolderSrc={doodle4M} src={doodle4} alt="doodle1" className="w-full h-auto max-w-450px box-border border-solid border-2px" />
      </SwiperSlide>
    </Swiper>
  );
};

export default AnimCard;
