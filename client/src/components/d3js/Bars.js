import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'

export default class Bars extends Component {
  constructor(props) {
    super(props)

    this.colorScale = scaleLinear()
      .domain([0, this.props.maxValue])
      .range(['#C1D6F5', '#51A5DE'])
      .interpolate(interpolateLab)
  }


  render() {
    const { scales, margins, data, svgDimensions } = this.props
    const { xScale, yScale } = scales
    const { height } = svgDimensions

    const bars = (
      data.map(datum =>
        <rect
          key={datum.title}
          x={xScale(datum.day)}
          y={yScale(datum.value)}
          height={height - margins.bottom - scales.yScale(datum.value)}
          width={25}
          fill={this.colorScale(datum.value)}
          stroke-width={1}
          stroke={'#f5f5f5'}
        />
      )
    )

    return (
      <g>{bars}</g>
    )
  }
}
