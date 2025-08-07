import React from 'react';

function Banner() {
    return (
        <section
            id="banner"
            className="py-5"
            style={{ overflow: 'hidden', paddingTop: '6rem' }}
>
        
            <div className="container">
                <div className="row align-items-center">

                    {/* Texto + QR Code */}
                    <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                        <h1 className="fw-bold" style={{ fontSize: '2rem' }}>Dama de Copas NH</h1>
                        <h4 style={{ fontSize: '1.2rem' }}>
                            Chegou em Novo Horizonte seu app adulto de Sex Shop,<br />
                            Lingeries e acessórios para sua diversão.<br />
                            Baixe agora!
                        </h4>
                        <img 
                            src="Images/QrCodeLogo.png" 
                            alt="QR Code" 
                            className="img-fluid mt-3 mb-3"
                            style={{ maxWidth: '120px' }}
                        />
                    </div>

                    {/* Imagem principal */}
                    <div className="col-12 col-lg-6 text-center">
                        <img 
                            src="Images/screenshot-crm.png" 
                            alt="App Screenshot" 
                            className="img-fluid"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Banner;
