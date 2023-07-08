import { Link } from 'react-router-dom';
import logoImg from '@assets/svg/logo.svg';

export default function Logo() {
  return (
    <Link to="/sign-up">
      <img src={logoImg} className="inline-block" alt="neutraal logo" />
    </Link>
  );
}
