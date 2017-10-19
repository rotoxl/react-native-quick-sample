import React, {Component} from "react";
import {Dimensions, StyleSheet, View} from "react-native";

import * as Animatable from "react-native-animatable";
const Color = require("pigment/full");

export default class ColorCircle extends Component {

    props: {
        color: string
    };

    static defaultProps = {};

    constructor() {
        super();

        this.state = {};
    }


    componentDidUpdate(prevProps, prevState) {

        this.refs.circlescontainer.rubberBand(1000)
    }

    render() {

        const {height, width} = Dimensions.get('window');

        let ratio;
        if (height>width) {
            ratio = width * 1.1;
        } else {
            ratio = height * 1.1;
        }

        var c = new Color(this.props.color)
        let ratio2=ratio-20*Math.random()
        let ratio3=ratio+20*Math.random()
        let ratio4=ratio+20*Math.random()

        return (
            <Animatable.View ref="circlescontainer" style={{position:'absolute', paddingTop:60, top:0, bottom:0,  }}>
                <Animatable.View
                    ref="circle"
                    style={[styles.circle, {borderColor:this.props.color, height: ratio, width: ratio, borderRadius: ratio/2}]}>
                    {this.props.children}
                </Animatable.View>

                <Animatable.View
                    ref="circle2"
                    duration={Math.max(20000*Math.random(), 8000)}
                    animation="rotate"
                    iterationCount="infinite"
                    style={[styles.circle, { position:'absolute', left:5*Math.random(), top:+10*Math.random(), borderWidth:15*Math.random(), borderColor:c.lighten(.3).tohex(), height: ratio2+42, width: ratio2, borderRadius: ratio2/2}]}>
                </Animatable.View>
                <Animatable.View
                    ref="circle3"
                    duration={Math.max(20000*Math.random(), 8000)}
                    direction="reverse"
                    animation="rotate"
                    iterationCount="infinite"
                    style={[styles.circle, {position:'absolute', left:-5*Math.random(), top:-10*Math.random(), borderWidth:20*Math.random(), borderColor:c.lighten(.6).tohex(), height: ratio3+40, width: ratio3-40, borderRadius: ratio3/2}]}>
                </Animatable.View>
                
                <Animatable.View
                    ref="circle4"
                    duration={Math.max(20000*Math.random(), 8000)}
                    direction="alternate"
                    animation="rotate"
                    iterationCount="infinite"                     
                    style={[styles.circle, {position:'absolute', left:+10*Math.random(), top:+5*Math.random(), borderWidth:5*Math.random(), borderColor:c.darken(.2).tohex(), height: ratio4-40, width: ratio4+10, borderRadius: ratio4/2}]}>
                </Animatable.View>
            </Animatable.View>
        );
    }
}


const styles = StyleSheet.create({
    circle: {
        borderWidth: 30,
        alignItems: "center",
        justifyContent: "center",
    },
});
