import { remove } from 'mobx';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, TextInput, View ,StyleSheet,Text, TouchableOpacity} from 'react-native';

function App(props) {
  //const items=["hello"]
  const [count,setCount]=useState(0)
  const [item,setItem]=useState()
  const [items,setItemss]=useState([])
  const removeItem =(index)=> {
    let itemscopy=[...items];
    itemscopy.splice(index,1);
    setItemss(itemscopy);

  }
  useEffect(()=>{
    console.log(items)


  });
  
  return (
    <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='always'
      >
        <Text style={styles.welcome}>
          Welcome to MobX
        </Text>
        <View style={styles.row}>
        <View style={styles.input}>
          <TextInput placeholder="add item"
          onChangeText={item=>setItem(item)}
          /> 
        </View>
        <View>
          <Button
          title="add item"
            onPress={()=>{setItemss([...items,item])}}


          />
         
        
        </View>
        </View>
        <View>
          {
             items.map((data,index)=>{
              return (
                 
 <TouchableOpacity  onPress={()=>removeItem(index)} >
                  
                 <View style={styles.itemrow}>

                 <Text   key={index}>{data}</Text>
                 <View>
                 <Button 
                  title="remove me"
                  onPress={()=>removeItem(index)}

                  />
                 </View>
                 </View>
                </TouchableOpacity>

                
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
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input : {
    borderColor : "gray",
    width : 250,
    borderWidth : 1,
    borderRadius : 10,
  },
  row: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingVertical : 20,
    
  },
  itemrow : {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor : 'black',
    borderWidth : 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,

  },

})