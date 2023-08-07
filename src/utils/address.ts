export const shortenAdd = (addr: string) => {
  const startADD = addr.slice(0, 8);
  const endADD = addr.slice(addr.length - 6, addr.length);
  return `${startADD}...${endADD}`;
};
