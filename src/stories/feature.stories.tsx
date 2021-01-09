import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { FeatureSection } from '../components/features';

export default {
    title: "Feature Sections",
    decorators: [withKnobs]
};

export const feature = () => <FeatureSection />;