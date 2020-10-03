/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
require('./config/uiLibrary');
import moment from 'moment';
import React, {useRef, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  TextField,
  View,
  Text,
  DateTimePicker,
  Picker,
} from 'react-native-ui-lib';
import Divider from './components/Divider';
import PasswordInput from './components/PasswordInput';
const emailIcon = require('../assets/icon/email.png');

const App = () => {
  const emailWithIconRef = useRef(null);
  const emailRef = useRef(null);
  const amountRef = useRef(null);
  const passwordRef = useRef(null);
  const [date, setDate] = useState(null);

  const [selection, setSelection] = useState(null);
  const options = [];

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '90%'}}>
        <ScrollView>
          <Text h1>Input</Text>
          <Divider style={{marginBottom: 20}} />
          <TextField
            returnKeyType="next"
            selectionColor="black"
            leadingIcon={{
              source: emailIcon,
              style: {width: 20, height: 20, marginRight: 10},
            }}
            placeholder="Email"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <TextField
            floatingPlaceholder
            floatOnFocus
            placeholder="Email"
            ref={emailRef}
            onSubmitEditing={() => amountRef.current.focus()}
          />
          <TextField
            prefix="HK$"
            placeholder="0"
            title="Amount"
            ref={amountRef}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <PasswordInput ref={passwordRef} />
          <TextField
            error="Wrong input"
            title="Error Demo"
            placeholder="Error"
            value="wrong"
          />
          <TextField
            title="My Round Input"
            placeholder="Custom Round Input"
            hideUnderline
            titleStyle={{paddingLeft: 5}}
            style={{
              borderWidth: 1,
              borderColor: 'black',
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
          />
          <Text h1>Picker</Text>
          <Divider style={{marginBottom: 20}} />
          <DateTimePicker
            placeholder="select a date"
            dateFormat="DD-MM-YYYY"
            onChange={(date) => setDate(date)}
          />
          <Text>Value: {moment(date).format('DD-MM-YYYY')}</Text>
          <Picker
            placeholder="Favorite Language"
            floatingPlaceholder
            value={selection}
            enableModalBlur={false}
            onChange={(item) => setSelection(item)}
            // item: {"label": "Chinese", "value": "cn"}
            topBarProps={{title: 'Languages'}}
            showSearch
            searchPlaceholder={'Search a language'}>
            <Picker.Item value={{value: 'eng', label: 'English'}} />
            <Picker.Item value={{value: 'cn', label: 'Chinese'}} />
          </Picker>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
