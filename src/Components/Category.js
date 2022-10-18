import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import iron from '../Assets/HomePgae/iron.svg';
import speaker from '../Assets/HomePgae/speaker.svg';
import hotPlate from '../Assets/HomePgae/hot-plate.svg';
import ac from '../Assets/HomePgae/ac.svg';
import hoofer from '../Assets/HomePgae/hoofer.svg';
import microwave from '../Assets/HomePgae/microwave.svg';

const Category = () => {
	return (
		<div className='pt-[76px] px-[120px] pb-[102px]'>
			<div className='flex items-center px-[9px]'>
				<h3 className='text-black text-[25px] font-medium'>Browse Category</h3>
				<div className='flex items-center text-[#555555] text-xs font-medium ml-[21px]'>
					<p className='mr-[7px]'>All categories</p>
					<MdOutlineKeyboardArrowRight />
				</div>
			</div>
			<div className='pt-[55px] flex items-center pl-[20px] pr-[29px]'>
				<div className='flex flex-col mr-[71px] bg-[#F7F7F7] w-[134px] pb-[34px] hover:bg-white hover:shadow-[0_4px_5px_5px_rgba(0,0,0,0.3)]'>
					<div>
						<img src={iron} alt='an iron' />
					</div>
					<p className='text-bold text-[#555555] font-bold text-center'>Iron</p>
				</div>
				<div className='flex flex-col mr-[68px] bg-[#F7F7F7] w-[134px] pb-[34px] hover:bg-white hover:shadow-[0_4px_5px_5px_rgba(0,0,0,0.3)]'>
					<div className='w-full'>
						<img src={speaker} alt='an iron' />
					</div>
					<p className='text-bold text-[#555555] font-bold text-center mt-[17.54px]'>
						Speaker
					</p>
				</div>
				<div className='flex flex-col mr-[71px] bg-[#F7F7F7] w-[134px] pb-[34px] pt-[20px] hover:bg-white hover:shadow-[0_4px_5px_5px_rgba(0,0,0,0.3)]'>
					<div>
						<img src={hotPlate} alt='an iron' />
					</div>
					<p className='text-bold text-[#555555] font-bold text-center'>Hot Plate</p>
				</div>
				<div className='flex flex-col mr-[66px] bg-[#F7F7F7] w-[134px] pb-[34px] pt-[10px] hover:bg-white hover:shadow-[0_4px_5px_5px_rgba(0,0,0,0.3)]'>
					<div>
						<img src={microwave} alt='an iron' />
					</div>
					<p className='text-bold text-[#555555] font-bold text-center'>Microwave</p>
				</div>
				<div className='flex flex-col mr-[68px] bg-[#F7F7F7] w-[134px] pb-[34px] pt-[34px] hover:bg-white hover:shadow-[0_4px_5px_5px_rgba(0,0,0,0.3)]'>
					<div className='w-full'>
						<img src={ac} alt='an ac' className='w-full' />
					</div>
					<p className='text-bold text-[#555555] font-bold text-center mt-[20px]'>
						AC
					</p>
				</div>
				<div className='flex flex-col bg-[#F7F7F7] w-[134px] pb-[34px] pt-[10px] hover:bg-white hover:shadow-[0_4px_5px_5px_rgba(0,0,0,0.3)]'>
					<div>
						<img src={hoofer} alt='an iron' />
					</div>
					<p className='text-bold text-[#555555] font-bold text-center'>Hoofer</p>
				</div>
			</div>
		</div>
	);
};

export default Category;
