import React from 'react';
import VisibilityTrigger from '../../dist/VisibilityTrigger';

import './VisibilityTrigger.css';

export default {
  title: 'Basic Functionality',
  component: VisibilityTrigger,
};

export function BasicStory() {
  return (
    <>
      <div className="extender" />
      <div className="toChange" data-visibility-trigger="change" />
      <VisibilityTrigger />
    </>
  );
}
