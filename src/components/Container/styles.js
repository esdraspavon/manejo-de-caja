import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 0 0 50%;
  padding: 50px;
  box-sizing:border-box;
  position: relative;
  margin: 0 auto auto;
  min-height:300px;
  @media (max-width: 720px) {
    display:none;
    flex: 0 0 100%;
    &.active{
      display:block;
    }
  }
`;