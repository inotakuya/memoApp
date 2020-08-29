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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    // ログイン処理
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log("Success!", user)
        navigation.navigate("Home", { currentUser: user })
      })
      .catch(user => {
        console.log("error!", user)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ログイン</Text>
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
      <TouchableHighlight style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonTitle}>ログインする</Text>
      </TouchableHighlight>
    </View>
  )
}

export default LoginScreen
