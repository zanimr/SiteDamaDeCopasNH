// src/pages/promocao.jsx
import React from 'react';

export default function PromocaoDelirius() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-extrabold text-pink-600 mb-4 text-center">🎉 Promoção Especial!</h1>

      <div className="bg-pink-100 p-4 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">🏩 Uma noite no Deliriu’s</h2>
        <p className="text-justify">
          A cada <strong>R$50,00 em compras</strong> no app <strong>Dama de Copas NH</strong>, entre os dias
          <strong> 07/08/2025 a 19/09/2025</strong>, você ganha um número da sorte para concorrer a uma
          <strong> pernoite na suíte master do Deliriu’s Motel</strong> – o melhor da região! 😍
        </p>
      </div>

      <div className="bg-white border border-gray-300 rounded-xl p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">📲 Como participar</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Compre pelo app da Dama de Copas NH</li>
          <li>A cada R$50,00 você recebe 1 número da sorte</li>
          <li>O número é enviado automaticamente para o seu WhatsApp</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl mb-6">
        <h3 className="text-lg font-semibold mb-2">🎯 Sorteio</h3>
        <p>
          O sorteio será baseado no resultado da <strong>Loteria Federal de 20/09/2025</strong>.
          Se o número sorteado pela Loteria não encontrar nenhum ganhador, será escolhido o número imediatamente anterior, 
          caso ainda não encontre ganhador, será o número imediatamente superior, assim sucessivamente até encontrar um ganhador.
          Exemplo: Sorteado número 00500, não encontramos ganhador, irá para os seguintes números 00499, 00501, 00498, 00502 até encontrar um ganhador.
          Quanto mais compras, mais chances de ganhar!

          O ganhador poderá usufruir do prêmio — uma pernoite na Suíte Master do Deliriu’s Motel — na data de sua escolha, desde que seja entre segunda-feira e quinta-feira.
          O número sorteado será informado em nossas redes sociais, cabendo ao ganhador entrar em contato com a Dama De Copas NH, informando o 
          interesse em utilizar o prêmio, no prazo de 7 dias após a realização do sorteio.
        </p>
      </div>

      <p className="text-center text-lg font-medium text-pink-600 mt-8">
        🍀 Boa sorte e aproveite suas compras!
      </p>
    </div>
  );
}
