import React from 'react';

import { HeaderContainer, Tab } from './styles';

const Header = ({tabActive, setTabActive}) => {
  return (
    <HeaderContainer>
      <Tab className={tabActive ? 'active' : '' } onClick={()=>setTabActive(true)} >Apertura de caja</Tab>
      <Tab className={!tabActive ? 'active' : '' } onClick={()=>setTabActive(false)} >Cierre de caja</Tab>
    </HeaderContainer>
  )
}

export default Header;