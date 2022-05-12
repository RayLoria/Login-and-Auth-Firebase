import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screen/WelcomeScreen';
import SignInScreen from '../screen/SignInScreen';
import SignUpScreen from '../screen/SignUpScreen';


const Stack = createStackNavigator();

export default function AuthStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
                <Stack.Screen name="Sign In" component={SignInScreen}></Stack.Screen>
                <Stack.Screen name="Sign Up" component={SignUpScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
