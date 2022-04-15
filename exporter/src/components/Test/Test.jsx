import {Select, Spin, Tooltip} from "antd";
import React from 'react';
import PropTypes from 'prop-types';

const Test = ({}) => {
  return (<>
    <h2>Загрузка</h2>
    <Tooltip title="Ураа заработало!">
      <Select options={[{label: "Один",value:1},{label: "Два",value:2}]}/>
    </Tooltip>
  </>)
};

Test.propTypes = {

};

export default Test;
