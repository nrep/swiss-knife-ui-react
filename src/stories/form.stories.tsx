import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Form, SignInForm } from '../components/forms';

export default {
    title: "Forms",
    decorators: [withKnobs]
};

export const formLayout = () => <Form />;
export const signin = () => <SignInForm />;