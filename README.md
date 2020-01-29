# react-native-dots-pagination

Paging as dots for react-native.

<p align="center">
  <img src="https://raw.githubusercontent.com/tsepeti/react-native-dots-pagination/master/record.gif" width="50%" />
</p>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [Quickstart](#quickstart)
  - [Using](#using)
- [Props](#props)
- [Issues](#issues)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quickstart
    yarn add react-native-dots-pagination
    
## Using

```JS
import React, { Component } from 'react';
import Dots from 'react-native-dots-pagination';


class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }
  
  render() {
    return (
      <Dots length={10} active={this.state.active} />
    )
  }
}
```

# Props

| Name | Default value | Description |
|--|--|--|
| length | 10 | Required. The amount of dots you want to use. |
| active | 1 | Required. The index of the currently active dot. |
| width | 300 | The overall width works like a center. |
| paddingVertical | 10 | Average Vertical padding. |
| paddingHorizontal | 10 | Average Horizontal padding. |
| passiveDotWidth | 10 | (Width, Height) for passive dot. |
| activeDotWidth | 15 | (Width, Height) for active dot. |
| passiveDotHeight | 10 | Height for passive dot. |
| activeDotHeight | 15 | Height for active dot. |
| passiveColor | #CCCCCC | Colors for passive dots. |
| activeColor | #016bd8 | Colors for active dots. |

# Issues

[Github Issues](https://github.com/tsepeti/react-native-dots-pagination/issues) are used to track todos, bugs, feature requests, and more.

