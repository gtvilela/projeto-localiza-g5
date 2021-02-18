import React from 'react';
import { Story, Meta } from '@storybook/react';
import CardWithSchedules, { IProps } from '../components/global/Card';

export default {
  title: 'Components/Card',
  component: CardWithSchedules,
} as Meta;

const Template: Story<IProps> = (args) => <CardWithSchedules {...args} />;

export const Default = Template.bind({});
Default.args = {};
