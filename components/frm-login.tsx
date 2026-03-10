import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {useState}  from 'react';

export default function login(){
    const [usuario, setUsuario] =useState(" ");
    const [senha, setSenha] = useState(" ");
    const validaLogin = () =>{
        if(usuario == "admin"|| senha == "admin"){
            alert("Login efetuado com sucesso")
        }else{
            alert("Usuario ou senha invalidos")

        }
        }
    
    return(
        <View style={styles.Container}>
            <Text style={styles.title}>Trivert Rastreamento</Text>
            <TextInput 
                style={styles.input} 
                value={usuario}
                onChangeText={setUsuario}
            />
            <TextInput 
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                />
            
            <TouchableOpacity style={styles.button} onPress={validaLogin}>
                <Text style={styles.title}>login</Text>
            </TouchableOpacity>
        </View>
 );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: 'orange',
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
        
       
    }
})

