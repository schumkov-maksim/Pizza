import pizza from '../pizza'
import Pizza from './Pizza'


function PizzaListe({basketList, setBasketList, addItem}) {

  return (
    <>
 
    {pizza.map(pizza=>
    
    <Pizza {...pizza} key={pizza.id} basketList={basketList} setBasketList={setBasketList} addItem={addItem}/>)}
      
    </>
  
  )
}

export default PizzaListe