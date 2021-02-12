import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import NewsIndexScreen from '.';
import Flag from '../../component/layout/app/flag';
import WebViewScreen from './webview';

const Stack = createStackNavigator();

export default function NewsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "최신 뉴스",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerRight: () => <Flag />
      }}
      initialRouteName="NewsIndex"
    >
      <Stack.Screen name="NewsIndex" component={NewsIndexScreen} />
      <Stack.Screen name="WebView" component={WebViewScreen} />
    </Stack.Navigator>
  );
}