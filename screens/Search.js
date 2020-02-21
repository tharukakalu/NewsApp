import React, { Component } from 'react';
import Button from 'react-native-button';
import { connect } from 'react-redux';
//Actions ?
import { fetchSuccessAction, fetchFailedAction, fetchNewsSuccessAction, fetchNewsCatgoryAction, fetchDataListAction } from '../actions';

import {
    Text, View, Image, Alert, Platform, TextInput, FlatList, Dimensions
} from 'react-native';
import NewsItem from "../components/NewsItem"
import { SearchBar } from 'react-native-elements';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.select({ ios: IS_IPHONE_X ? 44 : 20, android: 24 });

class Serach extends Component {
    constructor(props) {
        super(props);
    }

    // componentWillMount() {
    //     console.log('componentWillMount');
    //     this.props.onFetchNews('asc');
    //     console.log('ssssssffff', this.props.listCatogory);
    // }

    componentDidMount() {
        console.log('componentDidMount');
        this.props.onFetchNews('asc');
        console.log('ssssssffff', this.props.listCatogory);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
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
        console.log('ssrrreferessss', this.props.listCatogory.articles);

        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                {/* <View style={{ height: STATUS_BAR_HEIGHT }} /> */}
                <SearchBar
                    containerStyle={{ backgroundColor: "#ffffff", paddingTop: 4, paddingBottom: 4 }}
                    inputContainerStyle={{ backgroundColor: "#eee" }}
                    placeholder="Type Here..."
                    // onChangeText={handleQueryChange}
                    // value={searchText}
                    showCancel={true}
                    // onCancel={() => props.navigation.goBack()}
                    autoFocus={true}
                    platform={Platform.OS} />


                <FlatList
                    data={this.props.listCatogory.articles}
                    keyExtractor={(item) => item.title}
                    renderItem={this.renderItem}
                />

            </View >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listCatogory: state.catogoryNewsReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchNews: () => {
            console.log('hii');
            dispatch(fetchNewsCatgoryAction('apple'));
        },
        // onSuccessFetch: () => {
        //     dispatch(fetchNewsSuccessAction());
        // },

    };
}

const SerachScreen = connect(mapStateToProps, mapDispatchToProps)(Serach);
export default SerachScreen;