import { useState } from "react";
import LandingPage from "./components/LandingPage";
import CreatorDashboard from "./components/CreatorDashboard";
import PromoterDashboard from "./components/PromoterDashboard";
import AdminPanel from "./components/AdminPanel";

type View = 'landing' | 'creator' | 'promoter' | 'admin';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');

  const handleNavigate = (view: View) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen">
      {currentView === 'landing' && <LandingPage onNavigate={handleNavigate} />}
      {currentView === 'creator' && <CreatorDashboard onNavigate={handleNavigate} />}
      {currentView === 'promoter' && <PromoterDashboard onNavigate={handleNavigate} />}
      {currentView === 'admin' && <AdminPanel onNavigate={handleNavigate} />}
    </div>
  );
}
