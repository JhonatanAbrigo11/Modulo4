import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ContactsList} from './screens/ContactsList'

export default function App() {
  const StactkContacts= createNativeStackNavigator();
  return (
      <NavigationContainer>
        <StactkContacts.Navigator>
          <StactkContacts.Screen 
            name='ContactsListNav'
            component={ContactsList}
          />
        </StactkContacts.Navigator>
      </NavigationContainer>
  );
}


