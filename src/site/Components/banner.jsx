import React from 'react';

function Banner() {
    return (
        <section id="banner">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 text-center text-lg-start">
                        <h1>Dama de Copas NH</h1>
                        <h4>
                            Chegou em Novo Horizonte seu app adulto de Sex Shop, 
                            Lingeries e acessórios para sua diversão.<br></br>
                            Baixe agora!
                        </h4>
                        <img 
                            src="Images/QrCodeLogo.png" 
                            alt="Imagem adicional" 
                            style={{ width: '30%', marginTop: '1rem' }} 
                            className="mx-auto d-block d-lg-inline"
                        />
                    </div>

                    <div className="col-lg-6">
                        <img 
                            src="Images/screenshot-crm.png" 
                            alt="99 CRM" 
                            className="img-fluid"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Banner;
