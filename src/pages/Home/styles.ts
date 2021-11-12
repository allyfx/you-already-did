import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100vh;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.h3`
  margin-top: 24px;

  font-size: 24px;
`

export const TitleMarked = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Phrase = styled.h2`
  font-size: 48px;

  text-align: center;
`;

export const HighlightedPhrase = styled.strong`
  cursor: pointer;

  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;

  transition: font-size 0.2s;

  &:hover {
    font-size: 52px;
  }
`;

export const MotivationalPhrase = styled.small`
  margin-top: 26px;

  font-size: 28px;
`;

export const Footer = styled.footer`
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  margin-bottom: 78px;
`;

export const AddMoreAchievements = styled.button`
  font-family: 'Quicksand';
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};

  background: none;
  outline: none;
  border: 0;

  &:hover {
    text-decoration: underline;
  }
`;
