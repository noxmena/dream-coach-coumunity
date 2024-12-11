import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import RightPanel from './components/RightPanel';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header 
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        onNotificationsClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
      />
      <div className="flex relative">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="flex-1 lg:ml-64 lg:mr-80">
          <Feed />
        </main>
        <RightPanel isOpen={isRightPanelOpen} onClose={() => setIsRightPanelOpen(false)} />
      </div>
    </div>
  );
}

export default App;