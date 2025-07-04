import { useState } from "react";
import "./login-form.css";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const navigate = useNavigate();
  // ===== Controlled Componnent =====
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: ", email, "password: ", password);

    const storredData = localStorage.getItem("userData");

    if (!storredData) {
      setError("User Tapilmadi. Qeydiyyatdan Kecin");
      setTimeout(() => {
        navigate("/auth/register");
      }, 3000);
      return;
    }

    const userData = JSON.parse(storredData);

    if (userData.email === email && userData.password === password) {
      const loginData = {
        isLoggedIn: true,
        name: userData.name,
        email: userData.email,
        loginTime: new Date().toISOString(),
      };

      localStorage.setItem("currentUser", JSON.stringify(loginData));

      setSuccessMessage("Ugurla daxil oldunuz! Ana sehifeye kecid...");
      setError("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} className="form-container">
        {error && <div className="form-error-message">{error}</div>}
        {successMessage && (
          <div className="form-success-message">{successMessage}</div>
        )}
        <input
          type="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Emailinizi daxil edin"
        />
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
        <button type="submit" className="btn btn-white">
          Submit
        </button>
      </form>
    </div>
  );

  // ====== Uncontrolled Form =====
  //   const nameRef = useRef();
  //   const emailRef = useRef();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Göndərildi:", {
  //       name: nameRef.current.value,
  //       email: emailRef.current.value,
  //     });
  //   };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input ref={nameRef} type="text" placeholder="Ad" />
  //       <input ref={emailRef} type="email" placeholder="Email" />
  //       <button type="submit">Göndər</button>
  //     </form>
  //   );
}
