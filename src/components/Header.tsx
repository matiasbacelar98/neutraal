import Logo from '@ui/Logo';

export default function Header() {
  return (
    <header className="wrapper py-6 md:py-10 flex items-center justify-between">
      <Logo />
      <p>Question</p>
    </header>
  );
}
