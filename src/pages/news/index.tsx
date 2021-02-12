import React, { useEffect } from 'react';
import {
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import useSWRNative from 'swr-react-native';
import { apiUrl } from '../../component/common/value/variable';
import { isKoreaState } from '../../recoil/header';
import {
  useRecoilState,
} from 'recoil';
import { listFetcher } from '../../component/common/value/fetcher';
import Loading from '../../component/layout/app/loading';
import { WebView } from 'react-native-webview';

const RootView = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NewsView = styled.View`
  align-items: center;
  width: 100%;
  /* justify-content: center; */
`;

const TitleText = styled.Text`
  /* width: 85%; */
  align-self: stretch;
  height: 20px;
`;

const TitleBtn = styled.TouchableOpacity`
  align-self: stretch;
  /* width: 90%; */
  padding: 10px 2%;
  border-bottom-width: 1px;
`;

export default function NewsIndexScreen(props: any) {
  const [isKorea, setIsKorea] = useRecoilState(isKoreaState)
  
  const { data } = useSWRNative(`${apiUrl}/dev/news/${isKorea ? "kor" : "eng"}`, 
    listFetcher,
    {revalidateOnFocus: true});

  if (!data) return <Loading />
  
  return (
    <RootView>
      <ScrollView contentContainerStyle={{ width: "85%", alignItems: "center" }}>
          { JSON.parse(data.news).map((value: any) => 
            <TitleBtn 
              onPress={() => props.navigation.navigate("WebView", {uri: value.href})}
              key={value.href}
            >
              <TitleText numberOfLines={1}>{value.title}</TitleText>
            </TitleBtn>
          )}
      </ScrollView>
    </RootView>
  );
};