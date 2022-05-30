import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let student: boolean;
let hobbies: string[];
let role: [number, string];
type Person = {
  name: string;
  age?: number;
}

let person: Person = {
  name : "zz",
}

let lotsOfPeople: Person[];

function App() {
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
