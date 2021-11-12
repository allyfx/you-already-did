import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  position: relative;
`;

export const Container = styled.input`
  width: 320px;
  height: 36px;

  padding-left: 16px;

  background-color: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;

  font-family: 'Quicksand';
  font-weight: 400;
  font-size: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placehoolder};
  }
`;

export const ConfirmButton = styled.button`
  position: absolute;
  right: 0;

  width: 36px;
  height: 36px;

  background: none;
  outline: none;

  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;

  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Icon = styled.img`
  margin-top: 2px;
`;
