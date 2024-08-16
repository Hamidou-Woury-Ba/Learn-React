import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './custom/Header.jsx'
import StopWatch from './components/AllComponents/Watch/StopWatch.jsx'
import DigitalClock from './components/AllComponents/DigitalClock/DigitalClock.jsx'
import ColorPicker from './components/AllComponents/ColorPicker/ColorPicker.jsx'
import Counter from './components/AllComponents/Counter.jsx'
import ToDoList from './components/AllComponents/TODOLIST/ToDoList.jsx'
import Card from './components/AllComponents/Card/Card.jsx'
import Footer from './custom/Footer.jsx'
import ImportArrayListComponent from './components/AllComponents/ImportArrayListComponent.jsx'
import Index from './components/AllComponents/ListsFruitsLegumes/index.jsx'
import FormsIndex from './components/AllComponents/Forms/FormsIndex.jsx'
import IndexHooks from './components/AllComponents/ReactHooks/IndexHooks.jsx'
import UseStateHook from './components/AllComponents/ReactHooks/components/UseStateHook.jsx'
import UseEffectHook from './components/AllComponents/ReactHooks/components/UseEffect/UseEffectHook.jsx'
import UseRefHook from './components/AllComponents/ReactHooks/components/UseRefHook.jsx'
import UseContextHook from './components/AllComponents/ReactHooks/components/UseContextHook.jsx'
import HooksHeader from './components/AllComponents/ReactHooks/custom/HooksHeader.jsx'
import MyUseEffectComponent from './components/AllComponents/ReactHooks/components/UseEffect/MyUseEffectComponent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/stop-watch',
    element: <StopWatch />,
  },
  {
    path: '/digital-clock',
    element: <DigitalClock />,
  },
  {
    path: '/color-picker',
    element: <ColorPicker />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/todolist',
    element: <ToDoList />,
  },
  {
    path: '/card',
    element: <Card />,
  },
  {
    path: '/fruit',
    element: <ImportArrayListComponent />,
  },
  {
    path: '/fruits-legumes',
    element: <Index />,
  },
  {
    path : '/forms',
    element : <FormsIndex />
  },
  {
    path : '/hooks',
    element : <IndexHooks />
  },
  {
    path : '/hooks/useState',
    element : <UseStateHook />
  },
  {
    path : '/hooks/useEffect',
    element : <UseEffectHook />
  },
  {
    path : '/hooks/useRef',
    element : <UseRefHook />
  },
  {
    path : '/hooks/useContext',
    element : <UseContextHook />
  },
  {
    path : '/hooks/useEffect-change-title-page',
    element : <MyUseEffectComponent />
  },
])

const isHooksPage = location.pathname.startsWith('/hooks');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen flex flex-col">
      <Header />
      {isHooksPage && <HooksHeader />}
      <div className="flex-grow">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  </React.StrictMode>,
)
