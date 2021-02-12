import React, { useEffect } from 'react';
import {
  Image, Text,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewScreen(props: any) {
  const { uri } = props.route.params;
  return (
    <WebView source={{ uri }} />
  );
};