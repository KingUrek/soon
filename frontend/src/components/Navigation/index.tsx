import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { NavigationContainer } from './style';

export default function Navigation({
  back,
  setBack,
}: {
  back: boolean;
  setBack: Function;
}) {
  const [firstActived, setfirstActived] = useState(true);
  function toggle() {
    setfirstActived(!firstActived);
    setBack(!back);
  }
  return (
    <NavigationContainer>
      <Button
        variant="contained"
        disabled={firstActived}
        onClick={toggle}
        color="primary"
        data-testid="create-users"

      >
        Criar Usuário
      </Button>
      <Button
        onClick={toggle}
        variant="contained"
        color="primary"
        data-testid="list-users"
        disabled={!firstActived}
      >
        Ver Usuários
      </Button>
    </NavigationContainer>
  );
}
