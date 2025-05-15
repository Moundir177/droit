'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to TinaCMS admin
    const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
    if (clientId) {
      // Use the direct TinaCMS app URL instead of auth flow
      window.location.href = `https://app.tina.io/projects/${clientId}`;
    } else {
      console.error('TinaCMS Client ID not found. Make sure it is set in your .env.local file.');
    }
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg">Redirecting to TinaCMS admin...</p>
    </div>
  );
}