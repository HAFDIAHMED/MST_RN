import { remove } from 'mobx';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, TextInput, View ,StyleSheet,Text} from 'react-native';

function App(props) {
  //const items=["hello"]
  const [count,setCount]=useState(0)
  const [item,setItem]=useState()
  const [items,setItemss]=useState([])
  function removeItem (index){
    return (
      items.splice(index, 1)
      );
  }
  useEffect(()=>{
    removeItem


  });
  
  return (
    <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='always'
      >
        <Text style={styles.welcome}>
          Welcome to MobX
        </Text>
        <View>
          <TextInput placeholder="add item"
          onChangeText={item=>setItem(item)}
          />

          
          <Text>{item}</Text>
        </View>
        <View>
          <Button
          title="add item"
            onPress={()=>{setItemss([...items,item])}}

          />
         
          <Button 
          
          title="remove item 1"
          onPress={()=>removeItem(0)}


          />
        </View>
        <View>
          {
             items.map((data)=>{
              return (
                <View><Text key={data}>{data}</Text></View>
              );
            })
          }
        </View>

        
        
      </ScrollView>
    
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})