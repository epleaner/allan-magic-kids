import React from 'react';

export default function Page({ bgColor, children }) {
  return (
    <div
      className={`container flex items-center justify-center min-w-full max-w-screen-xl min-h-screen page-wrapper ${bgColor}`}
    >
      {children}
    </div>
  );
}
