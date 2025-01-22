import { StyleSheet, Text, View,Alert } from 'react-native';
import { Input,Button} from '@rneui/base';
import {  useState } from 'react';
import { createLaptop,updateLaptopRest } from '../restLaptop/laptos';
export const LaptosForms=({navigation,route})=>{

    let laptoRetrieve= route.params.laptoParam;

    let isNew= true;

    if(laptoRetrieve!=null){
        isNew=false;
    }
    const [brand, setBrand]= useState(isNew?null: laptoRetrieve.marca);
    const [processor,setProcessor]= useState(isNew?null: laptoRetrieve.precesador);
    const [memory,setMemory]= useState(isNew?null:laptoRetrieve.memoria);
    const [disk,setDisk]= useState(isNew?null: laptoRetrieve.disco);


    const showMessage=()=>{
        Alert.alert('CONFIRMACIÓN', isNew?'LAPTO CREADA':'LAPTO ACRUALIZADA')
        navigation.goBack();
    }

    const createLapto=()=>{
        createLaptop({
            brand: brand,
            processor: processor,
            memory: memory,
            disk: disk
        },
        showMessage
    )
    }

    const updateLaptop=()=>{
        updateLaptopRest({
            id: laptoRetrieve.id,
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
            onPress={isNew?createLapto:updateLaptop}
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