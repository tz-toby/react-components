import React from 'react';

function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
