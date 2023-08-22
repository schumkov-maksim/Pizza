import pizza from '../pizza'
import Pizza from './Pizza'


function PizzaListe({basketList, setBasketList}) {

  return (
    <>
 
    {pizza.map(pizza=>
    
    <Pizza {...pizza} key={pizza.id} basketList={basketList} setBasketList={setBasketList} />)}
      
    </>
  
  )
}

export default PizzaListe