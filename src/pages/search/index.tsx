import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import axios from "axios";
import { apiUrl } from '../../component/common/value/variable';
import SearchTable from '../../component/layout/search/table';
import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../../component/layout/app/loading';

const RootView = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SearchView = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #bebebe;
  padding: 0 0 10px 0;
`;

const RowView = styled.View`
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 90%;
  margin: 5px 0 10px 0;
`;

const TitleText = styled.Text`
  font-weight: bold;
`;

const NormalText = styled.Text`

`;

const InputView = styled.View`
  flex-flow: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Input = styled.TextInput`
  border: 1px solid #4d4d4d;
  width: 30%;
  height: 30px;
  padding: 0 0 0 5px;
  font-size: 13px;
  margin: 0 5% 0 0;
  border-radius: 5px;
`;

const Btn = styled.TouchableOpacity`
  width: 95%;
  border-radius: 5px;
  background-color: #438eff;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const FilterBtn = styled.TouchableOpacity`
  width: 100%;
  /* border: 1px solid #438eff; */
  border-bottom-width: 1px;
  border-bottom-color: #bebebe;
  /* background-color: #ffffff; */
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.Text`
  color: white;
  font-weight: bold;
`;

const FilterText = styled.Text`
  font-weight: bold;
`;

export default function SearchIndexScreen() {
  const [isSearch, setIsSearch] = useState(true);
  const [roe, setRoe] = useState("");
  const [eps, setEps] = useState("");
  const [deb, setDeb] = useState("");
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const handleSearch = () => {
    setLoading(true);
    setIsSearch(false);
    axios.get(`${apiUrl}/dev/stock/sort?roe=${roe}&eps=${eps}&deb=${deb}`)
      .then((res: any) => {
        setStocks(res.data.stocks);
        setLoading(false);
      });
  }

  if (loading) return <Loading />
  
  return (
    <RootView>
      <FilterBtn onPress={() => setIsSearch(prev => !prev)}>
        {isSearch ? 
          <FilterText>필터</FilterText> :
          <Icon 
            name="chevron-down-outline"
            size={30}
          />
        }
      </FilterBtn>
      { isSearch &&
        <SearchView>
          <RowView>
            <TitleText>EPS 증가율</TitleText>
            <InputView>
              <Input
                value={eps}
                onChangeText={value => setEps(value)}
              />
              <NormalText>이상</NormalText>  
            </InputView>
          </RowView>
          <RowView>
            <TitleText>부채율</TitleText>
            <InputView>
              <Input 
                value={roe}
                onChangeText={value => setRoe(value)}
              />
              <NormalText>이하</NormalText>  
            </InputView>
          </RowView>
          <RowView>
            <TitleText>ROE</TitleText>
            <InputView>
              <Input 
                value={deb}
                onChangeText={value => setDeb(value)}
              />
              <NormalText>이상</NormalText>  
            </InputView>
          </RowView>
          <Btn onPress={handleSearch}>
            <BtnText>검색</BtnText>
          </Btn>
        </SearchView> 
      }
      { stocks.length > 0 &&
        <ScrollView contentContainerStyle={{width: '100%'}}>
          <SearchTable 
            stocks={stocks}
          />
        </ScrollView>
      }
    </RootView>
  );
};