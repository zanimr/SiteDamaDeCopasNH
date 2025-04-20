import React from 'react';

function Precos(){
    return <section id="preco">
        <div className="container">

            <div className="row text-center">
                <div className="titulo">
                    <h1>Planos e Preços</h1>
                    <p>Faça um orçamento sem compromisso.</p>
                </div>
            </div>

            <div className="row text-center">
                <div className="row text-center">
                    <div className="card">
                        <div className="card-header"><h1>Orçamento</h1></div>
                        <div className="card-body">
                            <h2>R$ 0,00</h2>
                            <p>Orçamento gratuito</p>

                            <a href="https://wa.me/17992523805?text=Olá, quero saber mais" className="btn btn-lg btn-outline-primary">Fale com a gente</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>;
  }

export default Precos;