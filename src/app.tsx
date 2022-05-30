import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter, Routes, Route} from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './config/store';
import { Header } from "./features/header/header";
import { Sidebar } from "./features/sidebar/sidebar";
import { routes } from "./config/routes";
import './styles/style.scss';


const container = document.getElementById('app');
const root = createRoot(container); 

root.render(<>
  <Provider store={store}>
  <MemoryRouter>
    <Header/>
    <div className="App__content">

    <Sidebar />
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
        ))}
    </Routes>
    </div>
  </MemoryRouter>
  </Provider>
</>);
