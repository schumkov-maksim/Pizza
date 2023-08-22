import { Container, Grid } from "@mui/material";
import Header from "./components/Header";
import PizzaListe from "./components/PizzaListe";
import { useState } from "react";
import Basket from "./components/Basket";
import Modal from "./components/Modal";

function App() {
  const [basketList, setBasketList] = useState([]);
  const [isDrawerOpen, isSetsDrawerOpen] = useState(false);
  const total = basketList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.anzahl,
    0
  );
  const [modalOpen, setModalOpen] = useState(false);

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
          <PizzaListe basketList={basketList} setBasketList={setBasketList} />
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
      </Container>
    </div>
  );
}

export default App;
