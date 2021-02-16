/* eslint-disable max-len */

import {render, screen} from '@testing-library/react';
import React from 'react';
import ProductMiniature from '../components/ProductMiniature';

const item = {
  'id': 'MLA882097946',
  'title': 'Bolso Tote Bag Topman Original',
  'price': {
    'currency': 'ARS',
    'amount': 4995,
    'decimals': 0,
  },
  'picture': 'http://http2.mlstatic.com/D_687000-MLA42653025055_072020-I.jpg',
  'condition': 'used',
  'free_shipping': true,
};

describe('ProductMiniature', () => {
  it('renders without crashing', () => {
    render(<ProductMiniature item={item} />);
    console.log(screen);
    expect(
        screen.getByTestId('product'),
    ).toBeInTheDocument();
  });
});
