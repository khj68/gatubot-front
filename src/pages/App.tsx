import 'react-native-gesture-handler';

import React, { Suspense, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer, ParamListBase, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnalysisStack from './analysis/stack';
import HelpStack from './help/stack';
import NewsStack from './news/stack';
import SearchStack from './search/stack';
import Loading from '../component/layout/app/loading';
import {
  RecoilRoot
} from 'recoil';
import Flag from '../component/layout/app/flag';
import AnalysisStackScreen from './analysis/stack';
import HelpStackScreen from './help/stack';
import NewsStackScreen from './news/stack';
import SearchStackScreen from './search/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

DefaultTheme.colors.background = 'white';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

export default function App() {
  useEffect( () => {
    SplashScreen.hide();
  }, []);
  
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="NewsStack"
            tabBarOptions={{
              labelStyle: {
                fontSize: 16,
              },
              tabStyle: {
                justifyContent: 'center'
              },
            }}
          >
            <Tab.Screen name="NewsStack" component={NewsStackScreen} options={{title: "뉴스"}} />
            <Tab.Screen name="AnalysisStack" component={AnalysisStackScreen} options={{title: "분석"}}/>
            <Tab.Screen name="SearchStack" component={SearchStackScreen} options={{title: "검색"}}/>
            <Tab.Screen name="HelpStack" component={HelpStackScreen} options={{title: "안내"}}/>
          </Tab.Navigator>
        </NavigationContainer>
      </Suspense>
    </RecoilRoot>
  );
};