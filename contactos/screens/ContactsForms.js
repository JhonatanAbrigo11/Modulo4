import {View,Text,StyleSheet,Alert} from 'react-native'
import {Input, Button} from '@rneui/base'
import { useState } from 'react'
import {saveContactRest} from '../rest_client/contactos'
import { updateContactRest } from '../rest_client/contactos'
export const ContactsForms= ({navigation,route})=>{
    let contactRetrieved= route.params.contactParam 
    let isNew= true;
    if(contactRetrieved!=null){
        isNew=false;
    }
    console.log('isNew', isNew)
    console.log(contactRetrieved)

    const [name, setName] = useState(isNew?null:contactRetrieved.nombre);
    const [surname, setSurname] = useState(isNew?null:contactRetrieved.apellido);
    const [phoneNumber, setPhoneNumber] = useState(isNew?null: contactRetrieved.celular);


    

    const showMessage=()=>{
        Alert.alert('CONFIRMACIÓN',isNew?'CONTACTO CREADO':'CONTACTO ACTUALIZADO')
        navigation.goBack();
    }
    const createContact=()=>{
        
        saveContactRest({
            name: name,
            surname: surname,
            phoneNumber: phoneNumber
        },
        showMessage
        );
    }

    const updateContact=()=>{
        console.log('actualizando contacto')
        updateContactRest({
            id: contactRetrieved.id,
            name: name,
            surname: surname,
            phoneNumber: phoneNumber

        },
        showMessage);    

    }
    return (<View style={styles.container}>
        <Input
            value={name}
            placeholder='NOMBRE' 
            onChangeText={(value)=>{
                setName(value);
            }}
        />

        <Input
            value={surname}
            placeholder='APELLIDO' 
            onChangeText={(value)=>{
                setSurname(value);
            }}
        />

        <Input
            value={phoneNumber}
            placeholder='TELEFONO' 
            onChangeText={(value)=>{
                setPhoneNumber(value);
            }}
            keyboardType='numeric'
        />

        <Button
            title='GUARDAR'
            onPress={isNew?createContact:updateContact}
        />

    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });