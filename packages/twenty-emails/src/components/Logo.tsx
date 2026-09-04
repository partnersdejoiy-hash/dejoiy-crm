import { Img } from 'react-email';

const logoStyle = {
  marginBottom: '40px',
};

export const Logo = () => {
  return (
    <Img
      src="https://hub.dejoiy.com/images/icons/android/android-launchericon-96-96.png"
      alt="Dejoiy logo"
      width="40"
      height="40"
      style={logoStyle}
    />
  );
};
