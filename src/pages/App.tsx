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

DefaultTheme.colors.background = 'white';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect( () => {
    SplashScreen.hide();
  }, []);
  
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <NavigationContainer>
          <Tab.Navigator
            // screenOptions={{
            //   tabBarIcon: () => <></>
            // }}
            tabBarOptions={{
              labelStyle: {
                fontSize: 16,
              },
              tabStyle: {
                justifyContent: 'center'
              },
            }}
            initialRouteName="News"
          >
            <Tab.Screen name="뉴스" component={NewsStack} />
            <Tab.Screen name="분석" component={AnalysisStack} />
            <Tab.Screen name="검색" component={SearchStack} />
            <Tab.Screen name="안내" component={HelpStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </Suspense>
    </RecoilRoot>
  );
};