import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--primary);
  border-top: 5px solid var(--lightBlue);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0;
  padding-bottom: 0;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`; 
