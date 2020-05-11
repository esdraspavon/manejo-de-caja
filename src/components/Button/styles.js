import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #4b367b;
  color: white;
  padding: 10px 30px;
  border-radius: 3px;
  cursor: pointer;
  border:0;
  box-shadow:none;
  &:disabled{
    filter: grayscale(1);
    cursor: not-allowed;
  }
`;