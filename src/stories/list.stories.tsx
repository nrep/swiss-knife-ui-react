import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { DescriptionList } from '../components/lists';

export default {
    title: "Lists",
    decorators: [withKnobs]
};

export const List = () => <DescriptionList />;