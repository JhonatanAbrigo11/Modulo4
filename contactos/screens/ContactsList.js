import {View,Text,StyleSheet,FlatList} from 'react-native'
import {Button} from '@rneui/base'
import {getAllContacts} from '../rest_client/contactos'
import { useState } from 'react'
import { ListItem,FAB } from '@rneui/themed';

export const ContactsList=({navigation})=>{
        const [contactsList,setContactsList]= useState([{}]);

        const ContactItem=({contact})=>{
          return (<ListItem>
            <ListItem.Content>
              <ListItem.Title>{contact.nombre} {contact.apellido}</ListItem.Title>
              <ListItem.Subtitle>{contact.celular}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>)
        }

        const fnRefrshList= (contacts)=>{
          setContactsList(contacts);
        }
        return (<View style={styles.container}>
            <Text>LISTA DE CONTACTOS</Text>
            <Button
                title='Consulta'
                onPress={()=>{
                   getAllContacts(fnRefrshList);
                }}
            />
            <FlatList
              data={contactsList}
              renderItem={({item})=>{
               return (<ContactItem contact={item}/>)
              }}
            />
            <FAB
              title='+'
              onPress={()=>{navigation.navigate('ContactsFormsNav')}}
            />
        </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});