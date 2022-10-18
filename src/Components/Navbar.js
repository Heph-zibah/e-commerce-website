import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
	MdOutlinePersonOutline,
	MdHelpOutline,
	MdOutlineShoppingCart,
	MdKeyboardArrowDown,
	MdOutlineMenu
} from 'react-icons/md';

const Navbar = () => {
	return (
		<div className='font-Roboto  pt-[36px] flex flex-col justify-center '>
			<div className='px-[120px]'>
				<div className='flex items-center justify-between'>
					<div>
						<h1 className='text-black font-bold text-xl'>Oluwalogbon </h1>
						<span className='text-[#626161] font-normal'>Electronics</span>
					</div>
					<div className='flex bg-[#F3F3F3] items-center justify-between px-[14px] py-[7px]'>
						<form action=''>
							<input
								type='text'
								name='categories'
								placeholder='ALL CATEGORIES'
								className='border-0 bg-[#F3F3F3] outline-none text-neutral'
							/>
						</form>
						<div className='h-[25px] w-[2px] bg-[#B0B7BD]'></div>
						<form action=''>
							<input
								type='text'
								name='categories'
								placeholder='I’m shopping for ...'
								className='border-0 bg-[#F3F3F3] outline-none text-neutral ml-[37px]'
							/>
						</form>
						<AiOutlineSearch />
					</div>
					<div className='flex items-center space-x-[21px] font-bold'>
						<div className='flex items-center space-x-[3px]'>
							<MdOutlinePersonOutline className='text-[#0D1C2E] text-[25px]' />
							<p>Login</p>
							<MdKeyboardArrowDown className='text-[#0D1C2E] text-[27px]' />
						</div>
						<div className='flex items-center space-x-[3px]'>
							<MdHelpOutline className='text-[#0D1C2E] text-[25px]' />
							<p>Help</p>
							<MdKeyboardArrowDown className='text-[#0D1C2E] text-[27px]' />
						</div>
						<div className='flex items-center space-x-[3px]'>
							<MdOutlineShoppingCart className='text-[#0D1C2E] text-[25px]' />
							<p>Cart</p>
							<MdKeyboardArrowDown className='text-[#0D1C2E] text-[27px]' />
						</div>
					</div>
				</div>
			</div>
			<div className='w-full '>
				<div className='w-full h-[2px] bg-[#BFC6CD] mt-[27px]'></div>
			</div>
			<div className='px-[120px]'>
				<div className='flex items-center mt-[2px]'>
					<div className='flex items-center py-[8px] px-[15px] bg-primary'>
						<MdOutlineMenu className='text-xl' />
						<p className='text-xs font-medium text-neutral ml-2'>SHOP BY CATEGORY</p>
					</div>
					<ul className='flex items-center ml-[60px] text-black text-sm font-medium space-x-[60px]'>
						<li>HOME</li>
						<li>SHOP</li>
						<li>FEATURES</li>
						<li>CART</li>
						<li>ABOUT US</li>
						<li>CONTACT</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
