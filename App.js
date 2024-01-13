import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import { RootStackNavigator } from './src/Navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { registerForPushNotificationsAsync } from './src/Utils/registerForPushNotification';
import { useEffect } from 'react';
import * as Sentry from 'sentry-expo';
 
Sentry.init({
  dsn: 'https://bddb49fe2f2ec0aef8d3a6ccadcd841a@o4506565115445248.ingest.sentry.io/4506565119246336',
  enableInExpoDevelopment: false,
  debug: true, // Consider setting this to false in production
});



export default function App() {

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



/*
<Provider store={store}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
*/
