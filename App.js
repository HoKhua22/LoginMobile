import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
const message = (mess) => {
  return console.log(mess);
};
const App = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <ScrollView>
      <View style={styles.header}>
        <Image style={styles.img} source={require('./assets/logo.png')} />
        <Text style={styles.headerText}>
          Acciona Account Users (eg, @acciona, {'\n'} @colemanrail ect.) Sign in
          with your corporate ID
        </Text>
        <TouchableOpacity
          onPress={() => message('Coming soon')}
          style={styles.button}
        >
          <Text style={styles.label}>AccionaCorporateLogin</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 20,
          width: '86%',
          marginLeft: 25,
        }}
      >
        <View style={{ flex: 0.5, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
        </View>
        <View style={{ flex: 0.5, height: 1, backgroundColor: 'black' }} />
      </View>
      <View style={styles.body}>
        <Text style={styles.headerText}>
          All Other Users Use the login form below
        </Text>
        <Text style={styles.labelSecond}>Email</Text>
        <TextInput
          style={styles.inputText}
          underlineColorAndroid="transparent"
          placeholder="name@host.com"
          onChangeText={(email) => setEmail(email)}
          defaultValue={email}
        />
        <Text style={styles.labelSecond}>Password</Text>
        <TextInput
          style={styles.inputText}
          underlineColorAndroid="transparent"
          placeholder="Password"
          onChangeText={(pass) => setPass(pass)}
          defaultValue={pass}
        />
      </View>
      <Text style={{ marginLeft: 220 }}>Forgot your password?</Text>
      <TouchableOpacity
        onPress={() => message('Coming soon')}
        style={styles.buttonSecondary}
      >
        <Text style={styles.label}>Login</Text>
      </TouchableOpacity>
      <View style={styles.inform}>
        <Text>Forgot your password or having trouble signing in ?</Text>
        <Text>
          Contact the Service Desk on:
          <Text style={{ color: 'red' }}> (03) 9624 4236</Text>
        </Text>
        <Text>
          Raise an incident via
          <Text style={{ color: 'red' }}> Service Now Portal</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 2,
    flexWrap: 'wrap',
    alignItems: 'center',
    fontFamily: 'Helvetica',
  },
  img: {
    width: 120,
    height: 120,
    marginTop: 40,
  },
  headerText: {
    textAlign: 'justify',
    padding: 27,
  },
  button: {
    marginLeft: 50,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    minWidth: '87%',
  },
  buttonSecondary: {
    marginTop: 20,
    marginLeft: 25,
    padding: 13,
    borderRadius: 4,
    backgroundColor: '#000022',
    alignItems: 'center',
    width: '87%',
  },
  label: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  inputText: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 25,
    marginRight: 25,
    height: 45,
    paddingLeft: 15,
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 1,
  },
  labelSecond: {
    fontWeight: '600',
    paddingLeft: 27,
  },
  body: {
    flex: 4,
  },
  inform: {
    padding: 26,
    alignItems: 'center',
  },
});
export default App;
