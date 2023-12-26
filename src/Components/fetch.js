import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users');
        const result = await response.json();
        setUsers(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h3>{user.first_name} {user.last_name}</h3>
            {user.email}
            <img />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
