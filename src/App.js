import { Container, Grid } from "@mui/material";
import Header from "./components/Header";
import PizzaListe from "./components/PizzaListe";
import { useState } from "react";
import Basket from "./components/Basket";
import Modal from "./components/Modal";
import { Route, Routes } from "react-router-dom";
import SushiList from "./components/Sushi/SushiList";
import Fenster from "./components/Fenster";
import GetreanktListeanktList from "./components/Getreankt/GetreanktList";

function App() {
  const [basketList, setBasketList] = useState([]);
  const [isDrawerOpen, isSetsDrawerOpen] = useState(false);
  const total = basketList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.anzahl,
    0
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function addItem(name, url, price) {
    let id = basketList.length;
    let a = [...basketList];
    const obj = { id: id, name: name, url: url, anzahl: 1, price: price };
    const isDrin = basketList.findIndex((item) => item.name === name);
    if (isDrin >= 0) {
      a[isDrin].anzahl += 1;
      setBasketList(a);
    } else {
      const newArr = [...basketList, obj];
      id = new Date();
      setBasketList(newArr);
      console.log(newArr.length + " iSDrin" + newArr[0].name);
    }
    setIsOpen(true);
  }

  return (
    <div className="App">
      <Container sx={{ mt: 5 }}>
        <Header
          basketList={basketList}
          setBasketList={setBasketList}
          isDrawerOpen={isDrawerOpen}
          isSetsDrawerOpen={isSetsDrawerOpen}
          total={total}
        />
        <Grid container direction="row" justifyContent="space-between">
          <Routes>
            <Route
              path="sushi"
              element={
                <SushiList
                  basketList={basketList}
                  setBasketList={setBasketList}
                  addItem={addItem}
                />
              }
            />
            <Route
              path="/"
              element={
                <PizzaListe
                  basketList={basketList}
                  setBasketList={setBasketList}
                  addItem={addItem}
                />
              }
            />
            <Route
              path="get"
              element={
                <GetreanktListeanktList
                  basketList={basketList}
                  setBasketList={setBasketList}
                  addItem={addItem}
                />
              }
            />
          </Routes>
        </Grid>

        <Basket
          setBasketList={setBasketList}
          isDrawerOpen={isDrawerOpen}
          isSetsDrawerOpen={isSetsDrawerOpen}
          basketList={basketList}
          total={total}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          total={total}
          basketList={basketList}
        />

        <Fenster isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </div>
  );
}

export default App;
