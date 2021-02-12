import React, { useEffect } from 'react';
import {
  Text,
} from 'react-native';
import { listFetcher } from '../../component/common/value/fetcher';
import { apiUrl } from '../../component/common/value/variable';
import useSWRNative from 'swr-react-native';
import styled from 'styled-components/native';
import AnalysisTable from '../../component/layout/analysis/table';
import Loading from '../../component/layout/app/loading';

const RootView = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TitleText = styled.Text`
  font-weight: bold;
  font-size: 18px;
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

  useEffect(() => {
    console.log(data);
  }, [data])

  if (!data) return <Loading />
  
  return (
    <RootView>
      <TitleText>{JSON.parse(data.stock).name}</TitleText>
      <DetailText>{JSON.parse(data.stock).name}는 PER이 xx로</DetailText>
      <DetailText>동종 기업의 평균 per xx보다 x% 낮고</DetailText>
      <DetailText>pbr은 xx로 동종 기업의 평균 per xx보다 x%낮습니다.</DetailText>
      <DetailText>BPS는 xxxx원 EPS는 XXX원이며</DetailText>
      <DetailText>EPS는 최근 n년간 상승하고 있습니다.</DetailText>
      <DetailText>기업 가치 주가는 m원이며</DetailText>
      <DetailText>예상 주가는 x원으로 현재 주가 x원의 x%입니다.</DetailText>
      <DetailText>순이익은 n년간 증가하고 있습니다.</DetailText>
      <AnalysisTable
        stock={data.stock}
      />
    </RootView>
  );
};