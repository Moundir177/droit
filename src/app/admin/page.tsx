'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the admin index.html
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Admin Panel...</h1>
        <p>If you are not redirected, <a href="/admin/index.html" className="text-blue-500 underline">click here</a>.</p>
      </div>
    </div>
  );
} 