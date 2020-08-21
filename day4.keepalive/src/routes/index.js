import { renderRoutes } from "react-router-config";
import List from '../views/List'
import Edit from '../views/Edit'
import Layout from '../views/Layout'
import withAliveComponent from './withAliveComponent'

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/List/:id",
        exact: true,
        component: withAliveComponent(List)
      }, {
        path: "/Edit/:id",
        exact: true,
        component: withAliveComponent(Edit)
      }
    ]
  }
]

export default renderRoutes(routes)