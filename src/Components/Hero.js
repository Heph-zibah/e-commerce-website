import React from 'react';
import camera from '../Assets/HomePgae/camera.svg';
import generator from '../Assets/HomePgae/generator.svg';

const Hero = () => {
	return (
		<div className='hero-bg grid grid-cols-12 items-center px-[121px] pt-[40px] pb-[52px] mt-[2px]'>
			<div className='flex items-center bg-[#D5DEE5] rounded-[7px] relative col-start-1 col-end-9'>
				<div className='pl-[56px] pt-[59px] pb-[72px]'>
					<h1 className='text-[30px] text-[#323232] font-medium'>
						Quality Electronics <br /> built for choice and comfort
					</h1>
					<p className='text-xs text-[#626161] font-medium mt-[38px] pb-[69px]'>
						Quality home appliances and electonics <br /> durable and affordable
					</p>
					<button className='text-[#323232] bg-white px-[23px] py-[5px] rounded-[5px] text-xs'>
						Shop Now
					</button>
				</div>
				<div className='w-[505px] h-[284px] pt-[56px] ml-[-150px]'>
					<img src={camera} alt='camera' className=' ' />
				</div>
			</div>
			<div className='flex items-center bg-secondary rounded-[7px] ml-[22px] col-start-9 col-end-13 pr-[36px]'>
				<div className='pl-[40px] pt-[61px] pb-[62px] '>
					<h2 className='text-[32px] text-[#323232] font-bold'>20% SALE OFF</h2>
					<p className='text-[13px] text-[ #050203] font-medium mt-[25px] mb-[144px]'>
						Elepaq generator
					</p>
					<button className='text-[#323232] bg-white px-[23px] py-[5px] rounded-[5px] text-xs'>
						Shop Now
					</button>
				</div>
				<div className='w-[183px] h-[155px] ml-[-100px] mb-[-70px]'>
					<img src={generator} alt='generator' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
