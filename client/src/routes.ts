import { IRoute } from './types/common';
import AuthPage from './pages/AuthPage';
import ChatPage from './pages/ChatPage';
import ContactsPage from './pages/ContactsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';

export const publicRoutes: IRoute[] = [
  {
    path: "/id_:id",
    component: ProfilePage,
    exact: true
  },
  {
    path: "/login",
    component: AuthPage,
    exact: true,
    params: {
      isLogin: true
    }
  },
  {
    path: "/registration",
    component: AuthPage,
    exact: true,
    params: {
      isLogin: false
    }
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