import styled from 'styled-components';
import Button from '../Button';
export const ButtonContainer = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const AddButton = styled(Button)`
background-color: #4dbd72;
`;

export const SuccessMessage = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
`;
export const ClosedMessage = styled.div`
display:flex;
align-items:center;
p{
  margin-left:20px;
  color: #aaa;
}
`;
