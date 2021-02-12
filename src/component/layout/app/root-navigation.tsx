import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name: any) {
  navigationRef.current?.navigate(name);
}