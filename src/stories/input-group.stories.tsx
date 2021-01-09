import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { InputGroup } from '../components/input-groups';

export default {
    title: "Input Groups",
    decorators: [withKnobs]
};

export const group = () => <InputGroup />;