import {LoadingOutlined} from "@ant-design/icons";
import {Spin} from "antd";
import React from 'react';

const CircleLoading = ({children, ...props}) => {
  return (
    <Spin {...props} indicator={<LoadingOutlined spin/>}>
      {children}
    </Spin>
  );
};

export default CircleLoading;
