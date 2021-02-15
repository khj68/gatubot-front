import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text, TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import Autocomplete from "react-native-autocomplete-input";
import { listFetcher } from '../../component/common/value/fetcher';
import { apiUrl } from '../../component/common/value/variable';
import useSWRNative from 'swr-react-native';
import Loading from '../../component/layout/app/loading';

const RootView = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Input = styled.TextInput`
  border: 1px solid #4d4d4d;
  width: 90%;
  height: 30px;
  padding: 0 0 0 5px;
  font-size: 13px;
  margin: 10px 0 0 0;
  border-radius: 5px;
`;

export default function AnalysisIndexScreen(props: any) {
  const [query, setQuery] = useState("");
  const [isHide, setIsHide] = useState(true);
  const { data } = useSWRNative(`${apiUrl}/dev/stock/list`, 
    listFetcher,
    {revalidateOnFocus: false});
  
  const filter = () => {
    return data.stock.filter((value: any) => value.name.includes(query));
  }

  const handlePress = (stock: any) => () => {
    props.navigation.navigate("AnalysisDetail", {code: stock.code});
  }
    
  if (!data) return <Loading />
    
  return (
    <RootView>
      <Autocomplete
        autoCapitalize="none"
        data={filter()}
        autoCorrect={false}
        containerStyle={styles.autocompleteContainer}
        placeholder="종목 검색"
        listStyle={{maxHeight:350, left: 0 }}
        listContainerStyle={{maxHeight:350, width:"100%"}}
        onChangeText={(text: any) => setQuery(text)}
        onFocus={() => setIsHide(false)}
        onBlur={() => setIsHide(true)}
        hideResults={isHide}
        renderItem={({item}: any) => (
          <TouchableOpacity onPress={handlePress(item)} key={item.name}>
            <Text style={styles.itemText}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </RootView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25,
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 25
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }
});