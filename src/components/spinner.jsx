import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: #1a73e8;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @media (min-width: 768px) {
          .loader {
            width: 75px;
            height: 75px;
          }
        }
        @media (min-width: 1024px) {
          .loader {
            width: 100px;
            height: 100px;
          }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
