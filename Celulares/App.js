import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {CelularesForms} from './screens/CelularesForms'
import {CelularesList} from './screens/CelularesList'

export default function App() {
  const StackNavigation= createStackNavigator();
  return (
    <NavigationContainer>
      <StackNavigation.Navigator initialRouteName='CelularesListNav'>

        <StackNavigation.Screen
          name='CelularesListNav'
          component={CelularesList}
        />
        <StackNavigation.Screen
          name= 'CelularesFormsNav'
          component= {CelularesForms}
        />

      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}


