import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

// Styles
import Styles from './styles';

export default class Dots extends Component {
  static defaultProps = {

    // ScrollView
    width: 300,
    paddingVertical: 20,
    paddingHorizontal: 10,

    // Dots
    passiveDotWidth: 10,
    activeDotWidth: 15,
    passiveColor: '#CCCCCC',
    activeColor: '#016bd8'
  }

	componentWillReceiveProps({ active }) {
		const oldActiveIndex = this.props.active;

		if (oldActiveIndex != active) {
			this.scrollTo(active);
		}
	}

	scrollTo(index) {
    const { width, activeDotWidth } = this.props;
		const get = this[`dots_${index}`];

		if (get) {
      const x = get.x - ((width / 2) - activeDotWidth);

      return this.refs._scrollView.scrollTo({ x });
		}
	}

	isActive(index) {
		return this.props.active == index;
	}

  dotStyle(isActive) {
    const { activeDotWidth, passiveDotWidth, activeColor, passiveColor } = this.props;
    const width = isActive ? activeDotWidth : passiveDotWidth;

    return {
      width,
      height: width,
      backgroundColor: isActive ? activeColor : passiveColor,
      borderRadius: width,
      marginHorizontal: 2,
      marginTop: isActive ? - width / 6 : 0
    }
  }

	render() {
		const { length, width, paddingVertical, paddingHorizontal } = this.props;
		const list = [ ...Array(length).keys() ];

		return (
			<View style={Styles.container}>
				<ScrollView
					style={{ width, paddingVertical, paddingHorizontal }}
					ref="_scrollView"
					horizontal={true}
					scrollEnabled={false}
				>
					{list.map((i) => {
						return (
							<View
								key={i}
								style={this.dotStyle(this.isActive(i))}
								onLayout={({ nativeEvent: { layout: { x, y } } }) => {
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
