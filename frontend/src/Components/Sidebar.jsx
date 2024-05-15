// Sidebar.js

import React from 'react';

function Sidebar() {
  const menuItems = [
    { id: 1, label: 'Home', icon: 'home', link: '/' },
    { id: 2, label: 'Profile', icon: 'user', link: '/profile' },
    { id: 3, label: 'Logout', icon: 'logout', link: '/logout' },
  ];

  return (
    <div className="w-1/4 bg-gray-800 text-white lg:hidden block">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="flex items-center py-2">
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={`M12 6v6m0 0v6m0-6h6m-6 0H6`} />
              </svg>
              <a href={item.link} className="hover:text-gray-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
