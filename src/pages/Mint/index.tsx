import AnimCard from './AnimCard';
import MintCard from './MintCard';

const MintingPage: React.FC = () => {
  return (
    <div className="py-80px max-w-1920px w-75% sm:w-4/5 grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-40px">
      <div className="w-full flex items-center justify-center">
        <AnimCard />
      </div>
      <div className="w-full flex items-center justify-center">
        <MintCard />
      </div>
    </div>
  );
};

export default MintingPage;
