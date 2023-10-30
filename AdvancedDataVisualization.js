/** 
 * File Name: AdvancedDataVisualization.js
 * 
 * Description: This code demonstrates advanced data visualization using D3.js library.
 * It creates an interactive scatter plot with tooltips and handles resizing of the chart.
 * It fetches data from an API and updates the chart dynamically.
 */

// Import necessary libraries
import * as d3 from 'd3';
import debounce from 'lodash.debounce';

// Define chart dimensions and margins
const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const width = 800 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

// Append an SVG container to the body
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// Create scales for x and y axes
const xScale = d3.scaleLinear().range([0, width]);
const yScale = d3.scaleLinear().range([height, 0]);

// Create x and y axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

// Append x and y axes to the chart
svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0, ${height})`);
svg.append('g').attr('class', 'y-axis');

// Add chart title
svg
  .append('text')
  .attr('class', 'chart-title')
  .attr('x', width / 2)
  .attr('y', -margin.top / 2)
  .text('Scatter Plot');

// Load data from an API
d3.json('https://api.example.com/data')
  .then((data) => {
    // Perform necessary data transformations

    // Update scales domain based on loaded data
    xScale.domain([d3.min(data, (d) => d.x), d3.max(data, (d) => d.x)]);
    yScale.domain([d3.min(data, (d) => d.y), d3.max(data, (d) => d.y)]);

    // Update x and y axes
    svg.select('.x-axis').call(xAxis);
    svg.select('.y-axis').call(yAxis);

    // Create tooltips for data points
    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    // Add data points to the chart
    svg
      .selectAll('.data-point')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'data-point')
      .attr('cx', (d) => xScale(d.x))
      .attr('cy', (d) => yScale(d.y))
      .attr('r', 5)
      .on('mouseover', (d) => {
        tooltip
          .transition()
          .duration(200)
          .style('opacity', 0.9);
        tooltip
          .html(`${d.x}, ${d.y}`)
          .style('left', `${d3.event.pageX}px`)
          .style('top', `${d3.event.pageY - 28}px`);
      })
      .on('mouseout', () => {
        tooltip
          .transition()
          .duration(200)
          .style('opacity', 0);
      });

    // Handle window resizing
    const resizeChart = debounce(() => {
      const newWidth = parseInt(d3.select('body').style('width'), 10) - margin.left - margin.right;
      svg.attr('width', newWidth + margin.left + margin.right);
      xScale.range([0, newWidth]);
      svg.selectAll('.data-point').attr('cx', (d) => xScale(d.x));
      svg.select('.x-axis').call(xAxis);
    }, 250);
  
    window.addEventListener('resize', resizeChart);
  })
  .catch((error) => {
    console.log('Error loading data:', error);
  });