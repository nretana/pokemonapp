import '@mantine/core/styles.css';

import { Provider } from 'react-redux';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { allRoutes } from './components/shared/route/AppRouter';
import { AppTheme } from './configs/theme.config';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter2 } from './components/shared/route/AppRouter2';


const theme = AppTheme();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider theme={theme} classNamesPrefix='app' defaultColorScheme='dark'>
          <RouterProvider router={allRoutes} />
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
