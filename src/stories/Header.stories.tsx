import { Story, Meta } from '@storybook/react';
import Header from '../components/global/Header';
import { IPropsHeader } from '../components/global/Header/types';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [(Header) => <div style={{ minWidth: '100vw' }}><Header/></div>]
} as Meta;


const Template: Story<IPropsHeader> = (args: IPropsHeader) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Voltar = Template.bind({});
Voltar.args = {
  hidden: false,
};
