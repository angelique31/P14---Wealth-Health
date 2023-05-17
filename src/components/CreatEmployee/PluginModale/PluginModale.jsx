// import ReactDOM from "react-dom";
// import PropTypes from "prop-types";
// import "../PluginModale/PluginModaleStyles.css";

// const Modal = ({ children, isOpen, onClose }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return ReactDOM.createPortal(
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         {children}
//       </div>
//     </div>,
//     document.getElementById("modal-root")
//   );
// };

// Modal.propTypes = {
//   children: PropTypes.node,
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default Modal;

import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../PluginModale/PluginModaleStyles.css";

const Modal = ({ title, buttonLabel, isOpen, onClose, onButtonClick }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1 className="title-modal">{title}</h1>
        <div>
          <button className="button-modal-close" onClick={onButtonClick}>
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func,
};

export default Modal;
