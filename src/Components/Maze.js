import React, { Component } from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import Cell from "./Cell";

class Maze extends Component {
  matrix = [2];
  paths = [];
  idx = 0;
  numPaths = 0;
  pathIdx = 0;

  index = () => {
    this.idx += 1;
    return this.matrix[this.idx];
  };

  handleClick = (e) =>{
      e.prevenDefault();
      window.location.reload(false);
  }

  render() {
    return (
      <div className="App">
        <h1> Rat in a maze </h1>
        <Grid container spacing={2} justify="center" direction="column"></Grid>
        <p>
          <Grid container spacing={1} justify="center" direction="row">
            <Grid item>
              <Paper elevation={3}>
                <Box padding={2} height={50} width={50}>
                  <center></center>
                </Box>
              </Paper>
            </Grid>
            <Cell N={this.index()}></Cell>
            <Cell N={this.index()}></Cell>
            <Cell N={this.index()}></Cell>
          </Grid>
        </p>
        <p>
          <Grid container spacing={1} justify="center" direction="row">
            <Cell N={this.index()}></Cell>
            <Cell N={this.index()}></Cell>
            <Cell N={this.index()}></Cell>
            <Cell N={this.index()}></Cell>
          </Grid>
        </p>
        <p>
          <Grid container spacing={1} justify="center" direction="row">
            <Cell N={this.index()}></Cell>
            <Cell N={this.index()}></Cell>
            <Cell N={this.index()}></Cell>
            <Cell N={this.index()}></Cell>
          </Grid>
        </p>
        <p>
          <Grid container spacing={1} justify="center" direction="row">
            <Grid item>
              <Paper elevation={3}>
                <Box padding={2} height={50} width={50}>
                  <center></center>
                </Box>
              </Paper>
            </Grid>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </Grid>
        </p>
        <div className="App">
            <button onClick={this.handleClick}>Generate new maze</button>
            <button onClick={this.handleClick}>Find path</button>
        </div>
      </div>
    );
  }
}

export default Maze;