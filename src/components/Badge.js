import React from 'react';

export default function Badge({ children, color }) {
  return <span className={`badge ${color}`}>{children}</span>;
}
