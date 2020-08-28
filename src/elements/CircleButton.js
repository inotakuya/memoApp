import { createIconSet } from "@expo/vector-icons"
import { AppLoading } from "expo"
import { useFonts } from "expo-font"
import React from "react"
import { StyleSheet, View } from "react-native"
import fontAwsome from "../../assets/fonts/fa-solid-900.ttf"

const CustomIcon = createIconSet(
  {
    pencil: "\uf303",
    plus: "\uf067",
    check: "\uf00c",
  },
  "FontAwsome"
)

const styles = StyleSheet.create({
  circleButton: {
    position: "absolute",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "FontAwsome",
  },
})

const CircleButton = ({ name, style, color }) => {
  let bgColor = "#e31676"
  let textColor = "#fff"

  if (color === "white") {
    bgColor = "#fff"
    textColor = "#e31676"
  }

  const [fontsLoaded] = useFonts({
    FontAwsome: fontAwsome,
  })

  return (
    <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
      {fontsLoaded ? (
        <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
      ) : (
        <AppLoading />
      )}
    </View>
  )
}

export default CircleButton
