import { Story, Meta } from '@storybook/react';
import Button from '../components/global/Button';

const argTypes = {
  color: {
    control: {
      type: 'inline-radio',
      options: ['green', 'yellow', 'red'],
    },
  },
  size: {
    control: {
      type: 'inline-radio',
      options: ['medium', 'large'],
    },
  },
  radius: {
    table: {
      disable: true,
    },
  },
  fullwidth: {
    table: {
      disable: true,
    },
  },
};

export default {
  argTypes,
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story = (args) => <Button {...args}>Acessar</Button>;

export const Success = Template.bind({});
Success.args = {
  color: 'green',
  size: 'large',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'red',
  size: 'medium',
};
