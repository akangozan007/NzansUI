// pages/_app.js
import React from 'react';
import '../src/App.css';  // Jika kamu memiliki CSS global

function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default App;