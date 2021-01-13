import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Alert, InformationCard, CookieAlert, ConfirmationCard } from '../components/alerts';

export default {
    title: "Alerts",
    decorators: [withKnobs]
};

export const pink = () => <Alert />;
export const cardOfInformation = () => <InformationCard />;
export const cookie = () => <CookieAlert />;
export const confirmation = () => <ConfirmationCard />;