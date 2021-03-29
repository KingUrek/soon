import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Container } from './style';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { UpdateStatusToOnGoing } from '../../redux/Slicers/pagestatus';

const feedbackMessages = {
  sucess: 'Parabéns, o usuário foi cadastrado com sucesso',
  failure: 'Houve Algum erro, tente novamente mais tarde',
  ongoing: '',
};

export default function FeedBackPage() {
  const status = useAppSelector(
    ({ pageStatus }) => pageStatus.registerUserStatus,
  );
  const dispatch = useAppDispatch();

  function getFeedBackMessage() {
    return feedbackMessages[status];
  }
  return (
    <Container>
      <Typography variant="h3">{getFeedBackMessage()}</Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 30 }}
        onClick={() => dispatch(UpdateStatusToOnGoing())}
      >
        Cadastrar novo Usuário
      </Button>
    </Container>
  );
}
