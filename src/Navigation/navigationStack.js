import { StackNavigator } from "react-navigation";
import { Platform } from "react-native";
import Home from "../Components/home";
import Roles from "../Components/roles";
import Settings from "../Components/settings";
import Empty from "../Components/empty";
import Role from "../Components/role";

const navigator = StackNavigator(
{
  home: {
    screen: Home
  },
  roles: {
    screen: Roles
  },
  settings: {
    screen: Settings
  },
  empty: {
    screen: Empty
  },
  role: {
    screen: Role
  }
 },
 {
  initialRouteName: 'home',
  headerMode: 'screen',

  /*
 * Use modal on iOS because the card mode comes from the right,
 * which conflicts with the drawer example gesture
 */
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
 }
);

export default navigator;
