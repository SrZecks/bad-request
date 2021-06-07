import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101051',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flex: 1,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    logo: {
        flex: 2,
        width: '100%',
        resizeMode: 'contain',
    },
    logoTitle: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
    },
    loginContainer: {
        flex: 1,
        width: '80%',
        padding: 20,
        alignItems: 'flex-start',
        backgroundColor: '#fafafa',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 16
    },
    loginText: {
        color: "#000",
        fontSize: 14,
        fontFamily: 'Archivo_400Regular',
        marginHorizontal: 6
    },
    loginInput: {
        backgroundColor: '#E6E6E6',
        color: '#000',
        width: '100%',
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderRadius: 16,
        marginVertical: 8
    },
    loginButton: {
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 40,
        marginVertical: 20,
        backgroundColor: "#FF7F1F",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 25
    },
    loginButtonText: {
        color: '#fff'
    }
})

export default styles;