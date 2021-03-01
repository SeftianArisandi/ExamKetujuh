import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { Button, Input, Link, Gap } from '../../components';
import { colors, fonts } from '../../utills';

const Login = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ILLogo/>
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Input label="Email Address" />
            <Gap height={20} />
            <Input label="Password" />
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={30} />
            <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" />
        </View>
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
