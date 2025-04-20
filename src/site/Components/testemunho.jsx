import React from 'react';

function Testemunho(){
    return <section id="testemunho">
        <div className="container">

        <div id="carouselExampleInterval" className="carousel carousel-dark  slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <h2>Um app completo para suas compras com conforto, praticidade e descrição. Entregamos em Novo Horizonte em até 1 dia útil.</h2>
                    </div>      

                    <div className="carousel-item" data-bs-interval="5000">
                        <h2>Garantimos total sigilo e confidencialidade em todas as etapas do processo, assegurando que as informações compartilhadas conosco sejam tratadas com o mais alto nível de segurança e respeito. Nosso compromisso é preservar a privacidade de nossos clientes em todas as entregas.</h2>
                    </div>      

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        
        </div>
    </section>;
  }

export default Testemunho;