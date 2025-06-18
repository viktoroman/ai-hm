import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    // @ts-ignore
    const worker = new Worker(new URL('./dashboardWorker.js', import.meta.url));
    worker.onmessage = (e) => {
      setD(e.data);
      worker.terminate();
    };
    worker.postMessage('start');
    return () => worker.terminate();
  }, []);

  return <div className="text-white">{d}</div>;
} 