import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import ModalDatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-24h-timepicker';

export default class Appointment extends React.Component{
    static navigationOptions = {
        title: 'Make an appointment',
    };

    constructor(props){
        super(props);
        var date=new Date().getDate();
        var month=new Date().getMonth()+1;
        var year=new Date().getFullYear();
        this.state = {date: year+"-"+month+"-"+date};
        this.state = {time: " "};
    }

    onCancel(){
        this.TimePicker.close();
    }

    onConfirm(hour, minute){
        this.setState({time: hour+" : "+minute});
        this.TimePicker.close();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.headingText}>inkMaster</Text>
                <Text>Date: </Text>
                <ModalDatePicker date={this.state.date} minDate={this.state.date} onDateChange={(date)=>{this.setState({date:date})}}>
                </ModalDatePicker>
                <Text>Time: </Text>
                <TouchableOpacity onPress={()=>this.TimePicker.open()}>
                    <Text style={styles.textBox}>{this.state.time}</Text>
                </TouchableOpacity>
                <TimePicker
                ref={ref => {this.TimePicker = ref}}
                onCancel = {()=>this.onCancel()}
                onConfirm={(hour, minute) => this.onConfirm(hour, minute)}>
                </TimePicker>
                <Text>Special Note: </Text>
                <TextInput multiline={true} numberOfLines={4} style={styles.inputBox}></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        backgroundColor:'#455a64',
        alignItems:'center',
        justifyContent :'center',
        paddingVertical: 10,
        fontSize: 20
    },

    headingText : {
        marginVertical: 10,
        fontSize:20,
        fontWeight: 'bold',
        paddingVertical: 20,
        color:'rgba(255, 255, 255, 0.7)'
    },

    inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:26,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 7
      },

      button: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
      },

      buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
      },

      textBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:26,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 7,
        textAlign: 'center'
      },
});