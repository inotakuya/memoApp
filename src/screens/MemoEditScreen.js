import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import React, { useEffect, useState } from "react"

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

const MemoEditScreen = ({ navigation }) => {
  const initialState = {
    body: "",
    createdOn: null,
    key: "",
  }
  const [memo, setMemo] = useState(initialState)
  const handlePress = () => {
    const db = firebase.firestore()
    const { currentUser } = firebase.auth()
    const newDate = firebase.firestore.Timestamp.now()
    db.collection(`users/${currentUser.uid}/memos`)
      .doc(memo.key)
      .update({
        body: memo.body,
        createdOn: newDate,
      })
      .then(() => {
        console.log("Success!")
        navigation.state.params.returnMemo({ ...memo, createdOn: newDate })
        navigation.goBack()
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    const { params } = navigation.state
    setMemo(params)
  }, [])
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.memoEditInput}
        multiline
        value={memo.body}
        onChangeText={text => setMemo({ ...memo, body: text })}
      />
      <CircleButton name="check" onPress={handlePress} />
    </View>
  )
}

export default MemoEditScreen
