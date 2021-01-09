import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Avatars } from '../components/avatars';

export default {
    title: "Avatars",
    decorators: [withKnobs]
};

export const avatars = () => <Avatars />;