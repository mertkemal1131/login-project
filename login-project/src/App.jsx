import { useState } from 'react';
import Login from './components/Login';
import Success from './components/Success';

function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      {isSuccess ? (
        <Success />
      ) : (
        <Login onSuccess={() => setIsSuccess(true)} />
      )}
    </>
  );
}

export default App;
