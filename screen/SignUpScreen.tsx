import React, {useState} from 'react';
import {Text, View, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from 'react-native-elements';
import {StackScreenProps} from '@react-navigation/stack';
import {getAuth, createUserWithEmailAndPassword} from'firebase/auth';

const auth = getAuth();


const SignUpScreen: React.FC<StackScreenProps<any>> = ({navigation}) =>{
    const[value,setValue] = useState({
        email: '',
        password: '',
        error: '',
    });

async function signUp() {
    if(!!value.email || !!value.password){
        setValue({...value, error: 'Email and password must be provided.'})
        return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
    } catch(error: any){
      setValue({...value, error: error.message})
    }
 }    

    return(
        <View style={styles.container}>
            <Text>SignUp screen!</Text>
            {!!value.error && 
            <View style={styles.error}>
                <Text>{value.error}</Text>
            </View>
            }
            <View style={styles.controls}>
                <Input placeholder="Email" 
                  containerStyle={styles.control}
                  value={value.email}
                  onChangeText={(text) => setValue({...value, email: text})}
                  leftIcon={<Icon name="envelope" size ={16}></Icon>}
                  secureTextEntry={true}>
               </Input>
               <Button title="Sign up" buttonStyle={styles.control} onPress={() => (signUp)}></Button>
            </View>
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
    controls:{
        flex:1,
    },
    control: {
        marginTop: 10,
        width: 300,
      },
    error: {
        margin:10,
        padding:10,
        color: '#fff',
        backgroundColor:'#D54826FF',
    }
});

export default SignUpScreen;