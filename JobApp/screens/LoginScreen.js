import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcomeText}>Welcome Back <Text style={styles.waveEmoji}>👋</Text></Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <AntDesign name="apple1" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="google" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Haven't an account? <Text style={styles.registerLink}>Register</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2D5E9E',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  waveEmoji: {
    fontSize: 26,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#2D5E9E',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    color: '#666666',
    marginVertical: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  registerText: {
    fontSize: 14,
    color: '#666666',
  },
  registerLink: {
    color: '#0052cc',
    fontWeight: 'bold',
  },
});
