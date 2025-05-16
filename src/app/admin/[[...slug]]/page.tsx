'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Dynamically import TinaCMS only on the client side
    import('tinacms').then(({ TinaAdmin }) => {
      const tinaConfig = {
        clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
        branch: process.env.NEXT_PUBLIC_TINA_BRANCH || 'main',
        token: process.env.TINA_TOKEN,
        mediaStore: {
          loadUrlPrefix: '/images/',
          publicFolder: 'public',
          mediaRoot: 'images',
        },
      };

      // Mount TinaCMS admin in a div that we create
      const adminRoot = document.createElement('div');
      adminRoot.id = 'tina-admin-root';
      document.body.appendChild(adminRoot);

      // Render TinaCMS admin
      const root = require('react-dom/client').createRoot(adminRoot);
      root.render(<TinaAdmin config={tinaConfig} />);

      // Clean up loading indicator
      const loadingIndicator = document.getElementById('tina-loading-indicator');
      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }
    });
  }, []);

  return (
    <div 
      id="tina-loading-indicator"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <p className="text-lg mb-4">Loading TinaCMS admin...</p>
    </div>
  );
}