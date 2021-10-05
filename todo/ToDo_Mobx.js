import { remove } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Button, ScrollView, TextInput, View ,StyleSheet,Text, TouchableOpacity} from 'react-native';
import {superhero, SuperHero} from '../MOBX/Todo_state';

export default ToDo_Mobx = observer( ()=> {
/*  const [count,setCount]=useState(0)
  const [item,setItem]=useState()
  const [items,setItemss]=useState([])
  const removeItem =(index)=> {
    let itemscopy=[...items];
    itemscopy.splice(index,1);
    setItemss(itemscopy);d

  }
  useEffect(()=>{
    console.log(items)


  });
  const addItems =()=>{
      setItemss([...items,item]);
  } */
  
  
  return (
    <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='always'
      >
        <Text style={styles.welcome}>
          My Tasks 
        </Text>
        <View style={styles.row}>
        <View style={styles.input}>
          <TextInput placeholder="add item"
          onChangeText={(text)=>{superhero.tache=text}}
          /> 
        </View>
        <View>
          <Button
          title="add item"
            onPress={()=>superhero.addTaches(superhero.tache)}


          />
         
        
        </View>
        </View>
        <View style={styles.tasks}>
          {
             superhero.taches.map((data,index)=>{
              return (
                 
 <TouchableOpacity  onPress={()=>superhero.removetache(index)} >
                  
                 <View style={styles.itemrow}>

                 <Text   key={index}>{data}</Text>
                 <View>
                 <Button 
                  title="remove me"
                  onPress={()=>superhero.removetache(index)}

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
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
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
  tasks : {
    //flexDirection : 'row-reverse'
  },

})