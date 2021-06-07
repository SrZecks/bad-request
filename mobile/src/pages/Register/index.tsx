import React, { useState, useEffect } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton, TextInput } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/Feather'

import logoIcon from '../../assets/images/wireframe-badrequest-22.png'
import logoTitle from '../../assets/images/wireframe-badrequest-23.png'

// import api from '../../services/api'
import styles from './styles';

function Register() {
    const { navigate } = useNavigation()

    const handleGoBack = () => { navigate('Landing') }

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    Icon.loadFont();

    return (
        <View style={styles.container}>
            <View style={styles.registerHeader}>
                <RectButton onPress={handleGoBack} style={{ flex: 2 }}>
                    <Icon name="arrow-left" size={32} color="#fff" />
                </RectButton>
                <Text style={[styles.registerHeaderText, { flex: 2 }]}>Cadastro</Text>
                <Text style={[styles.registerHeaderText, { flex: 2 }]} />
            </View>

            <View style={styles.registerBody}>
                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Nome de exibição:</Text>
                    <TextInput
                        style={styles.registerInput}
                        value={nome}
                        onChangeText={text => setNome(text)}
                        placeholder="Nome:"
                        placeholderTextColor="#404040"
                    />

                    <Text style={styles.registerText}>Email:</Text>
                    <TextInput
                        style={styles.registerInput}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        placeholder="Email:"
                        placeholderTextColor="#404040"
                    />

                    <Text style={styles.registerText}>Senha:</Text>
                    <TextInput
                        style={styles.registerInput}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        placeholder="Senha:"
                        placeholderTextColor="#6A6A6A"
                    />

                    <Text style={styles.registerText}>Confirmar senha:</Text>
                    <TextInput
                        style={styles.registerInput}
                        value={confPassword}
                        secureTextEntry={true}
                        onChangeText={text => setConfPassword(text)}
                        placeholder="Confirmar senha:"
                        placeholderTextColor="#6A6A6A"
                    />

                </View>
            </View>

            <View style={styles.registerFooter}>
                <RectButton style={styles.registerFooterButton}>
                    <Text style={styles.registerFooterButtonText}>Registrar-se</Text>
                </RectButton>
            </View>

        </View>
    )
}

export default Register;