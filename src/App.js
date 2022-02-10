import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar' ;
import ItemList from './ItemList/ItemList';


function App() {
  return (
    <div className="App">
      <Navbar title="E-Comerce" color="grey"/>
      <ItemList />
    </div>
    
   
   
  );
}

export default App;
