import React, {useState, forwardRef} from 'react';
import {StyleSheet} from 'react-native';
import {TextField, View, Text} from 'react-native-ui-lib';
const pwdIcon = require('../../assets/icon/password.png');
const showPwdIcon = require('../../assets/icon/view_password.png');
const hidePwdIcon = require('../../assets/icon/hide_password.png');

export default forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const visibilityIcon = showPassword ? hidePwdIcon : showPwdIcon;

  return (
    <TextField
      ref={ref}
      title="Password"
      secureTextEntry={!showPassword}
      leadingIcon={{
        source: pwdIcon,
        style: {width: 20, height: 20, marginRight: 10},
      }}
      rightButtonProps={{
        iconSource: visibilityIcon,
        iconColor: 'black',
        onPress: () => setShowPassword((show) => !show),
        style: {marginRight: 10},
      }}
    />
  );
});

const styles = StyleSheet.create({});
