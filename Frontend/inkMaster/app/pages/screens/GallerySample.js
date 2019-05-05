import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
  ScrollView,
  Button 
} from 'react-native';

const { height } = Dimensions.get('window');

import ImageElement from 'inkMaster/app/components/ImageElement.js';

export default class Gallery extends React.Component {
  static navigationOptions = {
    title: 'Tattoo Designs',
  };

  state = {
    screenHeight:0,
    modalVisible: false,
    modalImage: require('inkMaster/app/images/tattoo1.jpg'),
    images: [
      require('inkMaster/app/images/tattoo1.jpg'),
      require('inkMaster/app/images/tattoo2.jpg'),
      require('inkMaster/app/images/tattoo3.png'),
      require('inkMaster/app/images/tattoo4.jpg'),
      require('inkMaster/app/images/tattoo5.png'),
      require('inkMaster/app/images/tattoo6.jpg'),
      require('inkMaster/app/images/tattoo7.jpg'),
      require('inkMaster/app/images/tattoo8.jpg'),
    ]
  }

  setModalVisible(visible, imageKey){
    this.setState({modalImage: this.state.images[imageKey]});
    this.setState({modalVisible: visible});
  }

  getImage(){
    return this.state.modalImage;
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight});
  };

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    let images = this.state.images.map((val, key) => {
      return <ScrollView scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
        <TouchableWithoutFeedback key={key} 
                onPress={() => {this.setModalVisible(true, key)}}>
                <View style={styles.imagewrap}>
                  <ImageElement imgsource={val}></ImageElement>
                </View>
          </TouchableWithoutFeedback>
          </ScrollView>
      
    });

    return(
      <View style={styles.container}>
        <Modal style={styles.modal} animationType={'fade'}
        transparent={true} visible={this.state.modalVisible}
        onRequestClose={() => {}}>
          <View style={styles.modal}>
            <Text style={styles.text}
            onPress={() => {this.setModalVisible(false)}}>Close</Text>
            <ImageElement imgsource={this.state.modalImage}></ImageElement>
            <Text style={styles.text} onPress={this._showAppointment}> Make an appointment </Text>
            <Text style={styles.text} onPress={this._testingFirebase}> Firebase </Text>
          </View>

        </Modal>
        {images}
      </View>
    )
    /*return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sample gallery</Text>
          </TouchableOpacity>
      </View>
    );*/
  }
  _showAppointment = () => {
    this.props.navigation.navigate('Appointments');
  };

  _testingFirebase = () => {
    this.props.navigation.navigate('ImageUpload');
  }

}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor:'#eee',
    /*alignItems:'center',
    justifyContent :'center'*/
  },

  imagewrap: {
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height/3)-12,
    width: (Dimensions.get('window').width/2)-4,
    backgroundColor: '#fff',
  },
  /*button: {
    width:300,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }*/

  modal:{
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0,0,0, 0.9)'
  },

  text: {
    color: '#fff',
  },

  contentContainer:{
    padding:20
  }
});

//AppRegistry.registerComponent('GallerySample', () => GallerySample);