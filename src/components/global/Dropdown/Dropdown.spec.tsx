import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown'

describe('<Dropdown>', () => {
    it('Should show dropdown menu', () => {
        render(<Dropdown isOpen={true} />)
    })
})
