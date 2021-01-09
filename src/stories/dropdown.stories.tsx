import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Dropdown, DropdownWithDividers } from '../components/dropdowns';

export default {
    title: "Dropdowns",
    decorators: [withKnobs]
};

export const simple = () => <Dropdown />;
export const withDividers = () => <DropdownWithDividers />;