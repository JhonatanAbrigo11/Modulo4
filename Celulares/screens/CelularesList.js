import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { use, useState,useEffect } from 'react';
import { ListItem,FAB } from '@rneui/themed';
import {getAllCelulares} from '../rest_client/celulares'
export const CelularesList=({navigation})=>{
    const [celularesList,setCelularesList]= useState([]);

    useEffect(()=>{
              console.log('Ejecuto la funcion del useEffect')
              getAllCelulares(fnRefrshList);
            },[]);

    const CelularItem = ({ celular }) => {
    return (
        <ListItem>
            <ListItem.Content>
                <ListItem.Title>{celular.nombre} {celular.apellido}</ListItem.Title>
                <ListItem.Subtitle>{celular.celular}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};


    const fnRefrshList=(celular)=>{
      console.log("Datos recibidos en fnRefrshList:", celular);
      setCelularesList(celular)
    }
    console.log('celulares list ',celularesList)
    return (<View style={styles.container}>
               <FlatList
                 data={celularesList}
                 renderItem={({item})=>{
                  return (<CelularItem celular={item}/>)
                 }} 
               />
               <FAB
                 title='+'
                 onPress={()=>{navigation.navigate('CelularesFormsNav',{})}}
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