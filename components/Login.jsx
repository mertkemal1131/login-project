import { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accepted, setAccepted] = useState(false);

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  const isFormValid = isEmailValid && isPasswordValid && accepted;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        data-cy="form-email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {!isEmailValid && email && (
        <p style={{ color: 'red' }}>Geçerli bir email giriniz</p>
      )}

      <input
        data-cy="form-password"
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {!isPasswordValid && password && (
        <p style={{ color: 'red' }}>
          Şifre en az 8 karakter, 1 büyük harf ve 1 sayı içermelidir
        </p>
      )}

      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        Şartları kabul ediyorum
      </label>

      <button
        data-cy="form-submit"
        type="submit"
        disabled={!isFormValid}
      >
        Login
      </button>
    </form>
  );
}
