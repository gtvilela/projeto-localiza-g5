import { Story, Meta } from '@storybook/react';
import Tab from '../components/global/Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
} as Meta;

const Template: Story = (args) => {
  return (
    <Tab {...args}>
      <Tab.Header>
        <Tab.HeaderItem eventKey={0}>Tab 1</Tab.HeaderItem>
        <Tab.HeaderItem eventKey={1}>Tab 2</Tab.HeaderItem>
      </Tab.Header>

      <Tab.Content eventKey={0}>I'm the first content</Tab.Content>

      <Tab.Content eventKey={1}>Changing tabs, right?</Tab.Content>
    </Tab>
  );
};

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
