import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  // Login dengan Google
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        alert(`Selamat datang, ${result.user.displayName}`);
        navigate("/home"); // Navigasi ke halaman Home
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  // Login dengan Nomor Telepon
  const loginWithPhone = () => {
    const phoneNumber = prompt("Masukkan nomor telepon Anda (dengan kode negara):");
    const appVerifier = new RecaptchaVerifier("recaptcha-container", { size: "invisible" }, auth);

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        const code = prompt("Masukkan kode verifikasi:");
        return confirmationResult.confirm(code);
      })
      .then((result) => {
        alert(`Selamat datang, ${result.user.phoneNumber}`);
        navigate("/home"); // Navigasi ke halaman Home
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Login atau Registrasi</h2>
      <button onClick={loginWithGoogle} style={{ backgroundColor: "#db4437", color: "white", margin: "10px" }}>
        Login dengan Google
      </button>
      <button onClick={loginWithPhone} style={{ backgroundColor: "#0f9d58", color: "white", margin: "10px" }}>
        Login dengan Nomor Telepon
      </button>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
