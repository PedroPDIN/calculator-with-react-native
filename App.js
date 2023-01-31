import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import * as Components from './components';

let states = {
  valorTela: '',
  resultado: 0,
  operado: false,
  ponto: false,
}

export default function App() {
  const [vTela, setVTela] = useState(states.valorTela);
  const [vRes, setVRes] = useState(states.resultado);

  const addDigito = (d) => {
    if (d == '+' || d == '-' || d == '/' || d == '*') {
      states.ponto = false;
    }

    if (d == '.' && !states.ponto) {
      states.ponto = true;
      states.operado = false;
    }else if (d == '.' && states.ponto) {
      return
    }

    if ((d == '+' || d == '-' || d == '/' || d == '*') && states.operado) {
      states.valorTela = states.resultado;
      states.resultado = 0;
    };

    states.valorTela = states.valorTela + d;
    setVTela(states.valorTela);
    setVRes(states.resultado);
    states.operado = false;
  }

  const limparTela = () => {
    states = {
      valorTela: '',
      resultado: 0,
      operado: false,
      ponto: false,
    }

    setVTela(states.valorTela);
    setVRes(states.resultado);
  };

  const opera = (d) => {
    if (d == "AC") {
      limparTela();
      return;
    };

    if (d == "BS") {
      const currentValue = vTela.slice(0, vTela.length - 1);
      states.valorTela = currentValue;
      setVTela(currentValue);
      return;
    };

    try { // so vai cair nessa condição, pois sobrou apenas o funcionalidade de igual "=".
      states.resultado = eval(states.valorTela);
      states.operado = true;
      setVRes(states.resultado);
    } catch { 
      states.operado = true;
      alert("caro usuário(a), essa formula esta errada, se continuar assim possivelmente vou ter que acionar a Policia Federal.!!!")
    }
  } 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      
      <Text style={ styles.title }>Melhor Calculadora mais precisa do mundo plano!!!</Text>

      <Components.Display valor={vTela} resultado={vRes} />

      <View style={ styles.btns }>
        <Components.btnsCalc label="AC" ac onClick={ () => { opera("AC") } } />
        <Components.btnsCalc label="(" onClick={ () => { addDigito("(") } } />
        <Components.btnsCalc label=")" onClick={ () => { addDigito(")") } }/>
        <Components.btnsCalc label="<-" bs onClick={ () => { opera("BS") } } />
        <Components.btnsCalc label="7" onClick={ () => { addDigito("7") } }/>
        <Components.btnsCalc label="8" onClick={ () => { addDigito("8") } }/>
        <Components.btnsCalc label="9" onClick={ () => { addDigito("9") } }/>
        <Components.btnsCalc label="/" operacao onClick={ () => { addDigito("/") } }/>
        <Components.btnsCalc label="4" onClick={ () => { addDigito("4") } }/>
        <Components.btnsCalc label="5" onClick={ () => { addDigito("5") } }/>
        <Components.btnsCalc label="6" onClick={ () => { addDigito("6") } }/>
        <Components.btnsCalc label="*" operacao onClick={ () => { addDigito("*") } }/>
        <Components.btnsCalc label="1" onClick={ () => { addDigito("1") } }/>
        <Components.btnsCalc label="2" onClick={ () => { addDigito("2") } }/>
        <Components.btnsCalc label="3" onClick={ () => { addDigito("3") } }/>
        <Components.btnsCalc label="-" operacao onClick={ () => { addDigito("-") } }/>
        <Components.btnsCalc label="0" onClick={ () => { addDigito("0") } }/>
        <Components.btnsCalc label="." onClick={ () => { addDigito(".") } }/>
        <Components.btnsCalc label="," onClick={ () => { addDigito(",") } }/>
        <Components.btnsCalc label="+" operacao onClick={ () => { addDigito("+") } }/>
        <Components.btnsCalc label="=" igual total onClick={ () => { opera("=") } }/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
  },

  btns: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
