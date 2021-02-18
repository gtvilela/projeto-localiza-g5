
import { Story, Meta } from '@storybook/react';
import Profile from '../pages/me/[slug]';

export default {
  title: 'Pages/Profile',
  component: Profile,
} as Meta;

const Template: Story = (args) => <Profile {...args} />;

export const ProfileDefault = Template.bind({});
ProfileDefault.args = {
};
