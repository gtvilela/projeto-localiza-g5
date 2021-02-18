
import { Story, Meta } from '@storybook/react';
import Tab from '../components/global/Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
} as Meta;

const Template: Story = (args) => {return <Tab {...args}>

  <Tab.Header>
    <Tab.HeaderItem eventKey={0}>Header Tab 1</Tab.HeaderItem>
    <Tab.HeaderItem eventKey={1}>Header Tab 2</Tab.HeaderItem>
  </Tab.Header>
  <Tab.Content eventKey={0}>
     Teste tab 1
  </Tab.Content>
  <Tab.Content eventKey={1}>
    Teste tab 2
  </Tab.Content>
</Tab>;};

export const TabDefault = Template.bind({});
TabDefault.args = {
};
