import React from 'react';
import UserCard from './UserCard';
import GreetingForm from './GreetingForm';

function App() {
  return (
    <div className="App">
      <h1>User Info</h1>
      <UserCard name="Toby Igbokwe" email="toby.igbokwe@email.com" />
      <GreetingForm />
    </div>
  );
}

export default App;
