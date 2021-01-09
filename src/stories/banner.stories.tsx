import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { HeaderBanner } from '../components/banners';

export default {
    title: "Banners",
    decorators: [withKnobs]
};

export const banner = () => <HeaderBanner />;