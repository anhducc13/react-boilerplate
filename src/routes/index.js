import { lazy } from 'react';
import { t } from 'helpers/i18n';

// Home page
const Home = lazy(() => import('views/Home'));

const TodoList = lazy(() => import('views/Home'));
const TodoAdd = lazy(() => import('views/Home'));
const Page404 = lazy(() => import('views/Page404'));

/*
 * If route has children => it's a parent menu
 */
const routes = [
  {
    exact: true,
    path: '/',
    name: t('Home'),
    component: Home,
    icon: 'home',
  },
  {
    path: '/todos',
    name: t('Todos'),
    icon: 'edit',
    children: ['/todos', '/todos/add'],
  },
  {
    exact: true,
    path: '/todos',
    name: t('ListTodos'),
    component: TodoList,
  },
  {
    exact: true,
    path: '/todos/add',
    name: t('AddTodo'),
    component: TodoAdd,
  },
  {
    exact: true,
    path: '*',
    name: t('404'),
    component: Page404,
  },
];

export default routes;
