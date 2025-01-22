import { StyleSheet, Text, View,FlatList,TouchableHighlight } from 'react-native';
import {Button} from '@rneui/base'
import { useState,useEffect } from 'react';
import { ListItem,FAB } from '@rneui/themed';
import {getAllLaptos} from '../restLaptop/laptos'

export const LaptosList=({navigation})=>{

    const [laptosList, setLaptosList] = useState([{}])

    useEffect(()=>{
      getAllLaptos(refreshList);
    },[])
    const LaptoItem=({lapto})=>{
        return (
          <TouchableHighlight onPress={()=>{
            navigation.navigate("LaptosFormstNav",{laptoParam: lapto})
          }}>
        <ListItem>
            <ListItem.Content>
              <ListItem.Title>{lapto.marca}</ListItem.Title>
              <ListItem.Subtitle>{lapto.memoria} {lapto.disco}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          </TouchableHighlight>)
    }

    const refreshList=(lapto)=>{
        setLaptosList(lapto);
    }
    return (<View style={styles.container}>
        
        <FlatList
            data={laptosList}
            renderItem={({item})=>{
            return (<LaptoItem lapto={item}/>)
            }}
        />
        <FAB 
          title='+'
          onPress={()=>{navigation.navigate("LaptosFormstNav",{})}}
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