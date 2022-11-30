import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

// DisplayModes
const DisplayMode1 = React.lazy(() => import('./views/displayMode1/dMode1'))
const DisplayMode2 = React.lazy(() => import('./views/displayMode2/dMode2'))
const DisplayMode3 = React.lazy(() => import('./views/displayMode3/dMode3'))
const DisplayMode4 = React.lazy(() => import('./views/displayMode4/dMode4'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/displayMode1', name: 'Display Mode 1', element: DisplayMode1 },
  { path: '/displayMode2', name: 'Display Mode 2', element: DisplayMode2 },
  { path: '/displayMode3', name: 'Display Mode 3', element: DisplayMode3 },
  { path: '/displayMode4', name: 'Display Mode 4', element: DisplayMode4 },
  { path: '/charts', name: 'Charts', element: Charts },
]

export default routes
