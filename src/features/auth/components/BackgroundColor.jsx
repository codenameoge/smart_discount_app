import React from 'react';

const BackgroundColor = () => {
	return (
		<>
			<div
  className='absolute bg-[rgba(250,188,8,1)] w-[200px] h-[200px] sm:w-[550px] sm:h-[500px] rounded-full bottom-0 lg:bottom-10 left-0 -z-20 blur-xl' 
/>

			<div className='absolute bg-black w-[200px] h-[200px] sm:w-[550px] sm:h-[500px] sm:overflow-x-hidden rounded-full right-0 top-0 lg:-top-10 -z-20 blur-xl' />
		</>
	);
};

export default BackgroundColor;
