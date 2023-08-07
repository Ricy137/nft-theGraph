import { ReactNode, useEffect } from 'react';
import { Provider, useAtom, useSetAtom } from 'jotai';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { useShowToast } from '@components/Toast';
import { asyncAccountsAtom, accountsAtom } from '@service/accounts';
import { errorMessage } from '@utils/error';

const httpLink = createHttpLink({
  uri: 'https://api.thegraph.com/subgraphs/name/ricy137/fakecryptocoven',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider>
      <ApolloProvider client={client}>
        <AccountWrapper>{children}</AccountWrapper>
      </ApolloProvider>
    </Provider>
  );
};

export default Providers;

const AccountWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [, initial] = useAtom(asyncAccountsAtom);
  const setAccount = useSetAtom(accountsAtom);
  const showToast = useShowToast();
  //get accounts connection and network information while rendering
  useEffect(() => {
    const initialize = async () => {
      try {
        await initial('initial');
      } catch (err) {
        console.log(err);
        if (err instanceof Error) {
          const message = errorMessage(err);
          showToast({ content: message, type: 'failed' });
        }
      }
    };
    initialize();
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts);
      });
    }
  }, []);
  return <>{children}</>;
};
