import styled from 'styled-components';
import {Label as LabelContainer} from '../Input/styles';

export const FormContainer = styled.form`
flex: 0 0 50%;
padding: 50px;
box-sizing:border-box;
display: flex;
flex-wrap: wrap;
`;

export const InputTextarea = styled.textarea`
  background-color:transparent;
  display: block;
  margin: 5px 20px 0 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  font-size: 16px;
  &[disabled]{
    background-color: #99bdde;
  }
`;
export const ButtonContainer = styled.div`
flex: 1;
display: flex;
justify-content: center;
margin-top: 20px;
`;
export const Label = styled(LabelContainer)`
flex: 0 0 100%;
`;

