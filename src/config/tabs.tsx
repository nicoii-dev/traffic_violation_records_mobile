// screens
import HomeScreen from '../screens/Home/HomeScreen';
import CitationStack from '../navigations/stack/Citation';
import ProfileStack from '../navigations/stack/Profile';
import ViolationStack from '../navigations/stack/Violation';

export const UserTabs = [
  {
    name: 'Home',
    component: HomeScreen,
    iconName: 'home',
  },
  {
    name: 'Citation',
    component: CitationStack,
    iconName: 'post-add',
  },
  {
    name: 'Types Violations',
    component: ViolationStack,
    iconName: 'list-alt',
  },
  {
    name: 'Profile',
    component: ProfileStack,
    iconName: 'person',
  },
];
