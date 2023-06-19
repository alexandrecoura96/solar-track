import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import WelcomeBackground from '../../assets/webp/welcome_background.webp';
import {GetStartedButton} from '../../components/GetStartedButton';
import {Background, Container, Content, Title} from './styles';
import {WelcomeViewProps} from './types';

export function View({handleNavigation, loading}: WelcomeViewProps) {
  if (loading) {
    return (
      <Container>
        <ActivityIndicator color="#e05f25" size={RFValue(32)} />
      </Container>
    );
  } else {
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
}
