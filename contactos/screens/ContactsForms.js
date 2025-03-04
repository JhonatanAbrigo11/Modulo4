import {View,Text,StyleSheet,Alert} from 'react-native'
import {Input, Button} from '@rneui/base'
import { useState } from 'react'
import {saveContactRest} from '../rest_client/contactos'
import { updateContactRest,deleteContactRest } from '../rest_client/contactos'


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


    

    const showMessage=(message)=>{
        Alert.alert('CONFIRMACIÓN',message)
        navigation.goBack();
    }

    const createContact=()=>{
        
        saveContactRest({
            name: name,
            surname: surname,
            phoneNumber: phoneNumber
        },
        showMessage,
        
        );
    }

    const updateContact=()=>{
        console.log('actualizando contacto')
        updateContactRest({
            id: contactRetrieved.id_contactos,
            name: name,
            surname: surname,
            phoneNumber: phoneNumber

        },
        showMessage);    
    }

    const confirmDelete=()=>{
        Alert.alert('CONFIRMACIÓN', 
        'Esta seguro de que quiere eliminar?',
        [{
                text:'SI',
                onPress:deleteContact
        },{
            text: 'CANCELAR'
        }]
    )
    }
    const deleteContact=()=>{
        deleteContactRest({
            id:contactRetrieved.id_contactos
        },showMessage)
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
        {
            isNew?<View></View>:<Button
            title="ELIMINAR"
            onPress={confirmDelete}
        />
        }
      

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