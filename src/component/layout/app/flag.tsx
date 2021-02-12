import React, { useEffect } from 'react';
import {
  Image, Text,
} from 'react-native';

import {
  useRecoilState,
} from 'recoil';
import { isKoreaState } from '../../../recoil/header';

import styled from 'styled-components/native';

const FlagBtn = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
`;

const FlagIcon = styled.Image`
  width: 60px;
  height: 60px;
`;

export default function Flag() {
  const [isKorea, setIsKorea] = useRecoilState(isKoreaState);
  
  return(
    <>
      {
        isKorea ?
        <FlagBtn
          onPress={() => setIsKorea(prev => !prev)}
        >
          <FlagIcon
            source={require("../../../../public/icons/korea.png")}
            resizeMode="contain"
          />
        </FlagBtn> :
        <FlagBtn
          onPress={() => setIsKorea(prev => !prev)}
        >
          <FlagIcon
            source={require("../../../../public/icons/usa.png")}
            resizeMode="contain"
          />
        </FlagBtn>
      }
    </>
  );
}