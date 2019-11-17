import React from 'react';
import './App.css';

const user = {
  name: "Juana",
  age: "35"
};

function App() {
  return (
    <div className="container">
      <h1 className="title">{`${user.name} tiene ${user.age} años de edad`}</h1>
      <img className="image" alt="" src="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    </div>
  );
}

export default App;
