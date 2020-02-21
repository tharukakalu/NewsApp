
import React, { Component } from "react";
import { ActivityIndicator } from 'react-native';

import { WebView } from 'react-native-webview';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsArticle: '',
        }
    }

    componentWillMount() {
        const { navigation } = this.props;
        const article = navigation.getParam("article", '');
        console.log('componentWillMount', navigation.getParam("article", 0));
        this.setState({
            newsArticle: article
        });

        console.log('newsArticle', this.state.newsArticle.url);
    }

    render() {
        return (
            <WebView source={{ uri: this.state.newsArticle.url }}
                startInLoadingState={true}
                onError={() => alert("Failed to load article.")}
                renderLoading={() => <ActivityIndicator style={{ paddingVertical: 8 }} />} />
        );
    };

}

Article.navigationOptions = ({ navigation }) => {
    return {
        title: `${navigation.getParam('title')}`,
        headerRight: null
    }
};