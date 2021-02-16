import { create } from '@storybook/theming';
import logo from '../public/assets/logo-green.svg';

export default create({
  base: 'dark',

  colorSecondary: '#00984A',

  appBg: '#0b0a0d',
  appContentBg: '#16161a',
  appBorderColor: '#00984A',

  textColor: '#fff',

  barTextColor: '#e6e6e6',
  barSelectedColor: '#fff',
  barBg: '#1b1a1f',

  inputBorder: '#00984A',
  inputTextColor: '#fff',
  inputBorderRadius: 10,

  brandTitle: 'Grupo 5 Docs',
  brandUrl: 'https://github.com/gtvilela/projeto-localiza-g5',
  brandImage: logo,
});
