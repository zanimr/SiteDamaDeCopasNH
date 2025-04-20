import React from 'react';

function Footer(){
  var ano = new Date().getFullYear(); 

    return <section id="footer">    
      <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="https://wa.me/17992523805?text=Olá, quero saber mais sobre o app"><i className="fab fa-whatsapp fa-4x"></i></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/damadecopasnh/"><i className="fab fa-instagram fa-4x"></i></a></li>						
                <li className="list-inline-item"><a href="mailto:contato.damadecopasnh@gmail.com" target="_blank"><i className="far fa-envelope fa-4x"></i></a></li>
            </ul>
	    </div>
      <a href="mailto:contato.nhsoftware@gmail.com">contato.damadecopasnh@gmail.com</a>
      <p>WhatsApp (17) 99252 3805</p>
      <p>{ano}</p>

    </section>;
  }

export default Footer;