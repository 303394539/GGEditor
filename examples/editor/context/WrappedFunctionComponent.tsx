import React from 'react';
import { withEditorContext } from '@baic/gg-editor';
import { EditorContextProps } from '@baic/gg-editor/components/EditorContext';

interface WrappedFunctionComponentProps extends EditorContextProps {
  forwardRef?: React.Ref<HTMLDivElement>;
}

const WrappedFunctionComponent: React.FC<WrappedFunctionComponentProps> = props => {
  console.log('wrappedFunctionComponentProps:', props);

  return <div ref={props.forwardRef} />;
};

export default withEditorContext<WrappedFunctionComponentProps, HTMLDivElement>(WrappedFunctionComponent);
