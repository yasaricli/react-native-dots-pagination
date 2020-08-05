import React, { Component } from 'react';
import { View, ScrollView, Platform } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import Styles from './styles';

// set to fit
const scalesPageToFit = Platform.OS === 'android';

const DEFAULT_PASSIVE_DOT_WIDTH = 10;
const DEFAULT_ACTIVE_DOT_WIDTH = 15;

export default class Dots extends Component {
  static get propTypes() {
    return {
      length: PropTypes.number.isRequired,
      active: PropTypes.number.isRequired,

      width: PropTypes.number,
      paddingVertical: PropTypes.number,
      paddingHorizontal: PropTypes.number,

      // Dots
      passiveDotWidth: PropTypes.number,
      activeDotWidth: PropTypes.number,
      activeDotHeight: PropTypes.number,
      passiveDotHeight: PropTypes.number,
      passiveColor: PropTypes.string,
      activeColor: PropTypes.string,

      // active Border
      activeBorder: PropTypes.bool,
      activeBorderColor: PropTypes.string,
      activeBorderWidth: PropTypes.number,
    };
  }

  static defaultProps = {
    width: 300,

    marginHorizontal: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,

    passiveDotWidth: DEFAULT_PASSIVE_DOT_WIDTH,
    activeDotWidth: DEFAULT_ACTIVE_DOT_WIDTH,
    activeDotHeight: DEFAULT_ACTIVE_DOT_WIDTH,
    passiveDotHeight: DEFAULT_PASSIVE_DOT_WIDTH,
    passiveColor: '#CCCCCC',
    activeColor: '#016bd8',

    activeBorder: false,
    activeBorderWidth: 3,
    activeBorderColor: '#FFF',
  };

  componentDidUpdate (prevProps) {
    const newActive = this.props.active;
    if (prevProps.active !== newActive) {
      this.scrollTo(newActive);
    }
  }

  scrollTo(index) {
    const { width, activeDotWidth } = this.props;
    const get = this[`dots_${index}`];

    if (get) {
      const x = get.x - (width / 2 - activeDotWidth);

      return this.scrollRef.scrollTo({ x });
    }
  }

  isActive(index) {
    return this.props.active === index;
  }

  dotStyle(isActive) {
    const {
      activeDotWidth,
      passiveDotWidth,
      activeDotHeight,
      passiveDotHeight,
      activeColor,
      passiveColor,
      activeBorder,
      activeBorderWidth,
      activeBorderColor,
      marginHorizontal,
      alignDotsOnXAxis,
    } = this.props;
    const width = isActive ? activeDotWidth : passiveDotWidth;
    const marginTop = alignDotsOnXAxis || !isActive ? 0 : -width / 6;

    let height = width;

    if (isActive && activeDotHeight != null) {
      height = activeDotHeight;
    } else if (!isActive && passiveDotHeight != null) {
      height = passiveDotHeight;
    }

    let style = {
      width,
      height,
      marginHorizontal,
      backgroundColor: isActive ? activeColor : passiveColor,
      borderRadius: width,
      marginTop,
    };

    // active Border Styles.
    if (activeBorder && isActive) {
      style.borderWidth = activeBorderWidth;
      style.borderColor = activeBorderColor;
    }

    return style;
  }

  render() {
    const {
      length,
      width,
      paddingVertical,
      paddingHorizontal,
      activeDotWidth,
      activeBorderWidth,
      passiveDotWidth,
      marginHorizontal,
    } = this.props;
    const list = [...Array(length).keys()];
    const activeWidth = (activeBorderWidth * 4) + activeDotWidth + paddingHorizontal;
    const scrollWidth = activeWidth + ((list.length - 1) * passiveDotWidth) + (marginHorizontal * (list.length * 2));

    return (
      <View style={Styles.container}>
        <ScrollView
          ref={(el) => { this.scrollRef = el; }}
          style={{ width: width < scrollWidth ? width : scrollWidth }}
          contentContainerStyle={{ alignItems: 'center', paddingVertical, paddingHorizontal }}
          scalesPageToFit={scalesPageToFit}
          bounces={false}
          horizontal={true}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
        >
          {list.map(i => {
            return (
              <View
                key={i}
                style={this.dotStyle(this.isActive(i))}
                onLayout={({
                  nativeEvent: {
                    layout: { x, y },
                  },
                }) => {
                  this[`dots_${i}`] = { x, y };
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
