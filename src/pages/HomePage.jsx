import React from "react";
import UserCard from "../components/UserCard";

const HomePage = ({ users }) => {
  console.log("users in homepage===> ", users);

  return (
    <div>
      {users?.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          username={user.username}
        />
      ))}
    </div>
  );
};

export default HomePage;
