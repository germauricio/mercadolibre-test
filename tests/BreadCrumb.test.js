import {render, screen} from '@testing-library/react';
import BreadCrumb from '../components/BreadCrumb';
import React from 'react';

const categories =
[
  {
    'id': 'MLA1051',
    'name': 'Celulares y Teléfonos',
  },
  {
    'id': 'MLA1055',
    'name': 'Celulares y Smartphones',
  },
];

describe('BreadCrumb', () => {
  it('renders without crashing', () => {
    render(<BreadCrumb categories={categories} />);

    expect(
        screen.getByTestId('category'),
    ).toHaveTextContent('Celulares y Teléfonos >');
  });
});


