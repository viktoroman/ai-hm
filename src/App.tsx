import React, { useState } from 'react';
import Prices from './Prices';
import CustomMenu from './CustomMenu';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Task #1' },
    { id: 1, label: 'Task #2' },
    { id: 2, label: 'Task #3' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === tab.id
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
        {activeTab === 0 && <Prices />}
        {activeTab === 1 && <CustomMenu />}
        {activeTab === 2 && <div className="px-4 py-6 sm:px-0 text-gray-300"></div>}
      </main>
    </div>
  );
}

export default App; 