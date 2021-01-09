import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Modal, SlideOver } from '../components/overlays';

export default {
    title: "Overlays",
    decorators: [withKnobs]
};

export const overlayModal = () => <Modal />;
export const leftSlideOver = () => <SlideOver />;