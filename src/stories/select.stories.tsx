import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SelectWithAvatar } from '../components/selects';

export default {
    title: "Select Menus",
    decorators: [withKnobs]
};

export const select = () => <SelectWithAvatar />;