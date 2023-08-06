import { useState, useEffect, ComponentProps } from 'react';

//Progressive image (Next has default support for this)
interface PImg extends ComponentProps<'img'> {
  placeHolderSrc: string;
  src: string;
}
const PImg: React.FC<PImg> = ({ placeHolderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeHolderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return <img src={imgSrc} {...props} />;
};

export default PImg;
