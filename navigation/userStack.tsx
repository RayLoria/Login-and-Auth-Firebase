import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';


const Stack = createStackNavigator();

export default function UserStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
