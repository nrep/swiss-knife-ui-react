import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Layout from './Layout';
// import '@storybook/addon-console';
// import { withConsole } from '@storybook/addon-console';

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);
addDecorator(withInfo({
	inline: true,
	propTablesExclude: [Layout]
}));
// addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
}