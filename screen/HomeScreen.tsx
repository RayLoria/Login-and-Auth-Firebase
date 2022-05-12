import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button} from 'react-native-elements';
import { getAuth, signOut} from 'firebase/auth';

const auth = getAuth();

export default function HomeScreen(){
    const {user} = useAuthentication();

    return(
        <View style={styles.container}>
            <Text>
                Welcome {user?.email}
            </Text>
            <Button title="Sign Out" style={styles.button}
            onPress = {() =>signOut(auth)}>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifuContent: 'center',
    },
    button:{
        marginTop: 10,
    },
});