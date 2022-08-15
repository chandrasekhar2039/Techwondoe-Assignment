import { Component } from './components';

export default {
  title: 'Task/Sub-component',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Subcomponent = () => <Component />;
