import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HelpIndexScreen from '.';
import Flag from '../../component/layout/app/flag';

const HelpStack = createStackNavigator();

export default function HelpStackScreen({navigation}: any) {
  return (
    <HelpStack.Navigator
      initialRouteName="HelpIndex"
      screenOptions={{
        title: "안내",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerRight: () => <Flag />
      }}
    >
      <HelpStack.Screen name="HelpIndex" component={HelpIndexScreen} />
    </HelpStack.Navigator>
  );
}