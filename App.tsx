import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {theme} from './src/utils';
import Navigate from './src/navigation';
import {store} from './src/redux/store';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Navigate />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
