import {View,Text,StyleSheet,FlatList,TouchableHighlight} from 'react-native'
import {Button} from '@rneui/base'
import {getAllContacts} from '../rest_client/contactos'
import { useState,useEffect } from 'react'
import { ListItem,FAB } from '@rneui/themed';

export const ContactsList=({navigation})=>{
  
        const [contactsList,setContactsList]= useState([{}]);

        useEffect(()=>{
          console.log('Ejecuto la funcion del useEffect')
          getAllContacts(fnRefrshList);
        },[]);
        const ContactItem=({contact})=>{
          return (
          <TouchableHighlight onPress={()=>{
            navigation.navigate('ContactsFormsNav',{contactParam:contact});
          }}>
          <ListItem>
            <ListItem.Content>
                <ListItem.Title>{contact.nombre} {contact.apellido}</ListItem.Title>
                <ListItem.Subtitle>{contact.celular}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          </TouchableHighlight>)
        }

        const fnRefrshList= (contacts)=>{
          setContactsList(contacts);
        }
        return (<View style={styles.container}>
            <FlatList
              data={contactsList}
              renderItem={({item})=>{
               return (<ContactItem contact={item}/>)
              }}
            />
            <FAB
              title='+'
              onPress={()=>{navigation.navigate('ContactsFormsNav',{})}}
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