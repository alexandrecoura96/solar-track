import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import WelcomeBackground from '../../assets/webp/welcome_background.webp';
import {GetStartedButton} from '../../components/GetStartedButton';
import {Background, Container, Content, Title} from './styles';
import {WelcomeViewProps} from './types';

export function View({
  handleNavigation,
  title,
  getStartedButtonName,
  loading,
}: WelcomeViewProps) {
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
            <Title>{title}</Title>
            <GetStartedButton
              title={getStartedButtonName}
              onPress={handleNavigation}
            />
          </Content>
        </Container>
      </Background>
    );
  }
}
