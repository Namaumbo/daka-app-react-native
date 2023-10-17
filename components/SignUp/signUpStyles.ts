import { StyleSheet } from "react-native";


const signUp = StyleSheet.create({
    input :{
        borderColor : "grey",
        width:300,
        borderWidth:.5,
        padding:15,
        borderRadius:10,
        alignSelf: "center",
        marginBottom:15
    },
    logo:{
        width:200,
        height:200,
        alignSelf: "center",
        marginBottom:30
    },
    main:{
        marginTop:50
    },
    btn:{
        borderWidth:.5,
        padding:20,
        width:300,
        alignSelf:"center",
        borderRadius:25,
        backgroundColor:'#EE0029',
        marginTop:20

    },
    text:{
        textAlign: "center",
        color:'white',
        fontWeight:'bold',

    },
    checkbox: {
        margin: 8,
      },
      checkWrapper:{
        flexDirection:'row',
        alignItems: 'center',
        marginLeft:25,
        marginTop:15
      }


})

export default signUp;