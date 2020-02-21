import React, { Component } from 'react';
import Button from 'react-native-button';
import { connect } from 'react-redux';
//Actions ?
import { fetchSuccessAction, fetchFailedAction, fetchDataSuccessAction, fetchDataListAction } from '../actions';

import {
    Text, View, Image, Alert, Platform, TextInput, FlatList
} from 'react-native';
import NewsItem from "../components/NewsItem"
import { NavigationEvents } from "react-navigation";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_list: [],
        };
        dataList = [];
    }

    // componentWillMount() {
    //     console.log('componentWillMount');
    //     this.props.onFetchData('asc');
    //     console.log('ssssssffff', this.props.list);
    // }

    viewDidAppear() {
        console.log('viewDidAppear');
        this.props.onFetchDatas('asc');
    }

    viewWillAppear() {
        // console.log('viewWillDisappear');
        this.props.onFetchDatas('asc');
    }

    viewDidDisappear() {
        // console.log('viewDidDisappear');
    }

    viewWillDisappear() {
        // console.log('viewWillDisappear');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.props.onFetchDatas('asc');
        console.log('ssssssffff', this.props.list);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);

        if (nextProps.list != null && nextProps.list != undefined) {
            this.setState({
                data_list: nextProps.list
            });
            this.dataList = nextProps.list
            console.log('componentWillReceiveProps', this.state.data_list);
            console.log('componentWillReceiveProps', this.dataList);
        }

    }

    renderItem = ({ item, index }) => {
        return <NewsItem article={item}
            onPress={() => this.onTapSelectedItem(item)} />
    }

    onTapSelectedItem = item => {
        console.log('onTapItem', item);
        this.props.navigation.navigate('Article', {
            article: item,
            title: item.title,
        });
    }

    render() {
        if (this.state.data_list != null && this.state.data_list != undefined) {
            console.log('ssssss', this.props.list.articles);

            return (
                <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                    <NavigationEvents
                        onWillFocus={payload => this.viewWillAppear(payload)}
                        onDidFocus={payload => this.viewDidAppear(payload)}
                        onWillBlur={payload => this.viewWillDisappear(payload)}
                        onDidBlur={payload => this.viewDidDisappear(payload)}
                    />
                    {/* <View style={{ height: 70, flexDirection: 'row' }}>
                        <Button
                            containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                            style={{ fontSize: 18, color: 'white' }}
                            onPress={() => {
                                this.props.onFetchData('asc');
                                //  this.props.onFetchDataList('asc');
                            }}>
                            Fetch list
                    </Button>
                    </View> */}

                    <FlatList
                        data={this.state.data_list.articles}
                        keyExtractor={(item) => item.title}
                        renderItem={this.renderItem}
                    />
                </View>);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.listReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchDatas: () => {
            dispatch(fetchDataListAction());
        },
        // onSuccessFetch: () => {                        
        //     dispatch(fetchSuccessAction());
        // }, 

    };
}

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeScreen;