import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    try {
      createUserWithEmailAndPassword(
        auth,
        registerEmail.current.value,
        registerPassword.current.value
      ).then(async () => {
        await updateProfile(auth.currentUser, { displayName });
        console.log(auth);
        window.location.reload();
      });
    } catch (error) {
      console.log(error.message);
    }
    console.log(registerEmail.current.value, registerPassword.current.value);
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form onSubmit={(e) => handleRegister(e)}>
          <input
            type="text"
            placeholder="Pseudo"
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="email"
            ref={registerEmail}
            required
          />
          <input
            type="password"
            placeholder="mot de passe"
            ref={registerPassword}
            required
          />
          <input type="submit" value="Valider" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
