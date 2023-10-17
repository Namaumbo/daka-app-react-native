import { StyleSheet } from "react-native";

const newsStyle = StyleSheet.create({
    img: {
        width: 350,
        height: 200,
        borderWidth: 1
    },
    title: {
        fontWeight: "bold",
        fontSize:16
    },
    date: {
        color: "grey"
    },
    desc: {
        padding: 4,
        width: 310,
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: 'blue',
     
    },
    cover:{
        marginRight: 10,
        zIndex:999
    },
    shareBtn:{
        borderWidth:1,
        padding:5,
        textAlign: 'center',
        backgroundColor:'grey',
        color: 'white',
        borderColor:'grey',
        borderRadius:7,
        position: 'absolute',
        zIndex:999,
        alignSelf: 'flex-end',
        margin:10,
    }
})

export default newsStyle