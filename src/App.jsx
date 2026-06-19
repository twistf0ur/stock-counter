import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // Load core modules (components + pages) then bootstrap app router
    Promise.all([
      import('./components/Router.js'),
      import('./components/Toast.js'),
      import('./components/Sidebar.js'),
      import('./components/Header.js'),
      import('./components/InventoryTable.js'),
      import('./components/InventoryCard.js'),
      import('./components/ActivityFeed.js'),
      import('./components/MarketWidget.js'),
      import('./components/MetricCard.js'),
      import('./components/Footer.js'),
      import('./pages/LandingPage.js'),
      import('./pages/InventoryPage.js'),
      import('./pages/DashboardPage.js'),
      import('./pages/LoginPage.js'),
      import('./pages/SignupPage.js'),
      import('./pages/RecoverPage.js')
    ]).then(() => import('./app.js'));
  }, []);

  return <div id="app" />;
}

export default App
