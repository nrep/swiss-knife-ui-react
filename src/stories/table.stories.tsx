import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Table } from '../components/tables';

export default {
    title: "Tables",
    decorators: [withKnobs]
};

export const tableWithMultiLineContent = () => <Table />;