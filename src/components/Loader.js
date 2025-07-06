import React from 'react';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <>
      <div className="loader-backdrop"></div>
      <div className="loader">
        <dotlottie-player
          src="https://lottie.host/1bb482df-1765-413f-8318-3c417f220f4a/jo0SmeTyld.lottie"
          background="transparent"
          speed="0.8"
          style={{ width: '100%', height: '100%' }}
          loop
          autoplay
        >
        </dotlottie-player>
      </div>
    </>
  );
};

export default Loader; 