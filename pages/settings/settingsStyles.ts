import { StyleSheet } from "react-native";

const settings= StyleSheet.create({

    wrapper:{
        borderRadius:50,
        
    },
    settingIconText: {
        flexDirection:'row',
        width:190,
    
    },
    text:{
       fontSize:16,
       color:'black',
    },
    icon:{
        width:35,
        height:35,
        justifyContent: 'center',
        textAlign: 'center',
    },
    cover:{
        borderRadius: 2, 
        flexDirection:'row', 
        justifyContent:'space-between',
        borderBottomWidth:.5,
        padding:15,
        borderColor:'#ebe8e8',
        backgroundColor:'#fafafa'
        
    },

    main:{
    // paddingLeft:15 //change this later t
    },
    btn:{
        marginTop:20,
        borderWidth:1,
        borderColor: '#ED0F35',
        padding:15,
        width:'80%',
        borderRadius:5,
        backgroundColor:'#EE0029',
        
    },
    signOut:{
        textAlign: 'center',
        color:'white',
        fontWeight:'bold',

    },

    btnCover:{
        alignItems: 'center',
    },
    personalMain:{
        padding:10,
        margin:10,
        borderWidth:0.5,
        borderColor:'#ebe8e8',
        backgroundColor:'#fafafa',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    user:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    accountName:{
        fontSize:20,
        fontWeight:'bold',

    }
})

export default settings