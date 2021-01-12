import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Table, SimpleTable, BorderedTable, StylisedTable, StylisedTableWithPager, StylisedTableWithPagerAndAction } from '../components/tables';

export default {
    title: "Tables",
    decorators: [withKnobs]
};

export const tableWithMultiLineContent = () => <Table />;
export const Simple = () => <SimpleTable />;
export const Bordered = () => <BorderedTable />;
export const Stylised = () => <StylisedTable />;
export const StylisedWithPager = () => <StylisedTableWithPager />;
export const StylisedWithPagerAndAction = () => <StylisedTableWithPagerAndAction />;