import {render, screen} from '@testing-library/react';
import SearchBox from '../components/SearchBox';
import React from 'react';

describe('SearchBox', () => {
  it('renders without crashing', () => {
    render(<SearchBox/>);
    expect(
        screen.getByTestId('searchInput'),
    ).toBeInTheDocument();
  });
});
