import './App.css'
import Counter from './Counter';
import Even from './Even';
import Users from './Users';
import Friends from './Friends';


function App() {
  function handleClick(){
    alert('button clicked');
  };

  function handleClick2(){
    confirm('tumiki vat khayso');
  }

  function handleClick3(){
    prompt('what is your name');
  }

  const  addTwoFive = (number) =>{
    alert(number * 10);
  }

  const addTwo3 = (x) => {
    alert(x + 3);
  }

  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      {/* <Even></Even> */}
      {/* <Counter></Counter> */}
    {/* <button onClick={handleClick}>Click one</button>
    <button onClick={handleClick2}>Click Two</button>
    <button onClick={handleClick3}>Click Three</button>
    <button onClick={() => {alert('nijma tumi valo how')}}>Click Four</button>

    <button onClick = {() => addTwoFive(6)}>Click Five</button>
    <button onClick = {() => addTwo3(4)}>Add Numebrs</button> */}

    </>
  )
}


export default App
