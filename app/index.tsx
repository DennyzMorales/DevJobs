import { Text, View,StyleSheet,Image, TouchableOpacity } from "react-native";
import { Link,router } from 'expo-router';
import { globalStyles } from '../app/styles/globalStyles'; // Importa los estilos
const LogoImage = require('../assets/images/Logo.png');

export default function Index() {
  return (
    <View
      
      style={style.container}
    >
      <Image source={LogoImage} style={style.image} />
      <Link href="/about" style={style.title}>
        DeveloperJobs
      </Link>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={style.button} onPress={() => router.push('/(user)/home')}>
          <Text style={style.buttonText}>Alumnos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => router.push('/(company)/home')}>
          <Text style={style.buttonText}>Empresas</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.subtitle}>¡Encuentra tu primera experiencia laboral!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color:'#fff'
  },
  button: {
    color: '#fff',
    backgroundColor: '#235e68',
    alignItems: 'center',
    fontSize: 20,
    paddingVertical:12,
    paddingHorizontal: 25,
    borderRadius: 8,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
})