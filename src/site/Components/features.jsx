import React from 'react';

function Features(){
    return <section id="features">
        <div className="container">
            <div className="row">

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-heart fa-5x"style={{ color: '#eb493a' }}></i>
                    <h3>Fácil de usar</h3>                    
                    <p>Um app seguro, simples e fácil de utilizar.</p>
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-globe-americas fa-5x" style={{ color: '#eb493a' }}></i>
                    <h3>Em qualquer lugar</h3>
                    <p>Você pode comprar seus produtos a qualquer momento e de onde quiser.</p>
                </div>

                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-lock fa-5x"style={{ color: '#eb493a' }}></i>
                    <h3>Entrega Sigilosa</h3>
                    <p>Entregamos seu pedido em até 1 dia útil e de forma discreta.</p>
                </div>
                       
            </div>
        </div>
    </section>;
  }

export default Features;