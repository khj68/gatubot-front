import React, { useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { listFetcher } from '../../component/common/value/fetcher';
import { apiUrl } from '../../component/common/value/variable';
import useSWRNative from 'swr-react-native';
import styled from 'styled-components/native';
import AnalysisTable from '../../component/layout/analysis/table';
import Loading from '../../component/layout/app/loading';
import Signal from '../../component/layout/analysis/signal';
import { numberToKorean, toMan } from '../../component/common/value/function';

const RootView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ContentView = styled.View`
  flex: 6;
  width: 100%;
`;

const TableView = styled.View`
  flex: 7;
  width: 100%;
`;

const TitleText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  align-self: stretch;
  margin: 20px 0 0px 5%;
`;

const SubTitleText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  align-self: stretch;
  margin: 10px 0 10px 5%;
`;

const DetailText = styled.Text`
  align-self: stretch;
  margin: 0px 0 0 5%;
  font-size: 13px;
`;

export default function AnalysisDetailScreen(props: any) {
  const { code } = props.route.params;

  const { data } = useSWRNative(`${apiUrl}/dev/stock/info?code=${code}`, 
    listFetcher,
    {revalidateOnFocus: false});

  if (!data) return <Loading />
  
  return (
    <RootView>
      <ContentView>
        <Signal
          // point={data.stock.point}
          point={1}
        />
        <TitleText>{data.stock.name}</TitleText>
        <SubTitleText>{data.stock.sector}</SubTitleText>
        <DetailText>PER : {data.stock.per[2020].third_quarter}</DetailText>
        <DetailText>PBR : {data.stock.pbr[2020].third_quarter}</DetailText>
        <DetailText>EPS 증가율 : {data.stock.eps_increase[2020]}</DetailText>
        <DetailText>순이익 : {numberToKorean(data.stock.profit[2020].third_quarter)}</DetailText>
        <DetailText>부채율 : {data.stock.debt}</DetailText>
        <DetailText>현재 주가 : {data.stock.share}</DetailText>
        <DetailText>적정 주가 : {data.stock.rim}</DetailText>
      </ContentView>
      <TableView>
        <ScrollView contentContainerStyle={{ width: "100%" }}>
          <AnalysisTable
            stock={data.stock}
          />
        </ScrollView>
      </TableView>
    </RootView>
  );
};