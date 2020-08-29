import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import React, { useState } from "react"

import { StyleSheet, TextInput, View } from "react-native"
import CircleButton from "../elements/CircleButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  memoEditInput: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
})

const MemoCreateScreen = ({ navigation }) => {
  const [body, setBody] = useState("")
  const handlePress = () => {
    const db = firebase.firestore()
    const { currentUser } = firebase.auth()
    console.log("current", currentUser)
    db.collection(`users/${currentUser.uid}/memos`)
      .add({
        body,
        createdOn: new Date(),
      })
      .then(docRef => {
        console.log(docRef.id)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.memoEditInput}
        multiline
        value={body}
        onChangeText={text => setBody(text)}
      />
      <CircleButton name="check" onPress={handlePress} />
    </View>
  )
}

export default MemoCreateScreen
