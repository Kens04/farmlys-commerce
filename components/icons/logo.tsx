import Image from 'next/image';
import Logo from '../../public/logo.png';

export default function LogoIcon(props: React.ComponentProps<typeof Image>) {
  const { src, alt, ...otherProps } = props;
  return <Image src={Logo} alt="ロゴ" {...otherProps} />;
}
