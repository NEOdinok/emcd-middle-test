import React from 'react';
import myFace from '@/assets/imgs/ya.jpg';
import EMCDLogo from '@/assets/imgs/emcd-1.jpg';

const Header: React.FC = () => {
	return (
		<header className="px-4 py-8 md:px-6 md:py-10 lg:py-12">
			<div className="mx-auto w-full max-w-3xl">
				<div className="grid grid-cols-1 justify-items-center gap-20">
					<div className="px-4">
						<div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
							<div className="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
								<img 
									src={EMCDLogo}
									alt=""
									className="object-cover"
								/>
							</div>

							<div className="grid grid-cols-1 gap-2 text-center">
								<h1 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl">
									EMCD Middle Frontend Dev Task
								</h1>
								<p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
									This is infinite scroll so scroll down to see more and more cards appear..
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
 
export default Header;