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
    },
    logo: {
        flex: 2,
        width: '100%',
        resizeMode: 'contain',
        // backgroundColor: '#fafafa',
    },
    logoTitle: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
    },
    loginContainer: {
        flex: 2,
        width: '70%',
        alignItems: 'center'
    },
    loginContainerText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: 'Archivo_400Regular',
    },
    loginButton: {
        width: '90%',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 40,
        marginVertical: 20,
        backgroundColor: "#fff",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 25
    },
    loginButtonText: {
        fontFamily: 'Archivo_400Regular',
    }
})

export default styles;