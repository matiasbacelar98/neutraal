import Swal from 'sweetalert2';

type PopupProps = {
  type: 'error' | 'success';
  title: string;
  text: string;
  timer?: number;
};

export function Popup({ type, title, text, timer = 2000 }: PopupProps) {
  return Swal.fire({
    title: title,
    text: text,
    icon: type,
    timer: timer,
    showConfirmButton: false,
    showDenyButton: false,
    showCancelButton: false,
  });
}
