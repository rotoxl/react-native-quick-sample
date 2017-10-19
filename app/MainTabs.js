/**
 * @flow
 */

import React from "react";
import {StackNavigator, TabNavigator} from "react-navigation";


import ListScreen from "./screens/ListScreen";
import CounterScreen from "./screens/CounterScreen";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {ActionCreators} from "./actions";

import Ionicons from 'react-native-vector-icons/Ionicons';



const ListTab = StackNavigator({
    ListScreen: {
        screen: ListScreen,
    },
});


const MainTabs = TabNavigator({
    CounterTab: {
        screen: CounterScreen,
        navigationOptions: {
            tabBarLabel: "Counter",
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-analytics' }
                    size={26}
                    style={{ color: tintColor}}
                />
            ),
        },
    },

    ListTab: {
        screen: ListTab,
        navigationOptions: {
            tabBarLabel: "All Colors",
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-list-box'}
                    size={26}
                    style={{ color: tintColor}}
                />
            ),
        },
    },

}, {
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#4ec9b0',
        inactiveTintColor: 'grey',
        showLabel: true,
        showIcon: true,
        pressColor: 'grey',
        upperCaseLabel: false,
        style: {
            backgroundColor: 'white',
            elevation: 20
        },
        labelStyle: {
            fontSize: 10,
            margin: 0,
        },
        indicatorStyle: {
            backgroundColor: "#4ec9b0"
        }
    }
});


function mapDispatchToPros(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
export default connect((state) => {return {...state}}, mapDispatchToPros)(MainTabs);
