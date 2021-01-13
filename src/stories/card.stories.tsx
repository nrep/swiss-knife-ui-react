import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SalesCard } from '../components/cards';

export default {
    title: "Cards",
    decorators: [withKnobs]
};

export const sales = () => <SalesCard />;