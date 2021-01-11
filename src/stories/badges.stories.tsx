import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Badge, ClosableBadge, NotificationBadge, IconWithBadge } from '../components/badges';

export default {
    title: "Badges",
    decorators: [withKnobs]
};

export const simple = () => <Badge />;
export const closable = () => <ClosableBadge />;
export const notification = () => <NotificationBadge />;
export const withIcon = () => <IconWithBadge />;