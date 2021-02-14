
import { Story, Meta } from '@storybook/react';
import Dropdown from './Dropdown';
import { IPropsDropdown } from './types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<IPropsDropdown> = (args: IPropsDropdown) => <Dropdown {...args} />;

export const MenuDefault = Template.bind({});
MenuDefault.args = {
  isOpen: true
};
