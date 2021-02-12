import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AnalysisIndexScreen from '.';
import { Text } from 'react-native';
import Flag from '../../component/layout/app/flag';
import AnalysisDetailScreen from './detail';

const Stack = createStackNavigator();

export default function AnalysisStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "주식 분석",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerRight: () => <Flag />
      }}
      initialRouteName="AnalysisIndex"
    >
      <Stack.Screen name="AnalysisIndex" component={AnalysisIndexScreen} />
      <Stack.Screen name="AnalysisDetail" component={AnalysisDetailScreen} />
    </Stack.Navigator>
  );
}