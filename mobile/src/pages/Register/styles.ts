import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101051',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerHeader: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        padding: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0A0A33',
    },
    registerHeaderText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Archivo_400Regular',
    },
    registerBody: {
        flex: 6,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#030314',
    },
    registerFooter: {
        flex: 4,
        width: '100%',
        backgroundColor: '#030314'
    },
    registerContainer: {
        flex: 1,
        width: '80%',
        height: 'auto',
        padding: 20,
        paddingBottom: 0,
        marginVertical: '10%',
        alignItems: 'flex-start',
        backgroundColor: '#fafafa',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 16
    },
    registerText: {
        color: "#000",
        fontSize: 14,
        marginHorizontal: 6,
        fontFamily: 'Archivo_400Regular',
    },
    registerInput: {
        backgroundColor: '#E6E6E6',
        color: '#000',
        width: '100%',
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderRadius: 16,
        marginVertical: 8,
        fontFamily: 'Archivo_400Regular',
    },
    registerFooterButton: {
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 40,
        marginVertical: 20,
        backgroundColor: "#29ABE2",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 25
    },
    registerFooterButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_400Regular',
    }
})

export default styles;