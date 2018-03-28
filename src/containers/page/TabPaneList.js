import React from 'react';
import PropTypes from 'prop-types';
import './tab.css';
import Item from './Item';

const TabPaneList = ({data, isShow}) => {
  const ss = isShow ? 'block' : 'none';
  return (
    <ul style={{display: ss}}>
      {
        data.map((item) => {
          return <Item key={item.id} item={item} />;
        })
      }
    </ul>
  );
};

TabPaneList.propTypes = {
  data: PropTypes.object,
  isShow: PropTypes.bool
};

export default TabPaneList;
