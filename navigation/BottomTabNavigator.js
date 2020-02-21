import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenOne from '../screens/Home';
import ScreenTwo from '../screens/Profile';
import ScreenThree from '../screens/Search'
import ArticleScreen from '../screens/Article'

//import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';  //MaterialCommunityIcons
//Nav Header Styles
let font = Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto';
let size = Platform.OS === 'ios' ? 24 : 25;
let titleColor = '#363434';
let iconColor = '#808689';
let headerStyle = { backgroundColor: '#fff' };
let headerTitleStyle = { fontWeight: 'bold', fontSize: 17, fontFamily: font, color: titleColor };

const HomeStack = createStackNavigator(
    {
        Home: ScreenOne,
        Article: ArticleScreen,
        // Search: SearchScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle, headerTitleStyle,
            // headerRight: (<SearchBtn onPress={() => navigation.navigate('Search')}/>)
        })
    }
);


const NewsStack = createStackNavigator(
    {
        News: ScreenThree,
        Article: ArticleScreen,
        // Search: SearchScreen
    },
    {
        initialRouteName: 'News',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle, headerTitleStyle,
            // headerRight: (<SearchBtn onPress={() => navigation.navigate('Search')}/>)
        })
    }
);

const BottomTabNavigator = createBottomTabNavigator({
    One: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" color={tintColor} size={25} />
            )
        }
    },
    Two: {
        screen: NewsStack,
        navigationOptions: {
            tabBarLabel: 'News',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="newspaper-o" color={tintColor} size={25} />
            )
        }
    },
    Three: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="product-hunt" color={tintColor} size={25} />
            )
        }
    },
}, {
        tabBarOptions: {
            showLabel: true
        }
    });

export default BottomTabNavigator;