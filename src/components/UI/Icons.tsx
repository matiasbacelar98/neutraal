import { PropsWithChildren } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export function EyeVisibleIcon() {
  return (
    <CustomIcon>
      <AiOutlineEye />
    </CustomIcon>
  );
}

export function EyeInvisibleIcon() {
  return (
    <CustomIcon>
      <AiOutlineEyeInvisible />
    </CustomIcon>
  );
}

function CustomIcon(props: PropsWithChildren) {
  const { children } = props;

  return (
    <IconContext.Provider value={{ className: 'text-[1.4rem] fill-text' }}>
      {children}
    </IconContext.Provider>
  );
}
