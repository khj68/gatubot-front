import React, { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const RootView = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Head = styled.View`
  background-color: #ffffff;
  border: 0.5px solid #d4d4d4;
  flex: 1;
  /* width: auto; */
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const TableView = styled.View`
  flex-flow: row; 
  width: 100%; 
  justify-content: center;
  align-items: center;
`;

const HeadText = styled.Text`
  font-weight: bold;
  font-size: 13px;
`;

export default function Signal(props: any){
  return(
    <RootView>
      <TableView>
        <Head style={{backgroundColor: props.point < 3 ? "red" : "white"}}>
          <HeadText style={{color: props.point < 3 ? "white" : "black"}}>강력매도</HeadText>
        </Head>
        <Head style={{backgroundColor: 3 <= props.point && props.point < 5 ? "#ff9999" : "white"}}>
          <HeadText>매도</HeadText>
        </Head>
        <Head style={{backgroundColor: 5 <= props.point && props.point < 10 ? "#d2f6f0" : "white"}}>
          <HeadText>보류</HeadText>
        </Head>
        <Head style={{backgroundColor: 10 <= props.point && props.point < 14 ? "#5a91fc" : "white"}}>
          <HeadText>매수</HeadText>
        </Head>
        <Head style={{backgroundColor: 14 <= props.point && props.point < 15 ? "#6248ff" : "white"}}> 
          <HeadText style={{color: 14 <= props.point && props.point < 15 ? "white" : "black"}}>강력매수</HeadText>
        </Head>
      </TableView>
    </RootView>
  );
}