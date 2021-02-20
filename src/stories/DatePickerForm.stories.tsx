import { Story, Meta } from '@storybook/react';
import DatePickerForm from '../components/global/InputDatepicker/DatePickerForm';
import { IProps } from '../components/global/InputDatepicker/types/DatePickerForm';

const argTypes = {
  containerStyle: {
    table: {
      disable: true,
    },
  },
  icon: {
    table: {
      disable: true,
    },
  },
  name: {
    table: {
      disable: true,
    },
  },
  type: {
    table: {
      disable: true,
    },
  },
};

export default {
  argTypes,
  title: 'Components/DatePicker',
  component: DatePickerForm,
} as Meta;

const Template: Story<IProps> = (args) => <DatePickerForm {...args} />;

export const DatePickerDefault = Template.bind({});
DatePickerDefault.args = {
  background: '#ffffff',
  color: '#000000',
  type: 'text',
};
