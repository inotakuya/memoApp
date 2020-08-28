import { createIconSet } from "@expo/vector-icons"
import { AppLoading } from "expo"
import { useFonts } from "expo-font"
import React from "react"
import { StyleSheet, TouchableHighlight, View } from "react-native"
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
  container: {
    width: 48,
    height: 48,
    position: "absolute",
    bottom: 24,
    right: 24,
  },
  circleButton: {
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

const CircleButton = ({ name, style, color, onPress }) => {
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
    <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
      <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
        {fontsLoaded ? (
          <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
        ) : (
          <AppLoading />
        )}
      </View>
    </TouchableHighlight>
  )
}

export default CircleButton
