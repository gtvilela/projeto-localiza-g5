
import { Story, Meta } from '@storybook/react';
import Details from '../pages/cars/[slug]';

export default {
  title: 'Pages/Cars',
  component: Details,
} as Meta;

const Template: Story = (args) => <Details {...args} />;

export const CarsDefault = Template.bind({});
CarsDefault.args = {
};
