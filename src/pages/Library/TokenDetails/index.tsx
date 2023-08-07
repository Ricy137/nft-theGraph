import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { TokenImgSkeleton } from '@modules/Skeletons';
import { TraitTabs } from '@modules/Tags';
import Spin from '@components/Spin';
import PImg from '@components/PImg';
import DefaultI from '@assets/default.svg';
import { shortenAdd } from '@utils/address';
import { FACK_DOODLES_ADD } from '@utils/constants';
import { ipfsToHttp } from '@utils/ipfs';

const TOKEN_QUERY = gql`
  query GetToken($id: String!) {
    token(id: $id) {
      id
      image
      owner {
        id
      }
      type
    }
  }
`;

const TokenDetails: React.FC = () => {
  const { tokenId } = useParams();
  const { data, loading } = useQuery(TOKEN_QUERY, { variables: { id: tokenId } });
  console.log('data', data);
  if (loading) return <TokenDetailsSkeleton />;

  return (
    <div className="py-80px grid grid-cols-1 sm:grid-cols-2 gap-32px w-75% sm:w-4/5">
      <TokenDetailImg image={data.token.image} />
      <TokenDetailD id={data.token.id} owner={data.token.owner.id} type={data.token.type} />
    </div>
  );
};

const TokenDetailImg: React.FC<{ image: string }> = ({ image }) => {
  return <PImg placeHolderSrc={DefaultI} src={ipfsToHttp(image)} alt="doodle" className="w-full border-1px border-solid rounded-30px" />;
};

const TokenDetailD: React.FC<{ id: string; owner: string; type: string }> = ({ id, owner, type }) => {
  const traist = type.split(',');

  return (
    <div className="p-24px flex flex-col gap-24px w-full border-1px border-solid rounded-30px">
      <div className="flex items-center text-14px leading-22px ">TokenId: {id}</div>
      <div className="flex items-center text-14px leading-22px ">Contract Address: {shortenAdd(FACK_DOODLES_ADD)}</div>
      <div className="flex items-center text-14px leading-22px ">Ownder Address: {shortenAdd(owner)}</div>
      <div className="flex flex-col text-14px leading-22px box-border">
        Traits:
        <div className="flex flex-row flex-wrap gap-12px w-full min-h-160px">
          {traist.map((item) => (
            <TraitTabs trait={item} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TokenDetailsSkeleton: React.FC = () => {
  return (
    <div className="py-80px grid grid-cols-1 sm:grid-cols-2 gap-32px w-75% sm:w-4/5 max-w-1280px">
      <TokenImgSkeleton />
      <div className="p-24px flex flex-col gap-24px w-full border-1px border-solid rounded-30px">
        <div className="flex items-center text-14px leading-22px ">
          TokenId: <Spin className="ml-8px" />
        </div>
        <div className="flex items-center text-14px leading-22px ">Contract Address: {shortenAdd(FACK_DOODLES_ADD)}</div>
        <div className="flex items-center text-14px leading-22px ">
          Ownder Address: <Spin className="ml-8px" />
        </div>
        <div className="flex flex-col text-14px leading-22px ">
          Traits:
          <div className="flex flex-row w-full min-h-160px">
            <Spin className="text-24px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetails;
