// screens
import HomeScreen from '../screens/Home/HomeScreen';
import CitationScreen from '../screens/Citation/CitationScreen';
import ListOfDriversScreen from '../screens/List of Drivers/ListOfDriversScreen';
import ListOfViolationsScreen from '../screens/List of Violations/ListOfViolationsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

export const UserTabs = [
  {
    name: 'Home',
    component: HomeScreen,
    iconName: 'home',
  },
  {
    name: 'Citation',
    component: CitationScreen,
    iconName: 'post-add',
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
