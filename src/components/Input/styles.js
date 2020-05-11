import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  margin-top: 5px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  &[disabled]{
    background-color: #99bdde;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  padding: 0 20px 0 0;
  box-sizing: border-box;
  margin-top: 25px;
  display: block;
  position: relative;
  color: #777;
  flex: 0 0 50%;
  @media (max-width: 1050px) {
    padding: 0;
    flex: 0 0 100%;
  }
`;

export const Error = styled.span`
color: red;
position: absolute;
bottom:-16px;
left:2px;
font-size:14px;
`;
