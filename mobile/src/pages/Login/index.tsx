import React, { useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton, TextInput } from 'react-native-gesture-handler'

import logoIcon from '../../assets/images/wireframe-badrequest-27.png'
import logoTitle from '../../assets/images/wireframe-badrequest-23.png'
import backgroundBg from '../../assets/images/landingBg.png'

// import api from '../../services/api'
import styles from './styles';

function Login() {
    const { navigate } = useNavigation()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode='stretch'
                source={backgroundBg}
                style={{ width: '100%', height: '100%', position: 'absolute' }}
            />
            
            <View style={styles.logoContainer}>
                <Image source={logoIcon} style={styles.logo} />
                <Image source={logoTitle} style={styles.logoTitle} />
            </View>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Email:</Text>
                <TextInput
                    style={styles.loginInput}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder="Email:"
                    placeholderTextColor="#404040"
                />

                <Text style={styles.loginText}>Senha:</Text>
                <TextInput
                    style={styles.loginInput}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    placeholder="Senha:"
                    placeholderTextColor="#6A6A6A"
                />

                <RectButton style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </RectButton>
            </View>

            <View style={{ flex: 1 }} />

        </View>
    )
}

export default Login;