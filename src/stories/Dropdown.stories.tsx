
import { Story, Meta } from '@storybook/react';
import Dropdown from '../components/global/Dropdown/Dropdown';
import { IPropsDropdown } from '../components/global/Dropdown/types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<IPropsDropdown> = (args: IPropsDropdown) => <Dropdown {...args} />;

export const MenuDefault = Template.bind({});
MenuDefault.args = {
  isOpen: true
};
