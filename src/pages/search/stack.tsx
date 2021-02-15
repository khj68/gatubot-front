import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SearchIndexScreen from '.';
import Flag from '../../component/layout/app/flag';

const SearchStack = createStackNavigator();

export default function SearchStackScreen({navigation}: any) {
  return (
    <SearchStack.Navigator
      initialRouteName="SearchIndex"
      screenOptions={{
        title: "주식 검색",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerRight: () => <Flag />
      }}
    >
      <SearchStack.Screen name="SearchIndex" component={SearchIndexScreen} />
    </SearchStack.Navigator>
  );
}