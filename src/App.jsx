import Counter from './Counter';
import Batsman from './Batsman';
import Users from './User';
import Friends from './Friends';
import './App.css'
import { Suspense } from 'react';

// User.jsx theke fetch 
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  

// Friends.jsx theke fetch ager niyom Users.jsx er moto
// const fetchFrineds = fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => res.json())

// Friends.jsx theke fetch
const fetchFrineds = async() => {
  const  res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {

  const friendsPromise = fetchFrineds();
  
  function handleClick() {
    alert('I am clicked')
  }
  
  const handleClick3 = () => {
    alert('clicked 3')
  } 

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>
      
      <h3>Vite + React</h3>
      
      {/* User.jsx theke */}
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      

      {/* Friends.jsx theke fetch ager niyom Users.jsx er moto */}
      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends fetchFrineds={fetchFrineds}></Friends>
      </Suspense> */}

      {/* Friends.jsx */}
      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      
      <Batsman></Batsman>
      <Counter></Counter>


      <br/>
      {/* html e eivabe likhtam ekhon eivabe likhbo na */}
      {/* <button onclick="handleClick()">Click Me</button> */}

      {/* system number 1 : eita likhle function declare korte hobe baire */}
      <button onClick={handleClick}>Click Me</button>



       {/* system number 2 : eita likhle function onclick er vitore declare korte hobe */}
      <button onClick={function handleClick2 () {
        alert('button clicked 2')
      }}>Click me2</button>

      
       {/* system number 3 : eita arrow function diye kora hoice ja upore decalre kora hoice */}
       <button onClick={handleClick3}>Click me3</button>
      
      
       {/* system number 4 : direct arrow function use kore */}
       <button onClick={ () => { alert('clicked 4')}}>Click me4</button>


       <button onClick={ () => {handleAdd5(10)}}>Click Add 5</button>

    </>
  )
}





export default App
