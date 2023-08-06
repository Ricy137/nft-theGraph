import { ComponentProps } from 'react';
import cx from 'clsx';

const Img: React.FC<ComponentProps<'img'>> = ({ className, ...props }) => <img className={cx('', className)} draggable={false} {...props} />;

export default Img;
