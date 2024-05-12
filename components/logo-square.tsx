import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'md' | 'lg' | 'sm' | undefined }) {
  const imageSize = clsx({
    '16': !size,
    '50': size === 'md',
    '70': size === 'lg',
    '10': size === 'sm'
  });

  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center dark:border-neutral-700 dark:bg-black',
        {
          'h-[40px] w-[40px] rounded-xl': !size,
          'h-[50px] w-[50px] rounded-lg': size === 'md',
          'h-[70px] w-[70px] rounded-lg': size === 'lg',
          'h-[30px] w-[30px] rounded-lg': size === 'sm'
        }
      )}
    >
      <LogoIcon width={parseInt(imageSize)} height={parseInt(imageSize)} src="" alt="" />
    </div>
  );
}
