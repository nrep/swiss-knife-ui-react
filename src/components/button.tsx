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

interface AnchorProps {
	href?: string;
}

export const BasicAppStoreButton = (props: AnchorProps) => {
	return (
		<button
			type="button"
			className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center"
			onClick={() => window.location.assign(props.href)}
			>
			<div className="mr-3">
				<svg viewBox="0 0 384 512" width="30">
				<path
					fill="currentColor"
					d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
				/>
				</svg>
			</div>
			<div>
				<div className="text-xs">Download on the</div>
				<div className="text-xl font-semibold font-sans -mt-1">
				App Store
				</div>
			</div>
		</button>
	)
};

export const OutlinedBasicAppStoreButton = (props: AnchorProps) => {
	return (
		<button
			type="button"
			className="flex mt-3 w-48 h-14 bg-transparent text-black border border-black rounded-xl items-center justify-center"
			onClick={() => window.location.assign(props.href)}
			>
			<div className="mr-3">
				<svg viewBox="0 0 384 512" width="30">
				<path
					fill="currentColor"
					d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
				/>
				</svg>
			</div>
			<div>
				<div className="text-xs">Download on the</div>
				<div className="text-2xl font-semibold font-sans -mt-1">
				App Store
				</div>
			</div>
		</button>
	)
};

export const FullAppStoreButton = (props: AnchorProps) => {
	return (
		<button
			type="button"
			className="flex mt-3 w-60 h-14 bg-black text-white rounded-xl items-center justify-center"
			onClick={() => window.location.assign(props.href)}
			>
			<div className="mr-3">
				<svg viewBox="0 0 384 512" width="30">
				<path
					fill="currentColor"
					d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
				/>
				</svg>
			</div>
			<div>
				<div className="text-xs">Download on the</div>
				<div className="text-2xl font-semibold font-sans -mt-1">
				Mac App Store
				</div>
			</div>
		</button>
	)
};

interface AppStoreButtonProps extends AnchorProps {
	type: string;
}

export const AppStoreButton = (props: AppStoreButtonProps) => {
	return (
		<>
			{props.type === "basic" && <BasicAppStoreButton href={props.href} />}
			{props.type === "outlined" && <OutlinedBasicAppStoreButton href={props.href} />}
			{props.type === "full" && <FullAppStoreButton href={props.href} />}
		</>
	)
};

export const PlayStoreButton = (props: AnchorProps) => {
	return (
		<button
			type="button"
			className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center"
			onClick={() => window.location.assign(props.href)}
			>
			<div className="mr-3">
				<svg viewBox="30 336.7 120.9 129.2" width="30">
				<path
					fill="#FFD400"
					d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
				/>
				<path
					fill="#FF3333"
					d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
				/>
				<path
					fill="#48FF48"
					d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
				/>
				<path
					fill="#3BCCFF"
					d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
				/>
				</svg>
			</div>
			<div>
				<div className="text-xs">GET IT ON</div>
				<div className="text-xl font-semibold font-sans -mt-1">
				Google Play
				</div>
			</div>
		</button>
	)
};