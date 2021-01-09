import React, { FC } from 'react';

type ButtonTypes = {
	/**
	* Label of the button
	*/
	label: string;
	/**
	* Boolean value to define the button style 
	*/
	outlined?: boolean;
	/**
	* Button click action
	*/
	onClick(): void;
	rounded?: boolean;
}

const BASE_BUTTON = 'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg'
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-teal-400 border border-teal-400 text-white`
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-teal-400 text-teal-400`
const ROUNDED_BUTTON = `rounded-full`;

export const Button:FC<ButtonTypes> = ({ onClick, label = "Some label", outlined, rounded }) => {
	return (
		<button
			onClick={onClick}
			className={`${outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON} ${rounded && ROUNDED_BUTTON}`}
			>
			<span>{label}</span>
		</button>
	)
};

export const PagerButton: FC = () => {
	return (
	  <div className="flex items-center">
		<button
		  type="button"
		  className="w-full px-1 py-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100 px-4 py-2"
		>
		  <svg
			width="9"
			fill="currentColor"
			height="8"
			className=""
			viewBox="0 0 1792 1792"
			xmlns="http://www.w3.org/2000/svg"
		  >
			<path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z" />
		  </svg>
		</button>
		<button
		  type="button"
		  className="w-full px-1 py-1 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 px-4 py-2"
		>
		  1
		</button>
		<button
		  type="button"
		  className="w-full px-1 py-1 border text-base text-gray-600 bg-white hover:bg-gray-100 px-4 py-2"
		>
		  2
		</button>
		<button
		  type="button"
		  className="w-full px-1 py-1 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100 px-4 py-2"
		>
		  3
		</button>
		<button
		  type="button"
		  className="w-full px-1 py-1 border text-base text-gray-600 bg-white hover:bg-gray-100 px-4 py-2"
		>
		  4
		</button>
		<button
		  type="button"
		  className="w-full px-1 py-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100 px-4 py-2"
		>
		  <svg
			width="9"
			fill="currentColor"
			height="8"
			className=""
			viewBox="0 0 1792 1792"
			xmlns="http://www.w3.org/2000/svg"
		  >
			<path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
		  </svg>
		</button>
	  </div>
	);
};

interface Props {
	icon?: boolean;
	label?: string;
	onClick?: () => void;
}
  
export const RoundedButton = (props: Props) => {
	return (
		<button
			onClick={props.onClick}
			className={`${props.icon ? "flex items-center" : ""}${
			props.label ? " px-6 py-2" : " p-4"
			}  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none`}
		>
			{props.icon && (
			<svg
				width="20"
				height="20"
				fill="currentColor"
				viewBox="0 0 2304 1792"
				className={props.label ? "mr-4" : ""}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z" />
			</svg>
			)}
			{props.label}
		</button>
	);
};

interface BasicProps {
	color?: string;
	icon?: JSX.Element;
	disabled?: boolean;
	submit?: boolean;
	isFat?: boolean;
	label?: string;
	onClick?: () => void;
	rounded?: boolean;
  }
  
  const colors = {
	gray:
	  "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200",
	red:
	  "bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200",
	yellow:
	  "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200",
	green:
	  "bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200",
	blue:
	  "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200",
	indigo:
	  "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200",
	purple:
	  "bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200",
	pink:
	  "bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200",
  };
  
  export const BasicButton = (props: BasicProps) => {
	return (
	  <button
		onClick={props.onClick}
		type={props.submit ? "submit" : "button"}
		disabled={props.disabled}
		className={`${props.isFat ? "py-4 px-6 " : "py-2 px-4 "}${
		  props.icon ? "flex justify-center items-center " : ""
		} ${
		  colors[props.color]
		} ${props.rounded && ROUNDED_BUTTON} text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
		  props.disabled ? " opacity-70 cursor-not-allowed" : ""
		}${!props.label ? " w-12 h-12" : ""}`}
	  >
		{props.icon && props.icon}
  
		{props.label && props.label}
	  </button>
	);
  };