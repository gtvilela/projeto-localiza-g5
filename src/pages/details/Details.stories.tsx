import { Story, Meta } from '@storybook/react';
import Details from './[slug]';

export default {
  title: 'pages/Details',
  component: Details,
} as Meta;

const Template: Story = () => <Details />;

export const Default = Template.bind({});
Default.args = {};
