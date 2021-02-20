import React from 'react';
import { Story, Meta } from '@storybook/react';

import { IPropsCard } from '../components/global/Card/types/index';
import CardWithSchedules from '../components/global/Card';

const argTypes = {
  veiculo: {
    table: {
      disable: true,
    },
  },
};

const veiculo = {
  id: 8,
  valorHora: 7.0,
  url: '/assets/polo.png',
  marca: {
    id: 5,
    nome: 'Volkswagen',
  },
  modelo: {
    id: 7,
    nome: 'Polo',
  },
};

export default {
  argTypes,
  component: CardWithSchedules,
  title: 'Components/Card',
} as Meta;

const Template: Story<IPropsCard> = (args) => <CardWithSchedules {...args} />;

export const Default = Template.bind({});
Default.args = {
  veiculo,
};
