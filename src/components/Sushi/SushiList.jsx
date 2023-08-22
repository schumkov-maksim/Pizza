import React from 'react'
import sushi from '../../sushi'
import SushiItem from './SushiItem'
function SushiList({basketList,setBasketList, addItem}) {
  return (
    <>
    {sushi.map(sushi => <SushiItem  {...sushi} key={sushi.id} basketList={basketList} setBasketList={setBasketList} addItem={addItem}/>)}
    </>
  )
}

export default SushiList