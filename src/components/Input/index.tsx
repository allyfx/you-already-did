import React from 'react';

import checkSVG from '../../assets/check.svg';

import {
  ContainerWrapper,
  Container,
  ConfirmButton,
  Icon,
} from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  handleConfirm: () => void;
}

export function Input({ handleConfirm, ...props }: Props) {
  return (
    <ContainerWrapper>
      <Container {...props} />

      <ConfirmButton onClick={handleConfirm}>
        <Icon src={checkSVG} alt="Confirm" />
      </ConfirmButton>
    </ContainerWrapper>
  );
}
