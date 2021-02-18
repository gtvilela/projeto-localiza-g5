
import { Story, Meta } from '@storybook/react';
import Button from '../components/global/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args}>Acessar</Button>;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
};
