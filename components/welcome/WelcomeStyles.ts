import { StyleSheet } from 'react-native'

const welcomeStyles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 26,

    },
    textSub: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center'
    },
    textCon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    container: {
        flex: 1,

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    btn: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 15,
        marginTop: 30,
        borderRadius: 22,
        width: '60%',
    }

})
export default welcomeStyles