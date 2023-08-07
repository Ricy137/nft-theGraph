import PImg from '@components/PImg';
import Spin from '@components/Spin';
import DefaultI from '@assets/default.svg';

export const TokenImgSkeleton: React.FC = () => {
  return (
      <PImg placeHolderSrc={DefaultI} src={DefaultI} alt="doodle" className="w-full border-1px border-solid rounded-30px" />
  );
};

export const LibraryCardSkeleton: React.FC = () => {
  return (
    <div className="w-full border-1px border-solid rounded-30px overflow-hidden">
      <PImg placeHolderSrc={DefaultI} src={DefaultI} alt="doodle" className="w-full border-b-1px border-b-solid" />
      <div className="flex flex-col items-center justify-center h-32px text-[16px] leading-[24px] text-#000000">
        <Spin />
      </div>
    </div>
  );
};
