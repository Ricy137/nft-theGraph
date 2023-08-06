import { useCallback } from 'react';
import { Contract, BrowserProvider, parseEther } from 'ethers';
import { useShowToast } from '@components/Toast';
import { errorMessage } from '@utils/error';
import { FACK_DOODLES_ADD } from '@utils/constants';
import FDAbi from '@utils/contracts/FakeDoodles.json';

export const useMint = () => {
  const showToast = useShowToast();
  const mint = useCallback(async () => {
    try {
      const signer = await new BrowserProvider(window.ethereum).getSigner();
      const contract = new Contract(FACK_DOODLES_ADD, FDAbi, signer);
      const tx = await contract.mint({ value: parseEther('0.01') });
      await tx.wait();
      showToast({ content: `Successfully minted, hash: ${tx.hash}`, type: 'success' });
    } catch (err) {
      console.log(err);
      let message: string = '';
      if (err instanceof Error) {
        message = errorMessage(err);
      }
      showToast({ content: message ?? 'something went wrong', type: 'failed' });
    }
  }, [window]);

  return mint;
};
