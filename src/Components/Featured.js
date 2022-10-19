import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Featured = () => {
	return (
		<div className='pb-[86px]'>
			<div className='flex items-center px-[9px]'>
				<h3 className='text-black text-[25px] font-medium'>Featured Products</h3>
				<div className='flex items-center text-[#555555] text-xs font-medium ml-[21px]'>
					<p className='mr-[7px]'>All offers</p>
					<MdOutlineKeyboardArrowRight />
				</div>
			</div>
		</div>
	);
};

export default Featured;
