type LogoutBtn = {
  handleClick: () => void;
};

export default function LogoutBtn(props: LogoutBtn) {
  const { handleClick } = props;

  return (
    <button type="button" className="font-base font-book text-error" onClick={handleClick}>
      Log out
    </button>
  );
}
