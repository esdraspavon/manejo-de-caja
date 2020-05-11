import React, { useState } from "react";
import Header from '../../components/Header';
import Open from '../../components/Open';
import Close from '../../components/Close';
import {HomeContainer} from './styles'
import Spinner from "../../components/Spinner";

const Home = () => {
  const [toClose, setToClose] = useState(false);
  const [openActive, setOpenActive] = useState(true);
  return (
    <HomeContainer>
      <Header tabActive={openActive} setTabActive={setOpenActive}/>
      <Open openActive={openActive} toClose={toClose} setToClose={setToClose} />
      <Close closeActive={!openActive} toClose={toClose} setToClose={setToClose}/>
    </HomeContainer>
  )
}

export default Home;

