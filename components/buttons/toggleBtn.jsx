/* eslint-disable react/prop-types */
import React from 'react';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const ToggleBtn = ({ toggleAction, id, className }) => (
  <>
    <CloseOutlined className={`${className} closeOutline`} id={id} onClick={toggleAction} />
    <MenuOutlined className={`${className} MenuOutlined`} id={id} onClick={toggleAction} />
  </>
);

export default ToggleBtn;
