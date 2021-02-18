import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import GlobalStyle from '../src/styles/GlobalStyle';

import { ThemeProvider } from 'styled-components';

import theme from './theme';

import './reset.css';

addParameters({
  options: {
    theme,
    GlobalStyle
  },
});

addDecorator(withInfo);
addDecorator(centered);
addDecorator(s => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
    {s()}
  </>
));

configure(require.context('../src/stories', true, /\.stories\.tsx$/), module);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}



