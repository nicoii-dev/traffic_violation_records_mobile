// screens
import AboutScreen from "../screens/About/AboutScreen";
import CitationScreen from "../screens/Citation/CitationScreen";
import ListOfDriversScreen from "../screens/List of Drivers/ListOfDriversScreen";
import ListOfViolationsScreen from "../screens/List of Violations/ListOfViolationsScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

export const UserTabs = [
    {
      name: 'Citation',
      component: CitationScreen,
      iconName: 'post-add',
    },
    {
        name: 'List of Drivers',
        component: ListOfDriversScreen,
        iconName: 'format-list-numbered',
      },
    {
      name: 'Types Violations',
      component: ListOfViolationsScreen,
      iconName: 'list-alt',
    },
    {
      name: 'Profile',
      component: ProfileScreen,
      iconName: 'person',
    },
  ];