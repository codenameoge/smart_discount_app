import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

export { Card, CardContent };
