import React from 'react';
import { Provider } from 'react-redux';
import RegisterUser from './components/RegisterUser';
import store from './redux/store';
import ClientTable from './components/ClientTable';

function App() {
  return (
    <Provider store={store}>
      <RegisterUser />
      <ClientTable />
    </Provider>

  );
}

export default App;
