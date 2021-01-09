import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { StackedLayout } from '../components/layouts';

export default {
    title: "Layouts",
    decorators: [withKnobs]
};

export const stacked = () => <StackedLayout />;