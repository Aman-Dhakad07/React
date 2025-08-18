import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';




function App() {

  const response =[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemyear:"1998"
    },
    {
      itemName:"Nirma-1",
      itemDate:"20-1",
      itemMonth:"June-1",
      itemyear:"1998-1"
    },
    {
      itemName:"Nirma-2",
      itemDate:"20-2",
      itemMonth:"June-2",
      itemyear:"1998-2"
    }
  ]

  return (
    <div>
      <Item name={response[0].itemName}></Item> 
      <ItemDate  day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

       <Item name={response[1].itemName}></Item> 
      <ItemDate  day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>

       <Item name={response[2].itemName}></Item> 
      <ItemDate  day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>

    <div className="App">Hello jee</div>
    </div>
    
  );
}

export default App;
