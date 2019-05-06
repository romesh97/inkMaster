import React, { Component } from 'react';
import{
    StyleSheet,
    Image,
}from 'react-native';

export default class ImageElement extends React.Component{
    render(){
        return(
            <Image  source = {this.props.imgsource} style={styles.image}></Image>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    }
});