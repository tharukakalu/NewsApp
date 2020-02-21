import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//import { Ionicons } from '@expo/vector-icons';

// const TabIcon = (props) => (
//     <Ionicons
//         name={'md-home'}
//         size={35}
//         color={props.focused ? 'grey' : 'darkgrey'}
//     />
// )

export default class CustomNews extends React.Component {

    // static navigationOptions = {
    //     tabBarIcon: TabIcon
    // };

    render() {
        return (
            <View style={styles.container}>
                <Text>Screen 3</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});