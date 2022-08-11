
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const productList = [
    {name:'Photoshop',price:'$99.99'},
    {name:'Illustrator',price:'$66.99'},
    {name:'PDF Reder',price:'$19.99'},

  ]
  const productName = productList.map(names =>productList.name)

  return (
    <div className="App">
      
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
        {
          productList.map(pd =><Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(0);


  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count - 1)}>Decease</button>

      <button onClick={()=>setCount(count + 1)}>Increase</button>

      

    </div>
  )
}

function Users() {
  
    const [users,setUsers] = useState([]);
    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then(data => setUsers(data))
    },[]);


    

    return(
      <div>
        <h1>Dynamic Users:{users.length}</h1>
       <ul>
        {
          users.map(usere => <li>{usere.name}</li>)
        }
       </ul>
      </div>
    )  
}

function Product(props) {

  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    hight:'700px',
    withy:'800px',
    flota:'left',
    marginBottom:'20px',
    marginTop:"20px",
    padding:'10px'
  }
  const {name,price} = props.product;
  return(
    <div style={productStyle}>
        <h2>{name}</h2>
        <h1>{price}</h1>
        <button>Buy now</button>

    </div>
  )
}

export default App;
