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

    }
})

export default settings