import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ILLogo } from '../../assets';
import { Button, Input, Link, Gap, Loading } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, useForm } from '../../utills';

const Login = ({navigation}) => {
    const [form, setForm] = useForm({email: '', password: ''});
    const [loading, setLoading] = useState(false);

    const login = () => {
        setLoading(true);
        Fire.auth()
            .signInWithEmailAndPassword(form.email, form.password)
            .then(response => {
                setLoading(false);
                console.log(response);
                Fire.database()
                    .ref(`users/${response.user.uid}/`)
                    .once('value')
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                showMessage({
                    message: error.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                })
            });
    };

    return (
        <>
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ILLogo/>
                    <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
                    <Input 
                        label="Email Address" 
                        value={form.email} 
                        onChangeText={(value) => setForm('email', value)}    
                    />
                    <Gap height={20} />
                    <Input 
                        label="Password" 
                        value={form.password} 
                        onChangeText={(value) => setForm('password', value)}
                        secureTextEntry    
                    />
                    <Gap height={10} />
                    <Link title="Forgot My Password" size={12} />
                    <Gap height={25} />
                    <Button title="Sign In" onPress={login} />
                    <Gap height={25} />
                    <Link title="Create New Account" size={16} align="center" />
                </ScrollView>
            </View>
            {loading && <Loading/>}
        </>
    )
}

export default Login;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 40,
        backgroundColor: colors.white
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginVertical: 40,
        maxWidth: 153
    }
})
