import {NavigationContainer} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {Alert, SafeAreaView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useGetDailyGeneration} from './src/hooks/useGetDailyGeneration/useGetDailyGeneration';
import {useGetMonthlyGeneration} from './src/hooks/useGetMonthlyGeneration/useGetMonthlyGeneration';
import {useGetYearlyGeneration} from './src/hooks/useGetYearlyGeneration/useGetYearlyGeneration';
import {StackRoutes} from './src/routes/stack.routes';

function App(): JSX.Element {
  const {fetchDailySolarGeneration} = useGetDailyGeneration();

  const {fetchMonthlySolarGeneration} = useGetMonthlyGeneration();

  const {fetchYearlySolarGeneration} = useGetYearlyGeneration();

  const fetchAll = useCallback(() => {
    try {
      fetchDailySolarGeneration();
      fetchYearlySolarGeneration();
      fetchMonthlySolarGeneration();
    } catch (error) {
      Alert.alert('Ops, it can not be opened. Try again.');
    } finally {
      SplashScreen.hide();
    }
  }, [
    fetchDailySolarGeneration,
    fetchMonthlySolarGeneration,
    fetchYearlySolarGeneration,
  ]);

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
