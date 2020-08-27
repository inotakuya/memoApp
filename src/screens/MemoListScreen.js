import React from "react"

import { Text, View } from "react-native"
import Appbar from "../components/Appbar"
import MemoList from "../components/MemoList"
import CircleButton from "../elements/CircleButton"

const MemoListScreen = () => {
  return (
    <>
      <MemoList />

      <CircleButton>+</CircleButton>
    </>
  )
}

export default MemoListScreen
