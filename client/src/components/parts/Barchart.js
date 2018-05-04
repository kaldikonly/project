import React, { Component } from 'react';
import { scaleLinear }  from 'd3-scale';
import { max }  from 'd3-array';
import { select }  from 'd3-selection';
import './barchart.css';

class BarChart extends Component {
	constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   componentDidMount() {
      this.createBarChart()
   }
   componentDidUpdate() {
      this.createBarChart()
   }
   createBarChart() {

   		const w = 500;
		const h = 100;
      const node = this.node
      const dataMax = max(this.props.data)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()
   
   select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#51A5DE')
      .style('stroke', 'white')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 24)

       select(node)
       .selectAll('text')
       .data(this.props.data)
       .enter()
       .append('text')


       select(node)
      .selectAll('text')
      .data(this.props.data)
      .exit()
      .remove()

       select(node)
      .selectAll('text')
      .data(this.props.data)
       .text(function(d) {
			   		return d;
			   })
       .style('fill', 'black')
       .attr("text-anchor", "middle")
       .attr("font-size", "11px")
	   .attr("fill", "black")
   }
render() {
      return <svg ref={node => this.node = node}
      width={750} height={550}>
      </svg>
   }
}
export default BarChart;