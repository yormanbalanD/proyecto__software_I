import React from "react";
import { useState } from "react";

import LoginForm from './components/LoginForm';
import SignupForm from './components/SignUpForm';

const LoginSignupContainer = ({ defaultForm = 'signup' }) => {
  const [showLogin, setShowLogin] = useState(defaultForm === 'login');
  const [showSignup, setShowSignup] = useState(defaultForm === 'signup');

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
    setShowSignup(!showSignup);
  };

  return (
    <div className="grid w-full h-screen grid-cols-5">
      <aside className="relative h-full bg-morado p-10 bg-[url('https://placehold.co/400x700.png')] bg-no-repeat bg-cover col-span-2">
        <HeaderLinks ></HeaderLinks>
        <AuthButtons showLogin={showLogin} toggleForm={handleToggleForm}></AuthButtons>
      </aside>
      <div className="p-10 w-full col-span-3 flex items-center">
        {showLogin && <LoginForm />}
        {showSignup && <SignupForm />}
      </div>
    </div>
  );
};

const AuthButtons = ({ showLogin, toggleForm }) => {
  const handleFormChange = (value) => {
    if (value === 'login' && showLogin) {
      toggleForm(); // Call the function with parentheses
    }
    if (value === 'signup' && !showLogin) {
      toggleForm();
    }
    return true; // Explicitly return a value (optional)
  };

  return (
    <div className="flex flex-col absolute right-0 *:px-8 *:py-3 *:rounded-l-xl">
      <label
        htmlFor="login-radio"
        className={`flex cursor-pointer items-center gap-2 ${!showLogin ? "bg-transparent" : "bg-white text-black"}`} onClick={() => handleFormChange('signup')}>
        <p className={"m-auto"}>Iniciar sesión</p>
      </label>
      <label htmlFor="signup-radio" className={`flex cursor-pointer items-center gap-2 ${showLogin ? "bg-transparent" : "bg-white text-black"}`} onClick={() => handleFormChange('login')}>
        <p className="m-auto">Registrarse</p>
      </label>
    </div>
  );
};

const HeaderLinks = () => (
  <div className="absolute bottom-10">
    <div className="*:flex *:items-center *:gap-2 flex items-left gap-2 flex-col">
      <a href="#" className="*:hover:text-rosado font-bold text-white">
        <svg
          className="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
            clipRule="evenodd"
          />
        </svg>
        <p>
          Inicio
        </p>
      </a>
      <a href="#" className="*:hover:text-rosado font-bold text-white">
        <svg
          className="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
          />
        </svg>
        <p>
          Contacto
        </p>
      </a>
    </div>
  </div>
);

export default LoginSignupContainer;