import React from 'react';
import PropTypes from 'prop-types';
import './tab.css';
import TabPaneList from './TabPaneList';

class TabPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      curTabId: props.data[0].tabId
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(id) {
    this.setState({
      curTabId: id
    });
  }

  render() {
    const {data, curTabId} = this.state;
    return (
      <div className="tab_wrap">
        <div className="tab">
          {
            data.map((item) => {
              const className = item.tabId === curTabId ? 'active' : '';
              return (
                <span
                  key={item.tabId}
                  onClick={() => {this.changeTab(item.tabId);}}
                  className={className}
                >
                  {item.tabName}
                </span>
              );
            })
          }
        </div>
        {
          data.map((item) => {
            return (
              <TabPaneList
                key={item.tabId}
                data={item.tabList}
                isShow={curTabId === item.tabId} />
            );
          })
        }
      </div>
    );
  }
}

TabPane.propTypes = {
  data: PropTypes.object
};

export default TabPane;
