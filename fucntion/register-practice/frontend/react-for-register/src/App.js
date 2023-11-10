import React from 'react';
import SignupForm from './SignupForm'; // Import the SignupForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Your existing content */}
        <p>
          Welcome to My React App!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Render the SignupForm component */}
        <SignupForm />
      </header>
    </div>
  );
}

export default App;
