import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AnalysisIndexScreen from '.';
import { Text } from 'react-native';
import Flag from '../../component/layout/app/flag';
import AnalysisDetailScreen from './detail';

const AnalysisStack = createStackNavigator();

export default function AnalysisStackScreen({navigation}: any) {
  return (
    <AnalysisStack.Navigator
      initialRouteName="AnalysisIndex"
      screenOptions={{
        title: "주식 분석",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerRight: () => <Flag />
      }}
    >
      <AnalysisStack.Screen name="AnalysisIndex" component={AnalysisIndexScreen} />
      <AnalysisStack.Screen name="AnalysisDetail" component={AnalysisDetailScreen} />
    </AnalysisStack.Navigator>
  );
}