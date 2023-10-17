
import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:100
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 50
    },
    emailInput: {
        borderWidth: .5,
        padding: 10,
        width: 270,
        marginBottom: 20,
        borderRadius: 7,

    },
    passwordInput: {
        borderWidth: 1,
        padding: 10,
        width: 270,
        borderRadius: 7

    },
    forgotPasswordText: {
        width: '70%',
        textAlign: 'right',
        marginBottom: 15,
        marginTop: 15,

    },
    forgotText: {
        textAlign: 'right',
        color: '#EE0029'
    },
    loginBtn: {
        backgroundColor: '#EE0029',
        borderWidth: 1,
        borderColor: '#ED0F35',
        width: 270,
        marginTop: 1,
        padding: 20,
        borderRadius: 25
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: "bold"
    },
    sinUpText: {
        padding: 20
    },
    signUp: {
        color: '#EE0029'
    }

})

export default styles