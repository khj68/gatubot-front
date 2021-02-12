import React from 'react';

import {
  View,
  ActivityIndicator,
} from 'react-native';

function Loading() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#175337"/>
    </View>
  )
}

export default Loading;