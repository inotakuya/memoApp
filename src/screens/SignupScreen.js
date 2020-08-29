import firebase from "firebase/app"
import "firebase/auth"
import React, { useState } from "react"

import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 24,
    backgroundColor: "#fff",
  },
  input: {
    backgroundColor: "#eee",
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
  },
  title: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#e31676",
    height: 48,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    alignSelf: "center",
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 18,
  },
})

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    // Signup!
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log("success!", user)
        navigation.navigate("Home")
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>メンバー登録</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => {
          setEmail(text)
        }}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email Address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableHighlight style={styles.button} onPress={handleSubmit} underlayColor="#c70f66">
        <Text style={styles.buttonTitle}>送信する</Text>
      </TouchableHighlight>
    </View>
  )
}

export default SignupScreen
