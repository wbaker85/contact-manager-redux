import React from 'react';

const FluidGrid = props => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(17rem, 1fr))',
      gridGap: '4rem'
    }}
  >
    {props.children}
  </div>
);

export default FluidGrid;
