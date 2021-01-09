import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Topbar, Navbar } from '../components/headers';

export default {
    title: "Headers",
    decorators: [withKnobs]
};

export const Toolbar = () => <Topbar />;
export const nav = () => <Navbar />;