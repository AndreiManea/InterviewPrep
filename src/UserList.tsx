import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

const mockUsers: User[] = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Doe",
  },
]; 

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Error Here

  useEffect(() => {
    // Simulate an API call with a delay
    setTimeout(() => {
      setUsers(mockUsers); // Error Here
    }, 2000);
  }, []);

  return (
    <ul>
      {users.map(
        (
          user // Error Here
        ) => (
          <li key={user.id}>{user.name}</li>
        )
      )}
    </ul>
  );
};

export default UserList;
