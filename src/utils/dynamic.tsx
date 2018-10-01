import React from 'react';

interface State {
  Component: React.ComponentClass | null;
}

const asyncComponent = (loadComponent: () => Promise<any>) =>
  class AsyncComponent extends React.Component<{}, State> {
    constructor(props: Object) {
      super(props);
      this.state = {
        Component: null,
      };
    }

    componentWillMount() {
      if (this.hasLoadedComponent()) {
        return;
      }

      loadComponent()
        .then((module: any) => module.default || module)
        .then((Component: React.ComponentClass) => {
          this.setState({Component});
        })
        .catch((err: Error) => {
          console.error(`Cannot load component in <AsyncComponent />`);
          throw err;
        });
    }

    hasLoadedComponent() {
      return this.state.Component !== null;
    }

    render() {
      const {Component} = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };

export default asyncComponent;
