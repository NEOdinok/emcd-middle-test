import React, { forwardRef, memo } from "react";
import EMCDLogo from "@/assets/imgs/emcd-1.jpg";

interface Props {
	name: string,
	email: string,
	imageURL?: string,
};

const UserCard: React.FC<Props> = ({email, name, imageURL}) => {

	return (
    <div className="font-sans">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6  border-b">
          <img
            className="h-24 w-24 rounded-full mx-auto"
            src={imageURL || EMCDLogo}
            alt={name}
          />
          <p className="pt-2 text-lg font-semibold">{ name }</p>
          <p className="text-sm text-gray-600">{ email }</p>
          <div className="mt-5">
            <div
              className="border cursor-pointer rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
            >
              Do not press
            </div>
          </div>
        </div>

        <div className="border-b">
          <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex">
            <div className="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">Add friend</p>
              <p className="text-xs text-gray-500">You really sure ?</p>
            </div>
          </div>
          <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex">
            <div className="text-green-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                User socials &amp; integrations
              </p>
              <p className="text-xs text-gray-500">Google, slack, mail</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="px-4 py-2 pb-4 cursor-pointer hover:bg-gray-100 flex">
            <p className="text-sm font-medium text-gray-800 leading-none">Click me</p>
          </div>
          <div className="px-4 py-2 pb-4 cursor-pointer  hover:bg-gray-100 flex">
            <p className="text-sm font-medium text-gray-800 leading-none">Do not click</p>
          </ div>
          <div className="px-4 py-2 pb-4 cursor-pointer  hover:bg-gray-100 flex">
            <p className="text-sm font-medium text-gray-800 leading-none">Delete user</p>
          </div>
        </div>
      </div>
    </div>
	);
}
 
export default UserCard;
