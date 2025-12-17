import React, { useEffect, useState } from 'react';

const LLMStatus: React.FC = () => {
  const [status, setStatus] = useState<{ initialized: boolean } | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/llm-status')
      .then((r) => r.json())
      .then((j) => {
        if (!mounted) return;
        setStatus({ initialized: !!j.initialized });
      })
      .catch(() => {
        if (!mounted) return;
        setStatus({ initialized: false });
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (status === null) return <span style={{ marginLeft: 8 }}>Checking LLM…</span>;

  return (
    <span style={{ marginLeft: 8, fontSize: 12 }}>
      {status.initialized ? (
        <span style={{ color: 'green' }}>LLM: Ready</span>
      ) : (
        <span style={{ color: 'orange' }}>LLM: Unavailable</span>
      )}
    </span>
  );
};

export default LLMStatus;
