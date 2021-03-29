import React, { useState } from 'react';
import RegisterUser from './components/RegisterUSer';
import ClientTable from './components/ClientTable';
import {
  FlipCard, AppContainer, FrontCard, BackCard,
} from './style';
import Navigation from './components/Navigation';

import { useAppSelector } from './redux/hooks';
import FeedBackPage from './components/FeedBackPage';

function App() {
  const [back, setBack] = useState(false);
  const status = useAppSelector(
    ({ pageStatus }) => pageStatus.registerUserStatus,
  );

  return (
    <AppContainer>
      <Navigation back={back} setBack={setBack} />
      <FlipCard back={back}>
        <FrontCard>
          {status !== 'ongoing' ? <FeedBackPage /> : <RegisterUser />}
        </FrontCard>
        <BackCard>
          <ClientTable />
        </BackCard>
      </FlipCard>
    </AppContainer>
  );
}

export default App;
