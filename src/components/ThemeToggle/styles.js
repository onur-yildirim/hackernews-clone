import styled from 'styled-components';

export const ThemeToggleWrapper = styled.div`
  position: absolute;
  right: 90px;
  top: 55px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;
