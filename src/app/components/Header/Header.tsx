import { FC } from 'react';
import AuthModal from '../Modals/AuthModal';
import TopLine from '../TopLine/TopLine';

const Header: FC = () => {
  return (
    <header>
      <TopLine />
      <AuthModal />
    </header>
  );
};

export default Header;
