import React from 'react';
import { withEditorContext } from '@baic/gg-editor';
import { EditorContextProps } from '@baic/gg-editor/components/EditorContext';

interface WrappedClassComponentProps extends EditorContextProps {}

class WrappedClassComponent extends React.Component<WrappedClassComponentProps> {
  componentDidMount() {
    console.log('wrappedClassComponentProps:', this.props);
  }

  render() {
    return <div />;
  }
}

export default withEditorContext<WrappedClassComponentProps, WrappedClassComponent>(WrappedClassComponent);
