import './App.css';
import {useState} from "react";
import Categories from './Categories';
import Menu from "./Menu";


import Data from "./data";

const  App = () =>{
  const [category , setCategory] = useState ("all");

  const CategoryHandler = (value) =>{
    setCategory(value);
  }

  return (
    <div className="App">
      <Categories CategoryHandler = {CategoryHandler}/>
      <section className = "ListContainer">
        <Menu menuItems = {category === "all" ? Data : Data.filter((element) => element.category === category )}/>
      </section>
    </div>
  );
}
export default App;