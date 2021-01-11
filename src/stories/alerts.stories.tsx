import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Alert } from '../components/alerts';

export default {
    title: "Alerts",
    decorators: [withKnobs]
};

export const pink = () => <Alert />;