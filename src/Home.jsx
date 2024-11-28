import React from "react";
import { getAuth } from "firebase/auth";

const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Selamat Datang di Home</h1>
      {user && (
        <div>
          <p>Nama: {user.displayName || user.phoneNumber}</p>
          <p>Email: {user.email || "Tidak tersedia"}</p>
        </div>
      )}
      <button
        onClick={() => {
          auth.signOut();
          alert("Anda telah logout!");
          window.location.href = "/"; // Arahkan kembali ke halaman login
        }}
        style={{ backgroundColor: "#ff5722", color: "white", margin: "10px" }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
