import React, { Component } from 'react';
import {Grid, Paper, Box} from "@material-ui/core";
import Cell from './Cell';



class Maze extends Component {

    matrix=[2];
    paths = [];
    idx = 0;
    numPaths = 0;
    pathIdx =0;
    
    index = () => {
        this.idx +=1;
        return this.matrix[this.idx];
    }
    render(){
        return (
            <div className='App'>
                <Grid container spacing={1} justify="center" direction="column">
                    <p>
                    <Grid container spacing={1} justify="center" direction="row">
                    <Grid item>
                        <Paper elevation={3}>
                            <Box padding={2} height={50} width={50}>
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
                    <Grid item>
                        <Paper elevation={3}>
                            <Box padding={2} height={50} width={50}>
                            </Box>
                        </Paper>
                    </Grid>
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
    
                            </Box>
                        </Paper>
                    </Grid>
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
    
                            </Box>
                        </Paper>
                    </Grid>
                    <Cell N={this.index()}></Cell>
                    <Cell N={this.index()}></Cell>
                    <Cell N={this.index()}></Cell>
                    </Grid>
                    </p>
                </Grid>
            </div>
        );
    };
};
    
export default Maze;
        
    
