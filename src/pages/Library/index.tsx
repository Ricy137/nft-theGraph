import { useQuery, gql } from '@apollo/client';
import { useCallback } from 'react';
import Button from '@components/Button';
import { useShowToast } from '@components/Toast';
import LibraryCard from '@modules/LibraryCard';
import { LibraryCardSkeleton } from '@modules/Skeletons';
import { Token } from '@service/tokens';
import useInTransaction from '@hooks/useInTransaction';

const TOKENS_QUERY = gql`
  query Tokens($skip: Int) {
    tokens(first: 5, skip: $skip) {
      id
      image
      name
    }
  }
`;
const LibraryPage: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery(TOKENS_QUERY, {
    variables: {
      skip: 0,
    },
  });
  const showToast = useShowToast();

  const handleLoadMore = useCallback(async () => {
    const newData = await fetchMore({
      variables: {
        skip: data?.tokens.length,
      },
    });
    if (newData?.data.tokens.length === 0) {
      showToast({ content: 'No more tokens', type: 'failed' });
    }
  }, [data?.tokens.length]);

  const { loading: inTransaction, handleExecAction } = useInTransaction(handleLoadMore);

  return (
    <div className="flex flex-col items-center gap-y-32px w-full">
      <div className="flex items-center justify-center h-64px text-[rgb(252,124,197)] text-36px leading-55.2px sm:text-48px sm:leading-67.2px">
        Fake Doodles Library
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-32px w-75% sm:w-4/5">
        {loading ? <LibraryPageSkeleton /> : data?.tokens.map((item: Token) => <LibraryCard key={item.id} img={item.image} name={item.name} id={item.id} />)}
      </div>
      <Button disabled={inTransaction} onClick={handleExecAction}>
        Fetch More
      </Button>
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
