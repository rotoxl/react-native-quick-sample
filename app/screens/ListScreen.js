import React, {Component} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";


import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {ActionCreators} from "../actions/index";

import Ionicons from "react-native-vector-icons/Ionicons";

class ListScreen extends Component {

    props: {
        list: []
    };


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.navigation.setParams({deleteAllItems: this.props.deleteAllItems});
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.list.map(i => {
                        return {key: i.color, ...i}
                    })}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }

    renderItem({item}) {
        return (
            <View style={[styles.listItem, {backgroundColor:item.color}]}>
                <Text style={{paddingLeft:8, fontSize:30, opacity:.9}}>{item.key}</Text>
                <View style={[styles.colorPreview, {backgroundColor: item.color}]}/>
            </View>
        )
    }

    static navigationOptions = ({ navigation }) => ({
                title: "All Colors",
                headerRight:
                    <TouchableOpacity onPress={() =>{navigation.state.params.deleteAllItems()}}>
                        <Ionicons
                            name={'ios-trash-outline'}
                            size={26}
                            style={{color:'#4ec9b0', marginRight: 10}}
                        />
                    </TouchableOpacity>
    })
}


const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingTop: 0
    },

    listItem: {
        height: 65,
        flexDirection: "row",
        backgroundColor: "white",
        marginBottom: 0,
        
        alignItems: "center",
        padding: 5
    },

    colorPreview: {
        height: 20,
        width: 20,
    }
});

function mapStateToProps(state) {
    return {
        list: state.list,
        listSize: state.listSize,
    }
}
function mapDispatchToPros(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToPros)(ListScreen);
