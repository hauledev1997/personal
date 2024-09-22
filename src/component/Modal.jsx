import './Modal.scss';
import { createPortal } from 'react-dom';
const Modal = ({ clubDelete }) => {
  return createPortal(
    <div className='overlay'>
      <div className='modal-confirm-delete'>
        <h2>Lưu ý!</h2>
        <p>Bạn có chắc chắn muốn hủy trận đấu {clubDelete}</p>
        <button className='btn-confirm'>Xác nhận</button>
        <button className='btn-cancle'>Hủy</button>
      </div>
    </div>,
    document.getElementById('modal')
  );
};
export default Modal;
