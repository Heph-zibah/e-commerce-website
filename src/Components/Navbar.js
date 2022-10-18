import React from 'react';

const Navbar = () => {
	return (
		<div className='font-Roboto  pt-[36px] flex justify-center'>
			<div className='w-full max-w-[1024px]'>
				<div className='flex'>
					<div>
						<h1 className='text-black font-bold text-xl'>
							Oluwalogbon{' '}
							<span className='text-[#626161] font-normal'>Electronics</span>
						</h1>
					</div>
					<form action=''>
						<input type='text' name='categories' placeholder='ALL CATEGORIES' />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
