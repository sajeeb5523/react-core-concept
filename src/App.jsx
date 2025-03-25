
import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';

function App() {

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
