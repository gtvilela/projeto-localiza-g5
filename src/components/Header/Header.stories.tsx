import { Story, Meta } from '@storybook/react';
import Header from './Header';
import { IPropsHeader } from './types';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story<IPropsHeader> = (args: IPropsHeader) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Voltar = Template.bind({});
Voltar.args = {
  icon: '',
  hidden: false
};
