// Components/Test.js

import React from 'react'
import { StyleSheet, View } from 'react-native'

class Test extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.main_container}>
        <View style={styles.main_container}>
          <View style={styles.subview_container}>
          //...
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
//notre SafeAreaView joue son rôle et s'assure que notre vue ne passe pas sous les composants du téléphone. L'avantage est que cela reste fonctionnel sur les autres téléphones iOS : iPhone 7, 6, 5, etc. (à partir d'iOS 11) et même sur Android.
//En fait, sur Android, le component SafeAreaView est ignoré et c'est notre View (avec le style  flex  à 1) qui prend le relais.
//Dans notre application, nous n'aurons pas besoin d'utiliser SafeAreaView. Tout simplement parce que React Navigation et son component StackNavigator utilisent déjà un SafeAreaView.

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  subview_container: {
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
        height: 100,
        width: 50
      },
      android: {
        backgroundColor: 'blue',
        height: 50,
        width: 100
      }
    })
})

export default Test
