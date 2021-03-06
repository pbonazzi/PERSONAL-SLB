import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.menubar};
  transform: ${({ open }) => open ? 'translateX(0)' : 'scaleY(0)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.mobile_max}) {
      width: 100%;
    }
    
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile_max}) {
      font-size: 1.5rem;
      text-align: center;
    }
    
    &:hover {
      color: ${({ theme }) => theme.hover};
    }
  }
`;
