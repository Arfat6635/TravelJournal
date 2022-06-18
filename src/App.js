import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Story from './components/Story'
import data from "../src/data"

function App() {

  const dataElement=data.map(item=>{
    return <Story 
      key={item.id}
      item={item}
    />
  })


  return (
   <>
   <Navbar />
   {dataElement}
   </>
  );
}

export default App;
