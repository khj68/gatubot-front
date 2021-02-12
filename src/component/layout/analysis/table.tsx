import React, { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const RootView = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 10px 0 30px 0;
`;

const TableView = styled.View`
  flex-flow: row; 
  width: 100%; 
  justify-content: center;
  align-items: center;
`;

const Head = styled.View`
  background-color: #e2e2e2;
  border: 0.5px solid white;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const Body = styled.View`
  border: 0.5px solid #e2e2e2;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const HeadText = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;

const BodyText = styled.Text`
  font-size: 12px;
  text-align: center;
`;

export default function AnalysisTable(props: any) {
  useEffect(() => {
    console.log(props.stock); 
  }, [props])
  
  return(
    <RootView>
      <TableView>
        <Head>
          <HeadText></HeadText>
        </Head>
        <Head>
          <HeadText>2018</HeadText>
        </Head>
        <Head>
          <HeadText>2019</HeadText>
        </Head>
        <Head>
          <HeadText>2020</HeadText>
        </Head>
        <Head>
          <HeadText>2021</HeadText>
        </Head>
      </TableView>

      <TableView>
        <Body>
          <BodyText>현재주가</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>적정주가</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>PER</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>PBR</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>ROE</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>BPS</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>EPS</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
        <Body>
          <BodyText>-</BodyText>
        </Body>
      </TableView>

    </RootView>
  );
}