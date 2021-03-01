import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILLogo, ILGetStarted } from '../../assets';
import { Button, Gap } from '../../components';
import { colors, fonts } from '../../utills';

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo />
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title="Get Started" onPress={() => navigation.navigate('Register')} />
                <Gap height={16} />
                <Button title="Sign In" type="secondary" onPress={() => navigation.replace('Login')} />
            </View>
        </ImageBackground>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        padding: 40,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 28,
        fontFamily: fonts.primary[600],
        color: colors.white,
        marginTop: 91
    }
})
