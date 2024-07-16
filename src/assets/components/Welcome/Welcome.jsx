import React, { useState } from "react";
import logo from "../../components/twitterLogo.png";
import SignUp from "../Signup/SignUp";
import "./Welcome.css";

export default function Welcome({ setKullanici }) {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  return (
    <>
      <div className="welcome-page">
        <img src={logo} className="welcome-logo" />
        <div className="welcome-signup">
          <h1 id="title">Şu anda olup bitenler</h1>
          <h2>Hemen katıl</h2>
          <div className="buttons">
            <div className="white-button">
              <button id="google-signup">Google ile kaydol </button>
              <button>Apple ile kaydol</button>
            </div>

            <h5 id="veya">veya</h5>

            <button
              onClick={handleOpenSignUp}
              style={{ backgroundColor: "#1DA1F2", color: "white" }}
            >
              Hesap oluştur
            </button>
            <h4>Zaten bir hesabın var mı?</h4>
            <button
              style={{
                backgroundColor: "white",
                border: "1px solid #1DA1F2",
                color: "#1DA1F2",
              }}
            >
              Giriş yap
            </button>
          </div>
        </div>
      </div>
      {isSignUpOpen && (
        <SignUp setKullanici={setKullanici} closeModal={handleCloseSignUp} />
      )}
    </>
  );
}
