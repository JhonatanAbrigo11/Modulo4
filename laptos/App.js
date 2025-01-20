import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {LaptosList} from './screens/LaptosList'
import { LaptosForms } from './screens/LaptosForms';
export default function App() {
  const StactkLaptos= createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StactkLaptos.Navigator>
        <StactkLaptos.Screen
          name= "LaptosListNav"
          component={LaptosList}
        />
        <StactkLaptos.Screen
          name= "LaptosFormstNav"
          component={LaptosForms}
        />
      </StactkLaptos.Navigator>
    </NavigationContainer>
    
  );
}


