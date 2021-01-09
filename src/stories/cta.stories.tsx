import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { CTASection } from '../components/ctas';

export default {
    title: "CTA Sections",
    decorators: [withKnobs]
};

export const CTA = () => <CTASection />;