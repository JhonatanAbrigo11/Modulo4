import { StyleSheet, Text, View,FlatList } from 'react-native';
import {Button} from '@rneui/base'
import { useState } from 'react';
import { ListItem } from '@rneui/themed';
import {getAllLaptos} from '../restLaptop/laptos'
export const LaptosList=()=>{
    const [laptosList, setLaptosList] = useState([{}])

    const LaptoItem=({lapto})=>{
        return (<ListItem>
            <ListItem.Content>
              <ListItem.Title>{lapto.marca}</ListItem.Title>
              <ListItem.Subtitle>{lapto.memoria} {lapto.disco}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>)
    }

    const refreshList=(lapto)=>{
        setLaptosList(lapto);
    }
    return (<View>
        
        <FlatList
            data={laptosList}
            renderItem={({item})=>{
            return (<LaptoItem lapto={item}/>)
            }}
        />
        <Button
         title = 'CONSULTAR'
         onPress={()=>{
            getAllLaptos(refreshList);
         }}
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
  })