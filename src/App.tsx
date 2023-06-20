import * as React from 'react';
import ReactDOM from "react-dom/client";
import './globals.css';
import Layout from './components/Layout/Layout';
import CardsContainer from './components/CardsContainer/CardsContainer';

const App = () => {
  return (
    <Layout>
      <CardsContainer />
    </Layout>
  )
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);