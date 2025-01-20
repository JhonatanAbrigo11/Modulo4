import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ContactsList} from './screens/ContactsList'
import {ContactsForms} from './screens/ContactsForms'
export default function App() {
  const StactkContacts= createNativeStackNavigator();
  return (
      <NavigationContainer>
        <StactkContacts.Navigator initialRouteName='ContactsListNav'>
          <StactkContacts.Screen 
            name='ContactsListNav'
            component={ContactsList}
          />
          <StactkContacts.Screen 
            name='ContactsFormsNav'
            component={ContactsForms}
          />
        </StactkContacts.Navigator>
      </NavigationContainer>
  );
}


