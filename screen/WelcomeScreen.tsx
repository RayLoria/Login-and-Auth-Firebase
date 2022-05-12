import {Text, View, StyleSheet} from "react-native";
import React from 'react';
import { StackScreenProps } from "@react-navigation/stack";
import {Button} from "react-native-elements";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>
              Welcome Screen!
            </Text>
            <View style={styles.buttons}>
                <Button title="Sign In" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign In')}/>
                <Button title="Sign Up" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign Up')}/>
            </View>
        </View> 
    );
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifuContent: 'center',
    },
    buttons:{
        flex:1,
    },
    button:{
        marginTop:10,
    },
});

export default WelcomeScreen;