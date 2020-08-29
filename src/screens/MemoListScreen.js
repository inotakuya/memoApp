import firebase from "firebase/app"
import "firebase/firestore"
import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import MemoList from "../components/MemoList"
import CircleButton from "../elements/CircleButton"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fffdf6",
  },
})

const MemoListScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("MemoCreate")
  }
  const [memoList, setMemoList] = useState([])
  useEffect(() => {
    const { currentUser } = firebase.auth()
    const db = firebase.firestore()
    db.collection(`users/${currentUser.uid}/memos`)
      .get()
      .then(snapshot => {
        const tmpMemoList = []
        snapshot.forEach(doc => {
          tmpMemoList.push(doc.data())
        })
        setMemoList(tmpMemoList)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <View style={styles.container}>
      <MemoList memoList={memoList} navigation={navigation} />

      <CircleButton name="plus" onPress={handlePress} />
    </View>
  )
}

export default MemoListScreen
