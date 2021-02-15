/* eslint-disable max-len */

import {render, screen} from '@testing-library/react';
import ProductDetail from '../components/ProductDetail';
import React from 'react';

const item = {
  id: 'MLA614113303',
  title: 'Limpia Inyectores Nafta Liqui Moly Injection Reiniger 2124 Motores Nafteros Combustible - Nolin',
  price: {
    currency: 'ARS',
    amount: 1406,
    decimals: 57,
  },
  picture: 'http://http2.mlstatic.com/D_800958-MLA31134791578_062019-I.jpg',
  condition: 'new',
  free_shipping: false,
  sold_quantity: 500,
  description: 'Injection Reinger - Liqui Moly\n\nLimpia inyectores para motores nafteros\n\n- Limpia los residuos de combustibles\n- Elimina los depósitos en los cabezales y de los inyectores\n- Efectivo en todo tipo de sistema de inyección naftero\n- Asegura un funcionamiento óptimo con bajo consumo de combustible debido a una dosificación más exacta y a un mejor pulverizado del combustible\n- Reduce los índices de contaminación de los gases de escape\n- Alarga la vida útil de los convertidores catalíticos\n- Mejora las partidas en frío\n\nContenido: 300ml\nArticulo Nº: 2124\n\nDatos técnicos:\n\n- Agregar una lata cada 2000km al tanque lleno\n- 1 Lata rinde 70 Litros de nafta\n- El producto no vence\n- Se agrega junto a la NAFTA, lo ideal es aplicarlo en tanque lleno\n\n-------------------------------------------\nAplicaciones recomendadas:\n\n- Para vehículos con problemas en el arranque o que no combustionan correctamente\n\n- Uso preventivo (Recomendado): Para mantenimiento de vehículos que no tienen ningún problema pero se quiere evitar que se ensucien los inyectores o algún sector del sistema de inyección',
};

describe('ProductDetail', () => {
  it('renders without crashing', () => {
    render(<ProductDetail item={item}/>);
    expect(
        screen.getByRole('heading', {name: 'Limpia Inyectores Nafta Liqui Moly Injection Reiniger 2124 Motores Nafteros Combustible - Nolin'}),
    ).toBeInTheDocument();
  });
});
