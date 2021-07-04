/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';

const ContentWrapper = ({ children }, ref) => (
  <div className="content-wrapper" ref={ref}>
    {children}
  </div>
);

export default forwardRef(ContentWrapper);
