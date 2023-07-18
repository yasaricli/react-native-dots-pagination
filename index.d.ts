import { Component } from "react";

export interface DotsProperties {
  /**
   * Required. The amount of dots you want to use. Default: 30
   */
  length: number;
  /**
   * Required. The index of the currently active dot. Default: 1
   */
  active: number;

  /**
   * The overall width works like a center. Default: 300
   */
  width?: number;
  /**
   * Average Vertical padding. Default: 10
   */
  paddingVertical?: number;
  /**
   * Average Horizontal padding. Default: 10
   */
  paddingHorizontal?: number;

  // Dots
  /**
   * (Width, Height) for passive dot. Default: 10
   */
  passiveDotWidth?: number;
  /**
   * (Width, Height) for active dot. Default: 15
   */
  activeDotWidth?: number;
  /**
   * Height for active dot. Default: 15
   */
  activeDotHeight?: number;
  /**
   * Height for passive dot. Default: 10
   */
  passiveDotHeight?: number;
  /**
   * Colors for passive dots. Default: #CCCCCC
   */
  passiveColor?: string;
  /**
   * Colors for active dots. Default: #016bd8
   */
  activeColor?: string;

  // active Border
  activeBorder?: boolean;
  activeBorderColor?: string;
  activeBorderWidth?: number;

  /**
   * To adjust Margin Horizontal Default: 2
   */
  marginHorizontal?: number;
  // events
  /**
   * Trigger when scrolls and index changes
   */
  onScrollTo?: (index: number) => void;
  /**
   * To adjust if the active dot should align with the x axis of the inactive dots
   */
  alignDotsOnXAxis?: boolean;
  /**
   * Set to true if you wish the dots to be reachable by screen reader. If true, you should supply an `acccessibilityLabel`. 
   */
  accessible?: boolean;
  /**
  * Label to be read by screen readers if the element is accessible. Should indicate to the user that there is swipeable content on the page, and which panel they are currently on.
  */
  accessibilityLabel?: string
}

export default class Dots extends Component<DotsProperties> {}
