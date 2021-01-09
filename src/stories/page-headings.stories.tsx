import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { PageHeading } from '../components/page-headings';

export default {
    title: "Page Headings",
    decorators: [withKnobs]
};

export const heading = () => <PageHeading />;