import React from "react";

interface Props {
	message: string
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
	return (
		<p className="font-serif w-full text-center text-2xl italic leading-normal tracking-tight text-red-500">
			{ message }
		</p>
	);
}
 
export default ErrorMessage;