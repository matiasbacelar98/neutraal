import notFoundImg from '@assets/svg/404.svg';

export default function NotFound() {
  return <img className="w-full max-w-xs" src={notFoundImg} alt="not found illustration" />;
}
