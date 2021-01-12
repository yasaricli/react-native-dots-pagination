import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Dots from 'react-native-dots-pagination';
import _ from 'underscore';

class Example extends Component {
  state = {
    active0: 0,
    active1: 1,
    active2: 2,
    active3: 3,
  };

  changePress() {
    this.setState({
      active0: _.random(0, 4),
      active1: _.random(0, 9),
      active2: _.random(0, 14),
      active3: _.random(0, 39),
    });
  }

  render() {
    return (
      <SafeAreaView>
          <Dots length={5} active={this.state.active0} />
          <Dots length={10} active={this.state.active1} />
          <Dots length={15} active={this.state.active2} />
          <Dots
            ref="dots"
            length={40}
            active={this.state.active3}
            onScrollTo={(index, key) => {
              this.setState({ active3: index })
            }}
          />
        <View style={Styles.footer}>
          <TouchableOpacity
            style={Styles.button}
            onPress={this.changePress.bind(this)}>
            <Text style={Styles.buttonText}>CHANGE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    marginVertical: 15,
  },

  button: {
    width: 100,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Example;
