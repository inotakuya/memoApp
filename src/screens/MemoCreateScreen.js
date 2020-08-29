import firebase from "firebase/app"
import "firebase/firestore"
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
    const { params } = navigation.state
    const db = firebase.firestore()
    db.collection(`users/${params.currentUser.user.uid}/memos`)
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
