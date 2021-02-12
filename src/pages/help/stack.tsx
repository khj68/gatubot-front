import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HelpIndexScreen from '.';
import Flag from '../../component/layout/app/flag';

const Stack = createStackNavigator();

export default function HelpStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "안내",
        headerTitleAlign: "center",
        headerRight: () => <Flag />
      }}
      initialRouteName="HelpIndex"
    >
      <Stack.Screen name="HelpIndex" component={HelpIndexScreen} />
    </Stack.Navigator>
  );
}