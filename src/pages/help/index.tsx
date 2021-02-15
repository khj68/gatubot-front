import React, { useEffect } from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import QuestionCard from '../../component/layout/help/question-card';

const RootView = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default function HelpIndexScreen() {
  return (
    <RootView>
      <ScrollView style={{width: "100%"}} contentContainerStyle={{width: "100%"}}>
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
        <QuestionCard
          title="예시"
          content="내용입니다."
        />
      </ScrollView>
    </RootView>
  );
};