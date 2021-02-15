import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import NewsIndexScreen from '.';
import Flag from '../../component/layout/app/flag';
import WebViewScreen from './webview';
import { Text } from 'react-native';

const NewsStack = createStackNavigator();

export default function NewsStackScreen({navigation}: any) {
  return (
    <NewsStack.Navigator
      initialRouteName="NewsIndex"
      screenOptions={{
        title: "최신 뉴스",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerRight: () => <Flag />
      }}
    >
      <NewsStack.Screen name="NewsIndex" component={NewsIndexScreen} />
      <NewsStack.Screen name="WebView" component={WebViewScreen} />
    </NewsStack.Navigator>
  );
}