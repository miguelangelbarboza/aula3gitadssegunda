import { 
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    
} from 'react-native';

export default function login(){
    return(
        <View style={styles.Container}>
            <Text style={styles.title}>Trivert Rastreamento</Text>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>login</Text>
            </TouchableOpacity>
        </View>
 );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center'
       },
    title:{
        fontFamily:'arial',
        fontSize: 24,
        marginBottom: 20,
        justifyContent:'center'
        },
       input: {
        width: '90%',
        height: 40,
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginBottom:24,

       },
       button:{
        width: '90%',
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        marginBottom:24,
        paddingTop:20,
        borderRadius:20,
        cursor:'pointer',
        
       
    },
})

