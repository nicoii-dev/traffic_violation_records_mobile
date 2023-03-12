/* eslint-disable prettier/prettier */
// screens
import HomeScreenStack from '../navigations/stack/Home';
import CitationStack from '../navigations/stack/Citation';
import ProfileStack from '../navigations/stack/Profile';
import ViolationStack from '../navigations/stack/Violation';

export const UserTabs = [
  {
    name: 'Home',
    component: HomeScreenStack,
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
