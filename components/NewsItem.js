
import React from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet } from 'react-native';
//import moment from "moment";
import { padding, color, fontSize, fontFamily } from "../containers/const"

// onTapItem = item => {
//     console.log('onTapItem', item);
//     navigation.navigate('Article', {
//         article: item,
//     });
// }

const NewsItem = ({ article, onPress }) => {
    const { title, url, source, publishedAt } = article;
    return (
        <TouchableHighlight
            style={styles.container}
            underlayColor={"transparent"}
        // onPress={() => Actions.Article({article, title})}
        >
            <View style={[styles.wrapper]}>

                {
                    article.urlToImage && <Image source={{ uri: article.urlToImage }} style={styles.img} />
                }

                <View style={[styles.info]}>
                    <Text style={[styles.title]}>
                        {title}
                    </Text>

                    <View style={[styles.bottom]}>
                        <Text style={[styles.source]}
                            //  onPress={() => Actions.Source({source, title: source.name})}
                            onPress={onPress}
                        >
                            {source.name}
                        </Text>
                        <Text style={[styles.date]}>
                            {/* {moment(publishedAt).fromNow()} */}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default NewsItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 10
    },

    wrapper: {
        padding: padding,
        flexDirection: "row",
        backgroundColor: "white"
    },

    img: {
        height: 75,
        width: 75,
        backgroundColor: color.light_grey,
        marginRight: padding * 1.5
    },

    info: {
        flex: 1
    },

    title: {
        fontSize: fontSize.regular,
        fontFamily: fontFamily.bold,
        color: color.black,
    },

    bottom: {
        flexDirection: "row",
        flex: 1,
        marginTop: padding * 2,
    },

    source: {
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        color: color.main
    },

    date: {
        fontSize: fontSize.small,
        fontFamily: fontFamily.bold,
        color: color.grey,
        marginLeft: padding
    },
});
