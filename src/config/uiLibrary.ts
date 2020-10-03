import {Typography, Colors, ThemeManager} from 'react-native-ui-lib';

Typography.loadTypographies({
  h1: {fontSize: 48, fontWeight: '300'},
  h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},
});

ThemeManager.setComponentTheme('TextField', (props, context) => {
  return {
    titleColor: {
      default: 'black',
      error: 'red',
      focus: 'purple',
      disabled: 'grey',
    },
    underlineColor: {
      default: 'black',
      error: 'red',
      focus: 'purple',
      disabled: 'grey',
    },
    floatingPlaceholderColor: {
      focus: 'purple',
    },
  };
});
