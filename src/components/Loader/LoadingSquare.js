import React from 'react';

import './LoadingSkeleton.css';

const LoadingSquare = ({ className = '' }) => {
	return <div className={`loading-square loading-pulse ${className}`}></div>;
};

export default LoadingSquare;
