import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SearchIndexScreen from '.';
import Flag from '../../component/layout/app/flag';

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "주식 검색",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerRight: () => <Flag />
      }}
      initialRouteName="SearchIndex"
    >
      <Stack.Screen name="SearchIndex" component={SearchIndexScreen} />
    </Stack.Navigator>
  );
}