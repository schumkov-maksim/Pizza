import React from 'react';
import getrenk from '../../getrenk';
import SushiItem from "../Sushi/SushiItem";

function GetreanktList({basketList, setBasketList, addItem}) {
    return (
    <>
    {getrenk.map(getrenk => <SushiItem  {...getrenk} key={getrenk.id} basketList={basketList} setBasketList={setBasketList} addItem={addItem}/>)}
       </>
   
  )
}

export default GetreanktList