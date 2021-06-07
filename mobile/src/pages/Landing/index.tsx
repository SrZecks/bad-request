import React, { useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import logoIcon from '../../assets/images/wireframe-badrequest-27.png'
import logoTitle from '../../assets/images/wireframe-badrequest-23.png'
import backgroundBg from '../../assets/images/landingBg.png'

// import api from '../../services/api'
import styles from './styles';

function Landing() {
    const { navigate } = useNavigation()

    const handleNavigateLogin = () => { navigate('Login') }
    const handleNavigateRegister = () => { navigate('Register') }

    return (
        
        <View style={styles.container}>
            <ImageBackground
                resizeMode='stretch'
                source={backgroundBg}
                style={{width:'100%',height: '100%', position: 'absolute'}}
            />
            <View style={{flex: 1}}/>

            <View style={styles.logoContainer}>
                <Image source={logoIcon} style={styles.logo} />
                <Image source={logoTitle} style={styles.logoTitle} />
            </View>

            <View style={styles.loginContainer}>
                <Text style={styles.loginContainerText}>Já tem uma conta?</Text>

                <RectButton style={styles.loginButton} onPress={handleNavigateLogin} >
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </RectButton>

                <View style={{ width: '100%', height: 1, backgroundColor: '#fff' }} />

                <RectButton style={styles.loginButton} onPress={handleNavigateRegister}>
                    <Text style={styles.loginButtonText}>Registrar-se</Text>
                </RectButton>
            </View>

        </View>
    );
}

export default Landing