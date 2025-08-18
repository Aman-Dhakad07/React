
import './Item.css'

function Item(props) {
   const ItemName = props.name;
   return (<p className="nirma"> {ItemName} </p>);

}


export default Item;