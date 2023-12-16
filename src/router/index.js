import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import AuthRoute from '@/components/AuthRoute'

const Home = lazy(() => import('@/pages/Layout/Home'))
const Article = lazy(() => import('@/pages/Layout/Article'))
const Publish = lazy(() => import('@/pages/Layout/Publish'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={'加载中...'}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'article',
        element: (
          <Suspense fallback={'加载中...'}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: 'publish',
        element: (
          <Suspense fallback={'加载中...'}>
            <Publish />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router
