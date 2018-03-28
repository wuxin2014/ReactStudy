import React from 'react';
import Login from '../login/Login';
import TabPane from './TabPane';


const IndexPage = () => {
  const data = [
    {
      tabId: 1,
      tabName: '西红柿',
      tabList: [
        {
          id: 1,
          imgUrl: '../public/img/hot_list_pic1.gif',
          title: 'title1',
          content: '西红柿'
        },
        {
          id: 2,
          imgUrl: '../public/img/hot_list_pic1.gif',
          title: 'title2',
          content: '西红柿'
        },
        {
          id: 3,
          imgUrl: '../public/img/hot_list_pic1.gif',
          title: 'title2',
          content: '西红柿'
        }
      ]
    },
    {
      tabId: 2,
      tabName: '西红柿2',
      tabList: [
        {
          id: 1,
          imgUrl: '../public/img/hot_list_pic1.gif',
          title: 'title1',
          content: '西红柿2'
        },
        {
          id: 2,
          imgUrl: '../public/img/hot_list_pic1.gif',
          title: 'title2',
          content: '西红柿2'
        },
        {
          id: 3,
          imgUrl: '../public/img/hot_list_pic1.gif',
          title: 'title2',
          content: '西红柿2'
        }
      ]
    }
  ];
  return (
    <div>
      <TabPane data={data} />
      <Login />
    </div>
  );
};

export default IndexPage;
