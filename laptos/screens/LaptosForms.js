import { StyleSheet, Text, View,Alert } from 'react-native';
import { Input,Button} from '@rneui/base';
import {  useState } from 'react';
import { createLaptop } from '../restLaptop/laptos';
export const LaptosForms=({navigation})=>{

    const [brand, setBrand]= useState();
    const [processor,setProcessor]= useState();
    const [memory,setMemory]= useState();
    const [disk,setDisk]= useState();


    const showMessage=()=>{
        Alert.alert('CONFIRMACIÓN', 'SE HA CREADO CORRECTAMENTE')
    }

    const saveLapto=()=>{
        navigation.goBack();
        createLaptop({
            brand: brand,
            processor: processor,
            memory: memory,
            disk: disk
        },
        showMessage
    )
    }

    

    return (<View style={styles.container}>
        
        <Input
            value={brand}
            placeholder='MARCA'
            onChangeText={(value)=>{
                setBrand(value)
            }}
        />
         <Input
            value={processor}
            placeholder='PROCESADOR'
            onChangeText={(value)=>{
                setProcessor(value)
            }}
        />
         <Input
            value={memory}
            placeholder='MEMORIA'
            onChangeText={(value)=>{
                setMemory(value)
            }}
        />
         <Input
            value={disk}
            placeholder='DISCO'
            onChangeText={(value)=>{
                setDisk(value)
            }}
        />
        <Button
            title='GUARDAR'
            onPress={saveLapto}
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
  })