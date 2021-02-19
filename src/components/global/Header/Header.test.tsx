import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';
import { items } from '../Dropdown/types/items';

describe('<Header>', () => {
  it('Should show header', () => {
    render(<Header items={items} hidden={true} />);
  });
});
