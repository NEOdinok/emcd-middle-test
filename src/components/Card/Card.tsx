import React from "react";
import EMCDLogo from "@/assets/imgs/emcd-1.jpg";

interface Props {
	name: string,
	email: string,
}

const Card: React.FC<Props> = ({ name, email }) => {
	return (
		<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
			<div className="aspect-h-3 aspect-w-4 relative bg-gray-100">
				<img
					src={EMCDLogo}
					className="object-cover"
				/>
			</div>
			<div className="grid grid-cols-1 gap-3 md:col-span-2">
				<h2 className="font-sans font-semibold tracking-tighter text-slate-800 text-3xl md:text-4xl">
					{ name }
				</h2>

				<p className="font-serif italic tracking-tighter text-slate-500">
					{ email }
				</p>

				<p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
					Massa sapien faucibus et molestie ac feugiat sed lectus.
					Dignissim cras tincidunt lobortis feugiat vivamus at augue.
					Pharetra pharetra massa massa ultricies. Ut morbi tincidunt augue interdum. 
					Volutpat odio facilisis mauris sit amet massa vitae. In dictum non consectetur a
					erat nam. Pulvinar…
				</p>
			</div>
		</div>
	);
}
 
export default Card;