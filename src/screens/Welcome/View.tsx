import React from 'react';
import WelcomeBackground from '../../assets/webp/welcome_background.webp';
import {GetStartedButton} from '../../components/GetStartedButton';
import {Background, Container, Content, Title} from './styles';
import {WelcomeViewProps} from './types';

export function View({handleNavigation}: WelcomeViewProps) {
  return (
    <Background source={WelcomeBackground}>
      <Container>
        <Content>
          <Title>Using solar energy to mitigate future climate changes</Title>
          <GetStartedButton title="Get Started" onPress={handleNavigation} />
        </Content>
      </Container>
    </Background>
  );
}
