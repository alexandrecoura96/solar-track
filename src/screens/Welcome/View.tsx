import React from 'react';
import Play from '../../assets/svg/play.svg';
import WelcomeBackground from '../../assets/webp/welcome_background.webp';
import {
  Background,
  Container,
  Content,
  GetStarted,
  GetStartedIconWrapper,
  GetStartedText,
  Title,
} from './styles';
import {WelcomeViewProps} from './types';

export function View({handleNavigation}: WelcomeViewProps) {
  return (
    <Background source={WelcomeBackground}>
      <Container>
        <Content>
          <Title>Using solar energy to mitigate future climate changes</Title>
          <GetStarted onPress={handleNavigation}>
            <GetStartedText>Get Started</GetStartedText>
            <GetStartedIconWrapper>
              <Play height={16} width={16} />
            </GetStartedIconWrapper>
          </GetStarted>
        </Content>
      </Container>
    </Background>
  );
}
