import { IRoute } from './types/common';
import ChatPage from './pages/ChatPage';
import ContactsPage from './pages/ContactsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import Login from './components/LoginComponent';
import Registration from './components/RegistrationComponent';

export const publicRoutes: IRoute[] = [
  {
    path: "/id_:id",
    component: ProfilePage,
    exact: true
  },
  {
    path: "/login",
    component: Login,
    exact: true
  },
  {
    path: "/registration",
    component: Registration,
    exact: true
  }
]

export const privateRoutes: IRoute[] = [
  {
    path: "/chats",
    component: ChatPage,
    exact: true
  },
  {
    path: "/contacts",
    component: ContactsPage,
    exact: true

  },
  {
    path: "/settings",
    component: SettingsPage,
    exact: true
  }
];