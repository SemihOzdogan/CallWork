import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/Home'
import LoginScreen from './src/screen/Login';
import BeginScreen from './src/screen/Begin';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/redux/reducers/index';
import reduxThunk from 'redux-thunk';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Stack = createStackNavigator();

logOut = async (navigation) => {
  await AsyncStorage.removeItem('@Token')
  navigation.navigate('Login')
}

export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(reduxThunk))
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Begin">
          <Stack.Screen name="Begin" component={BeginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
            title: 'Arama Ekranı', headerLeft: null,
            headerRight: () => (
              <TouchableOpacity onPress={() => logOut(navigation)}>
                {/* <Text style={{ fontSize: 16, padding: 5 }}>Çıkış Yap</Text> */}
                <Icon name="power-off" size={25} color="red" style={{ padding: 10 }} />
              </TouchableOpacity>
            )
          })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}