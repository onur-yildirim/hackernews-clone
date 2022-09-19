import styled from 'styled-components';

export const Item = styled.li`
  padding: 14px 5px;
  &::marker {
    color: ${({ theme }) => theme.textSecondary};
    font-family: 'Ubuntu Mono';
    font-weight: 400;
  }
`;

export const Title = styled.h3`
  font-family: 'Ubuntu Mono';
  color: ${({ theme }) => theme.text};
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 18px;
`;

export const Host = styled.span`
  font-family: 'Open Sans';
  color: ${({ theme }) => theme.textSecondary};
  font-size: 10px;
  font-weight: 400;
`;

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.text};
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

export const Description = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const CommentLink = styled.a`
  color: ${({ theme }) => theme.textSecondary};

  &:visited {
    color: ${({ theme }) => theme.textSecondary};
  }
`;
