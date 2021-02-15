import React, { useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { isZero, numberToKorean, toMan, toSecondDecimal } from '../../common/value/function';

const RootView = styled.View`
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  /* width: auto; */
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const LongHead = styled.View`
  background-color: #e2e2e2;
  border: 0.5px solid white;
  flex: 3;
  /* width: auto; */
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
  
  return(
    <RootView>
      <TableView>
        <Head>
          <HeadText></HeadText>
        </Head>
        <LongHead>
          <HeadText>최근 연간 실적</HeadText>
        </LongHead>
        <LongHead>
          <HeadText>최근 분기 실적</HeadText>
        </LongHead>
      </TableView>
      <TableView>
        <Head>
          <HeadText></HeadText>
        </Head>
        <Head>
          <HeadText>`18.12</HeadText>
        </Head>
        <Head>
          <HeadText>`19.12</HeadText>
        </Head>
        <Head>
          <HeadText>`20.12</HeadText>
        </Head>
        <Head>
          <HeadText>`20.03</HeadText>
        </Head>
        <Head>
          <HeadText>`20.06</HeadText>
        </Head>
        <Head>
          <HeadText>`20.09</HeadText>
        </Head>
        
      </TableView>

      <TableView>
        <Body>
          <BodyText>순이익</BodyText>
        </Body>
        <Body>
          <BodyText textBreakStrategy={'balanced'}>{numberToKorean(props.stock.profit[2018].fourth_quarter)}</BodyText>
        </Body>
        <Body>
          <BodyText textBreakStrategy={'balanced'}>{numberToKorean(props.stock.profit[2019].fourth_quarter)}</BodyText>
        </Body>
        <Body>
          <BodyText></BodyText>
        </Body>
        <Body>
          <BodyText textBreakStrategy={'balanced'}>{numberToKorean(props.stock.profit[2020].first_quarter)}</BodyText>
        </Body>
        <Body>
          <BodyText textBreakStrategy={'balanced'}>{numberToKorean(props.stock.profit[2020].second_quarter)}</BodyText>
        </Body>
        <Body>
          <BodyText textBreakStrategy={'balanced'}>{numberToKorean(props.stock.profit[2020].third_quarter)}</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>ROE</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.roe[2018].fourth_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.roe[2019].fourth_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText></BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.roe[2020].first_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.roe[2020].second_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.roe[2020].third_quarter}</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>EPS</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.eps[2018].fourth_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.eps[2019].fourth_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText></BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.eps[2020].first_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.eps[2020].second_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.eps[2020].third_quarter}</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>PER</BodyText>
        </Body>
        <Body>
          <BodyText>{isZero(toSecondDecimal(props.stock.per[2018].fourth_quarter))}</BodyText>
        </Body>
        <Body>
          <BodyText>{isZero(toSecondDecimal(props.stock.per[2019].fourth_quarter))}</BodyText>
        </Body>
        <Body>
          <BodyText></BodyText>
        </Body>
        <Body>
          <BodyText>{isZero(toSecondDecimal(props.stock.per[2020].first_quarter))}</BodyText>
        </Body>
        <Body>
          <BodyText>{isZero(toSecondDecimal(props.stock.per[2020].second_quarter))}</BodyText>
        </Body>
        <Body>
          <BodyText>{isZero(toSecondDecimal(props.stock.per[2020].third_quarter))}</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>BPS</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.bps[2018].fourth_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.bps[2019].fourth_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText></BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.bps[2020].first_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.bps[2020].second_quarter}</BodyText>
        </Body>
        <Body>
          <BodyText>{props.stock.bps[2020].third_quarter}</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>PBR</BodyText>
        </Body>
        <Body>
          <BodyText>{isZero(toSecondDecimal(props.stock.pbr[2018].fourth_quarter))}</BodyText>
        </Body>
        <Body>
          <BodyText>{isZero(toSecondDecimal(props.stock.pbr[2019].fourth_quarter))}</BodyText>
        </Body>
        <Body>
          <BodyText></BodyText>
        </Body>
        <Body>
          <BodyText>{isZero(toSecondDecimal(props.stock.pbr[2020].first_quarter))}</BodyText>
        </Body>
        <Body>
          <BodyText>{isZero(toSecondDecimal(props.stock.pbr[2020].second_quarter))}</BodyText>
        </Body>
        <Body>
          <BodyText>{isZero(toSecondDecimal(props.stock.pbr[2020].third_quarter))}</BodyText>
        </Body>
      </TableView>

      <TableView>
        <Body>
          <BodyText>부채율</BodyText>
        </Body>
        <Body>
          <BodyText></BodyText>
        </Body>
        <Body>
          <BodyText></BodyText>
        </Body>
        <Body>
          <BodyText></BodyText>
        </Body>
        <Body>
          <BodyText></BodyText>
        </Body>
        <Body>
          <BodyText></BodyText>
        </Body>
        <Body>
          <BodyText>{isZero(props.stock.debt)}</BodyText>
        </Body>
      </TableView>

    </RootView>
  );
}