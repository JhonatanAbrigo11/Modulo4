import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {LaptosList} from './screens/LaptosList'
export default function App() {
  const StactkLaptos= createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StactkLaptos.Navigator>
        <StactkLaptos.Screen
          name= "LaptosListNav"
          component={LaptosList}
        />
      </StactkLaptos.Navigator>
    </NavigationContainer>
    
  );
}


