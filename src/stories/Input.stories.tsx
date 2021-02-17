import { useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLock, FiUser } from 'react-icons/fi';

import Input from '../components/global/Input';
import { IPropsInput } from '../components/global/Input/types';

const controls = {
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
  containerStyle: {
    table: {
      disable: true,
    },
  },
};

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: controls,
} as Meta;

const Template: Story<IPropsInput> = (args: IPropsInput) => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Form ref={formRef} onSubmit={() => {}}>
      <Input {...args} />
    </Form>
  );
};

export const Text = Template.bind({});
Text.args = {
  icon: FiUser,
  type: 'text',
  name: 'user',
  placeholder: 'Type username',
};

export const Password = Template.bind({});
Password.args = {
  icon: FiLock,
  type: 'password',
  name: 'password',
  placeholder: 'Type password',
};
