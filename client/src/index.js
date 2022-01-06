import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { ApolloProvider, PopupProvider } from './providers';


render(
  <ApolloProvider>
      <PopupProvider>
          <App />
      </PopupProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
