import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PoliticaDePrivacidade from './site/Components/politica.jsx';
import PromocaoDelirius from './site/Components/promocao.jsx';

/* Paginas */
import Site from './site/site.jsx';
import Banner from './site/Components/banner.jsx';

function App(){
    
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Site/>} /> 
    <Route path="/" element={<Banner />} />
    <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
    <Route path="/promocao" element={<PromocaoDelirius />} />
    </Routes>
  </BrowserRouter>;
}
 
export default App;
