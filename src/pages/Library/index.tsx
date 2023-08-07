import { useQuery, gql } from '@apollo/client';
import LibraryCard from '@modules/LibraryCard';
import { LibraryCardSkeleton } from '@modules/Skeletons';
import { Token } from '@service/tokens';

const TOKENS_QUERY = gql`
  query Tokens {
    tokens(first: 5) {
      id
      image
      name
    }
  }
`;
const LibraryPage: React.FC = () => {
  const { data, loading, error } = useQuery(TOKENS_QUERY);
  // console.log('data', data);
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-center h-64px text-[rgb(252,124,197)] text-36px leading-55.2px sm:text-48px sm:leading-67.2px">
        Fake Doodles Library
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-32px w-75% sm:w-4/5">
        {loading ? <LibraryPageSkeleton /> : data?.tokens.map((item: Token) => <LibraryCard key={item.id} img={item.image} name={item.name} id={item.id} />)}
      </div>
    </div>
  );
};

const LibraryPageSkeleton: React.FC = () => {
  const arr = new Array(10).fill(0);

  return (
    <>
      {arr.map((_, index) => (
        <LibraryCardSkeleton key={index} />
      ))}
    </>
  );
};

export default LibraryPage;
