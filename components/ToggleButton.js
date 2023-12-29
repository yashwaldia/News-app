// components/ToggleButton.js
import React, { useState } from 'react';

const ToggleButton = ({ viewMode, onToggleView }) => {
  return (
    <button onClick={onToggleView}>
      View as {viewMode === 'list' ? 'Grid' : 'List'}
    </button>
  );
};

export default ToggleButton;
