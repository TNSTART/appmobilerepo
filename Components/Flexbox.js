import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Flexbox extends React.Component {
render() {
    return (
  /*    <View style={{ flex: 1, backgroundColor: 'yellow', flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        <View style={{ flex: 2, backgroundColor: 'green' }}></View>
        <View style={{ flex: 3, backgroundColor: 'blue' , flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
          <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
          <View style={{ height: 50, width: 50, backgroundColor: 'yellow' }}></View>
        </View>
      </View>
      */
      <View style={{ alignItems : 'center' }}>
      <View style={{ height: 100, width: 100, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        <View style={{ flex: 2, backgroundColor: 'green',flexDirection: 'column' }}>
          <View style={{ flex: 1, backgroundColor: 'bleu',flexDirection: 'row' }}>
            <View style={{ flex: 1, backgroundColor: 'green' }}></View>
            <View style={{ flex: 2, backgroundColor: 'yellow' }}></View>
          </View>
          <View style={{ flex: 3, backgroundColor: 'black' }}></View>
          <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>
        </View>
      </View>
      </View>
                                                                      //justifyContent: 'flex-start' 'center' 'flex-end' 'space-between' 'space-around'
                                                                      //alignItems: 'flex-start' 'center' 'flex-end' 'stretch'
/*      on découpe notre espace en 6 (1 + 2 + 3) et on dit :

vue rouge prend 1/6 de l'écran ;

vue verte prend 1/3 (2/6) de l'écran ;

vue bleue prend 1/2 (3/6) de l'écran  */
    )
  }
}
export default Flexbox
