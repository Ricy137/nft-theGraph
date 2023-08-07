export const ipfsToHttp = (ipfs: string) => {
  const cid = ipfs.replace('ipfs://', '');
  return `https://w3s.link/ipfs/${cid.trim()}`;
};
