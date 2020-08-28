import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import LoginScreen from "./src/screens/LoginScreen"
import MemoDetailScreen from "./src/screens/MemoDetailScreen"
import MemoEditScreen from "./src/screens/MemoEditScreen"
import MemoListScreen from "./src/screens/MemoListScreen"
import SignupScreen from "./src/screens/SignupScreen"

const App = createStackNavigator(
  {
    Home: {
      screen: MemoListScreen,
    },
    MemoDetail: {
      screen: MemoDetailScreen,
    },
    MemoEdit: {
      screen: MemoEditScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerTitle: "Memo",
      headerStyle: {
        backgroundColor: "#265366",
      },
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
)

export default createAppContainer(App)
