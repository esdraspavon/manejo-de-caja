import React, { useState } from "react";
import Header from '../../components/Header';
import Open from '../../components/Open';
import Close from '../../components/Close';
import {HomeContainer} from './styles'

const Home = () => {
  const [toClose, setToClose] = useState(false);

  return (
    <HomeContainer>
      <Header />
      <Open toClose={toClose} setToClose={setToClose} />
      <Close toClose={toClose} setToClose={setToClose}/>
    </HomeContainer>
  )
}

export default Home;

