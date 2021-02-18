
import { Story, Meta } from '@storybook/react';
import CardWithSchedules from '../components/global/Card';

export default {
  title: 'Components/Card',
  component: CardWithSchedules,
} as Meta;

const Template: Story = (args) => <CardWithSchedules {...args} />;

export const CardDefault = Template.bind({});
CardDefault.args = {

};
