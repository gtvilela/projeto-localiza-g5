import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown'
import {items} from '../Dropdown/types/items'

describe('<Dropdown>', () => {
    it('Should show dropdown menu', () => {
        render(<Dropdown isOpen={true} items={items}/>)
    })
})
