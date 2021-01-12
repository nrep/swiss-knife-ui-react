import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { DescriptionList, SimpleList, SimpleListWithAction, SimpleListWithHeader, BlocList, BlocListWithDescription, BlocListWithDescriptionAndAction, BlocListWithDescriptionAndActionAndHeader, DescriptionBlocList, DescriptionBlocListWithHeader } from '../components/lists';

export default {
    title: "Lists",
    decorators: [withKnobs]
};

export const Description = () => <DescriptionList />;
export const Simple = () => <SimpleList />;
export const WithAction = () => <SimpleListWithAction />;
export const WithHeader = () => <SimpleListWithHeader />;
export const Bloc = () => <BlocList />;
export const BlocWithDescription = () => <BlocListWithDescription />;
export const BlocWithDescriptionAndAction = () => <BlocListWithDescriptionAndAction />;
export const BlocWithDescriptionAndActionAndHeader = () => <BlocListWithDescriptionAndActionAndHeader />;
export const DescriptionBloc = () => <DescriptionBlocList />;
export const DescriptionBlocWithHeader = () => <DescriptionBlocListWithHeader />;