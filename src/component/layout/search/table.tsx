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

export default function SearchTable(props: any) {
  return(
    <RootView>
      <TableView>
        <Head>
          <HeadText>이름</HeadText>
        </Head>
        <Head>
          <HeadText>주가</HeadText>
        </Head>
        <Head>
          <HeadText>적정주가</HeadText>
        </Head>
        <Head>
          <HeadText>PER</HeadText>
        </Head>
        <Head>
          <HeadText>PBR</HeadText>
        </Head>
        <Head>
          <HeadText>ROE</HeadText>
        </Head>
        <Head>
          <HeadText>부채율</HeadText>
        </Head>
      </TableView>
      { props.stocks.map((stock: any) => 
        <TableView key={stock.name}>
          <Body>
            <BodyText>{stock.name}</BodyText>
          </Body>
          <Body>
            <BodyText>주가</BodyText>
          </Body>
          <Body>
            <BodyText>적정주가</BodyText>
          </Body>
          <Body>
            <BodyText>PER</BodyText>
          </Body>
          <Body>
            <BodyText>PBR</BodyText>
          </Body>
          <Body>
            <BodyText>ROE</BodyText>
          </Body>
          <Body>
            <BodyText>{stock.debt}</BodyText>
          </Body>
        </TableView>
      )}

    </RootView>
  );
}