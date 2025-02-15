import styled from 'styled-components';

export const HeaderContainer = styled.div`
flex:0 0 100%;
  width: 100%;
  background-color: #4b367b;
  color: white;
  display: flex;
`;

export const Tab = styled.div`
 flex: 0 0 50%;
 padding: 20px;
 font-weight: bold;
 box-sizing:border-box;
 text-align: center;
 @media (max-width: 720px) {
   cursor:pointer;
   &.active{
    background: rgba(255, 255, 255, .3);
   }
 }
`;
