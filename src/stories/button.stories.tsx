import React from "react";
import { Button, PagerButton, RoundedButton, BasicButton } from '../components/button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withKnobs]
};

export const primary = () => {
	const label = text("Label", "See now");
	const outlined = boolean("Oultined", false);
	const isRounded = boolean("Rounded", false);
	return (
		<Button onClick={action('clicked')} outlined={outlined} label={label} rounded={isRounded} />
	)
};

export const basic = () => {
	const backgroundColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];
	const defaultBackgroundColor = "green";
	const backGroundColor = select("Background Color", backgroundColors, defaultBackgroundColor);
	const label = text("Label", "Continue");
	const isSubmit = boolean("Is Button Type Submit", false);
	const isFat = boolean("Is Button Fat", false);
	const isDisabled = boolean("Is Button Disabled", false);
	const isRounded = boolean("Rounded", false);
	return (
		<BasicButton color={backGroundColor} label={label} submit={isSubmit} isFat={isFat} disabled={isDisabled} rounded={isRounded} />
	)
}

export const pagination = () => {
	return (
		<PagerButton />
	)
}

export const rounded = () => {
	const label = text("Label", "Continue");
	return (
		<RoundedButton label={label} />
	)
}