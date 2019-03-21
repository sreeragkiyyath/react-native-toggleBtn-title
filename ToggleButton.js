import React, { Component } from 'react'
import { View, Switch, StyleSheet, Text } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid';

/*
<Title> =  <state one > : <Toggle button> : <state two> : <icon>
*/

export default ToggleButton = (props) => {
   return (
      <View style = {styles.container}>
        <Text style = {styles.title}> { props.title }      </Text>
        <Text> { props.stateOne }   </Text>
            <Switch
            onValueChange = { props.toggleSwitch }
            value = { props.toggleStatus }
         />
        <Text>  { props.stateTwo  }  </Text>
        </View>
     )
}
const styles = StyleSheet.create ({
   container: {
      flex: 1,     
      marginTop: 10,
      flexDirection:'row'
   },
   title:{
        fontWeight:"bold",
        color: '#000000'
   }, subcontainer: {
        flex: 2,     
    }
})