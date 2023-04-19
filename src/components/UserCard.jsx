import React from "react";

const UserCard = ({ name, email, phone, username }) => {
  return (
    <div>
      <h4>name: {name}</h4>
      <h4>email: {email}</h4>
      <h4>phone: {phone}</h4>
      <h4>username: {username}</h4>
      <p>--------------------</p>
    </div>
  );
};

export default UserCard;
