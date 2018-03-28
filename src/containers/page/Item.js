import PropTypes from 'prop-types';
import React from 'react';
import './item.css';


const Item = ({item}) => {
  return (
    <div className="item_wrap">
      <img src={item.imgUrl} alt="nihao" title="njim" className="imgStyle" />
      <dl>
        <dt>{item.title}</dt>
        <dd>{item.content}</dd>
      </dl>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object
};

export default Item;
