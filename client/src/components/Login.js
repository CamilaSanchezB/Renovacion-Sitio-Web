/**
 * @function LoginForm
 * @desc Formulario de inicio de sesión
 * @category Components
 * @returns {void}
 */
const LoginForm = () => {
  // Agrega una clase 'visible' al elemento con la clase '.wrapperLogin' después de 500ms
  setTimeout(function() {
    var card = document.querySelector('.wrapperLogin');
    card.classList.add('visible');
  }, 500);
};

export default LoginForm;
