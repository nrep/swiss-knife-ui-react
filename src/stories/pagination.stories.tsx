import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Pagination } from '../components/pagination';

export default {
    title: "Pagination",
    decorators: [withKnobs]
};

export const paginationFooter = () => <Pagination />;