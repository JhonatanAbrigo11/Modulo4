import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { use, useState } from 'react';
import {Input, Button} from '@rneui/base'

export const CelularesForms=()=>{
  const [nombre,setNombre] = useState();
  const [apellido,setApellido]= useState();
  const [celular,setCelular]= useState();
  
  return(<View>
     <Input
        value={nombre}
        placeholder='NOMBRE' 
        onChangeText={(value)=>{
            setNombre(value);
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
});
