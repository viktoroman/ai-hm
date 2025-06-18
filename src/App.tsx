import React, { useState } from 'react';
import Prices from './Prices';
import CustomMenu from './CustomMenu';
import Dashboard from './Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Dashboard (Task #3)' },
    { id: 1, label: 'Task #1' },
    { id: 2, label: 'Task #2' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === idx
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-300 hover:text-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 0 && <Dashboard />}
        {activeTab === 1 && <Prices />}
        {activeTab === 2 && <CustomMenu />}
      </main>
    </div>
  );
}

export default App; 