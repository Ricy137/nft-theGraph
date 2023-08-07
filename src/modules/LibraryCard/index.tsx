import { Link } from 'react-router-dom';
import PImg from '@components/PImg';
import DefaultI from '@assets/default.svg';
import { ipfsToHttp } from '@utils/ipfs';

interface LibraryCardProps {
  id: string;
  img: string;
  name: string;
}

const LibraryCard: React.FC<LibraryCardProps> = ({ img, name, id }) => {
  return (
    <Link to={`/library/${id}`} className="w-full no-underline border-1px border-solid border-black rounded-30px cursor-pointer overflow-hidden">
      <PImg placeHolderSrc={DefaultI} src={ipfsToHttp(img)} alt="doodle" className="w-full border-b-1px border-b-solid border-black" />
      <div className="flex flex-col items-center justify-center h-32px text-[16px] leading-[24px] text-#000000">{name}</div>
    </Link>
  );
};

export default LibraryCard;
