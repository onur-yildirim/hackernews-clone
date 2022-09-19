import styled from 'styled-components';

export const Comment = styled.li`
  margin-left: 15px;
  font-size: 12px;
  border-top: 1px solid #ff6600;
  margin-bottom: 10px;
  padding-top: 5px;
  &::marker {
    color: ${({ theme }) => theme.textSecondary};
    font-family: 'Ubuntu Mono';
    font-weight: 400;
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.textSecondary};
`;
