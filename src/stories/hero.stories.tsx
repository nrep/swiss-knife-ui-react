import React from "react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { Hero } from '../components/heros';

export default {
    title: "Hero Sections",
    decorators: [withKnobs]
};

export const heroSection = () => {
    return (
        <Hero />
    )
}