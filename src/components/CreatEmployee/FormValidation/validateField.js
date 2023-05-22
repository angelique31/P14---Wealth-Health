/**
 * @function validateField
 * @description Validates a form field by checking its length.
 * @description Valide un champ de formulaire en vérifiant sa longueur.
 *
 * @param {string} fieldName - The name of the field to validate.
 * @param {string} fieldValue - The value of the field to validate.
 * @param {number} minLength - The minimum length the field value should have.
 * @param {string} errorMsg - The error message to return if the field value is shorter than the minimum length.
 *
 * @returns {Object} An object with the field name as the key and the error message as the value if the field value is invalid, otherwise an empty object.
 * @returns {Object} Un objet avec le nom du champ comme clé et le message d'erreur comme valeur si la valeur du champ est invalide, sinon un objet vide.
 */

export const validateField = (fieldName, fieldValue, minLength, errorMsg) => {
  if (fieldValue.trim().length < minLength) {
    return { [fieldName]: errorMsg };
  }
  return {};
};
