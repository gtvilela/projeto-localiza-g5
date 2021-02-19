
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { IPropsCard } from '../components/global/Card/types/index';
import CardWithSchedules from '../components/global/Card';

export default {
  title: 'Components/Card',
  component: CardWithSchedules,
} as Meta;

const Template: Story<IPropsCard> = (args) => <CardWithSchedules {...args} />;

export const CardDefault = Template.bind({});
CardDefault.args = {};

