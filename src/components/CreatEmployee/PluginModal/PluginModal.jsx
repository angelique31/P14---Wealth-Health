import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./PluginModalStyles.css";
import { useEffect, useRef } from "react";

/**
 * Modal component.
 *
 * A modal component designed to provide an accessible interface for presenting content
 * in an overlay on top of the main content. The modal can be opened or closed by changing the `isOpen` prop,
 * and the modal can be dismissed by clicking outside the modal, clicking the close button, or pressing the
 * Escape key. The focus is confined within the modal for better accessibility.
 *
 * Un composant modal conçu pour fournir une interface accessible et conviviale pour présenter du contenu
 * dans une superposition par-dessus le contenu principal. La modal peut être ouverte ou fermée en modifiant la prop `isOpen`,
 * et la modal peut être fermée en cliquant en dehors de la modal, en cliquant sur le bouton de fermeture, ou en appuyant sur la
 * touche Echap. Le focus est confiné à l'intérieur de la modal pour une meilleure accessibilité.
 * @component
 * @param {object} props The properties for the Modal component.
 * @param {string} props.title The title of the modal. Displayed at the top of the modal.
 * @param {string} props.buttonLabel The label for the close button. Displayed in the button that closes the modal.
 * @param {boolean} props.isOpen The state of the modal. If `true`, the modal is open. If `false`, the modal is closed.
 * @param {Function} props.onClose The function to be called when the modal is requested to be closed.
 *   This function should set `isOpen` to `false`.
 * @param {Function} props.onButtonClick The function to be called when the button inside the modal is clicked.
 * @returns {ReactElement} The rendered Modal component.
 */
const Modal = ({ title, buttonLabel, isOpen, onClose, onButtonClick }) => {
  const closeButtonRef = useRef();

  useEffect(() => {
    if (isOpen) {
      const handleDocumentKeyDown = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleDocumentKeyDown);
      closeButtonRef.current.focus();

      return () => {
        document.removeEventListener("keydown", handleDocumentKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1 className="title-modal">{title}</h1>
        <div>
          <button
            className="button-modal-close"
            onClick={onButtonClick}
            ref={closeButtonRef}
          >
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
