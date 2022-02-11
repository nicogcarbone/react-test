import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar' ;
import ItemList from './Components/ItemList/ItemList';


function App() {
  return (
    <div className="App">
      <Navbar title="E-Comerce" color="grey"/>
      <ItemList />
    </div>
    
   
   
  );
}

export default App;
