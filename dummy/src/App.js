import logo from './logo.svg';
import './App.css';
import  {useEffect, useState} from 'react';

function App() {

  const [text,setText] = useState('');
  const [name,setName] = useState('Love');


  //   //Variation 1 every Render 
  //  useEffect( () => {
  //    console.log("UI RENDERRING DONE");
  // });



  // //variation 2 -> First Render
  // useEffect( ()=> {
  //   console.log("UI RENDERING DONE");
  // },[]);


  // //variation 3 -> first render + whenever dependency changes
  // useEffect( ()=> {
  //   console.log("change observed")
  // },[name]);

  

  //variation 4 -> To handle amouunting of a component

  useEffect( ()=> {
     //add event listener + this will execute secondly after return 
     console.log("Listener added");
      

     //removed event listener + this will execute first 
     return() => {
      console.log("listener removed")
     }
  },[text])




  function changeHandler(event){
      setText(event.target.value);
        console.log(text);
  }
  return (
    <div className="App">
    <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
