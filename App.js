import{SafeAreaView, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function App(){

  return(
    <SafeAreaView style={style.container}>
  <Text style={style.Titulo}> Cidades Para Conhecer. </Text>
  <Text style={style.Frase}> Descubra o Inusitado: Cidades para Explorar </Text>

  <ScrollView>
  <Text style={style.tituloPais}>Paris - França</Text>
  <Image style={style.img} source={require('./assets/eiffel-tower-3349075_640.jpg')} />

  <Text style={style.tituloPais}>New York</Text>
  <Image style={style.img} source={require('./assets/new-york-7577186_640.jpg')} />

   <Text style={style.tituloPais}>Japão - Tokyo</Text>
  <Image style={style.img} source={require('./assets/tokyo-tower-825196_640.jpg')} />

   <Text style={style.tituloPais}>Istanbul</Text>
  <Image style={style.img} source={require('./assets/galata-4043037_640.jpg')} />

   <Text style={style.tituloPais}>Roma</Text>
  <Image style={style.img} source={require('./assets/tiber-river-4529605_640.jpg')} />

 </ScrollView>
  </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center' , 
    backgroundColor: '#ADD8E6' ,
    justifyContent: 'center' ,
    
  },
  Titulo:{
    fontSize: 30 ,
    color: 'white',
    margin:60

  },
  Frase: {
    fontSize: 20,
    
  },
    img: {
      width:'350',
      height:'250'
    }
  
})