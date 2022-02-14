import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar' ;
import ItemList from './Components/ItemList/ItemList';
import ItemCount from './Components/ItemCount/ItemCount';



function App() {
  return (
    <div className="App">
      <Navbar title="E-Comerce" color="grey"/>
      <ItemList />
      <ItemCount />
    </div>
    
   
   
  );
}

export default App;
