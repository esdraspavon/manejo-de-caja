import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);  
  }
`;

export const Blur = styled.div`
  position:absolute;
  z-index: 1; 
  top: 50%;
  left: 50%;
  transform: translate(-50%);

`;
export const Loader = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(75, 54, 123, 0.2);
  border-right: 1.1em solid rgba(75, 54, 123, 0.2);
  border-bottom: 1.1em solid rgba(75, 54, 123, 0.2);
  border-left: 1.1em solid #4b367b;
  transform: translateZ(0);
  animation: ${load} 1.1s infinite linear;
&:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
`;