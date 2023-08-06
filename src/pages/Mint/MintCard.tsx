import useInTransaction from '@hooks/useInTransaction';
import Button from '@components/Button';
import AuthConnect from '@modules/AuthConnect';
import { useMint } from '@service/mint';

const MintCard: React.FC = () => {
  const mint = useMint();

  const { loading, handleExecAction } = useInTransaction(mint);
  return (
    <div className="flex flex-col justify-between items-center gap-y-40px w-full max-w-450px">
      <div className="font-medium text-[16px] leading-[24px] text-#ffffff">0.01 ether per NFT</div>
      <AuthConnect>
        <Button disabled={loading} onClick={handleExecAction}>
          {loading ? 'Minting...' : 'Mint'}
        </Button>
      </AuthConnect>
    </div>
  );
};

export default MintCard;
