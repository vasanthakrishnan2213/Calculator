import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [inputone,setinputone] = useState("")
  const [inputtwo,setinputtwo] = useState("")
  const [inputthree,setinputthree] = useState("")
  const [inputfour,setinputfour] = useState("")
  const [inputfive,setinputfive] = useState("")
  const [inputsix,setinputsix] = useState("")
  const [inputseven,setinputseven] = useState("")
  const [inputeight,setinputeight] = useState("")
  const [inputnine,setinputnine] = useState("")
  const [operatorone,setoperatorone] = useState("")
  const [operatortwo,setoperatortwo] = useState("")
  const [operatorthree,setoperatorthree] = useState("")
  const [operatorfour,setoperatorfour] = useState("")
  const [operatorfive,setoperatorfive] = useState("")
  const [operatorsix,setoperatorsix] = useState("")
  const [operatorseven,setoperatorseven] = useState("")
  const [operatoreight,setoperatoreight] = useState("")
  const [ones,setones] = useState("")
  const [twos,settwos] = useState("")
  const [threes,setthrees] = useState("")
  const [fours,setfours] = useState("")
  const [fives,setfives] = useState("")
  const [sixs,setsixs] = useState("")
  const [sevens,setsevens] = useState("")
  const [eights,seteights] = useState("")
  const [output,setoutput] = useState("")
  const [font,setfont] = useState({
    fontSize: 'xx-large'
  })
  
  
 
  function one(){
      
      if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setinputnine(inputnine+"1")
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setinputeight(inputeight+"1")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setinputseven(inputseven+"1")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setinputsix(inputsix+"1")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setinputfive(inputfive+"1")
      }
      else{
      if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setinputfour(inputfour+"1")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setinputthree(inputthree+"1")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setinputtwo(inputtwo+"1")
        
      }
      else{
        setinputone(inputone+"1")
      }
      }
      }
      }
      }
      }
      }
      }
    }
  

  function two(){

  if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
    {
      setinputnine(inputnine+"2")
    }
    else{
      if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
    {
      setinputeight(inputeight+"2")
    }
    else{
      if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
    {
      setinputseven(inputseven+"2")
    }
    else{
      if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
    {
      setinputsix(inputsix+"2")
    }
    else{
      if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
    {
      setinputfive(inputfive+"2")
    }
    else{
    if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
    {
      setinputfour(inputfour+"2")
    }
    else{
      if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
    {
      setinputthree(inputthree+"2")
    }
    else{
      if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
    {
      setinputtwo(inputtwo+"2")
    }
    else{
      setinputone(inputone+"2")
    }
    }
    }
    }
    }
    }
    }
    }
  }
  

  function three(){

    if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setinputnine(inputnine+"1")
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setinputeight(inputeight+"3")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setinputseven(inputseven+"3")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setinputsix(inputsix+"3")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setinputfive(inputfive+"3")
      }
      else{
      if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setinputfour(inputfour+"3")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setinputthree(inputthree+"3")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setinputtwo(inputtwo+"3")
      }
      else{
        setinputone(inputone+"3")
      }
      }
      }
      }
      }
      }
      }
     }

  }

  function four(){

    if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setinputnine(inputnine+"4")
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setinputeight(inputeight+"4")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setinputseven(inputseven+"4")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setinputsix(inputsix+"4")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setinputfive(inputfive+"4")
      }
      else{
      if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setinputfour(inputfour+"4")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setinputthree(inputthree+"4")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setinputtwo(inputtwo+"4")
      }
      else{
        setinputone(inputone+"4")
      }
      }
      }
      }
      }
      }
      }
      }
    }

  function five(){

    if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setinputnine(inputnine+"5")
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setinputeight(inputeight+"1")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setinputseven(inputseven+"5")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setinputsix(inputsix+"5")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setinputfive(inputfive+"5")
      }
      else{
      if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setinputfour(inputfour+"5")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setinputthree(inputthree+"5")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setinputtwo(inputtwo+"5")
      }
      else{
        setinputone(inputone+"5")
      }
      }
      }
      }
      }
      }
     }
    }

  }

  function six(){

   if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setinputnine(inputnine+"6")
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setinputeight(inputeight+"6")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setinputseven(inputseven+"6")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setinputsix(inputsix+"6")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setinputfive(inputfive+"6")
      }
      else{
      if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setinputfour(inputfour+"6")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setinputthree(inputthree+"6")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setinputtwo(inputtwo+"6")
      }
      else{
        setinputone(inputone+"6")
      }
      }
      }
      }
      }
      }
      }
      }
  }

  function seven(){

   if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setinputnine(inputnine+"1")
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setinputeight(inputeight+"7")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setinputseven(inputseven+"7")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setinputsix(inputsix+"7")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setinputfive(inputfive+"7")
      }
      else{
      if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setinputfour(inputfour+"7")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setinputthree(inputthree+"7")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setinputtwo(inputtwo+"7")
      }
      else{
        setinputone(inputone+"7")
      }
      }
      }
      }
      }
      }
      }
    }

  }

  function eight() {

    if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setinputnine(inputnine+"8")
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setinputeight(inputeight+"8")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setinputseven(inputseven+"8")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setinputsix(inputsix+"8")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setinputfive(inputfive+"8")
      }
      else{
      if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setinputfour(inputfour+"8")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setinputthree(inputthree+"8")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setinputtwo(inputtwo+"8")
      }
      else{
        setinputone(inputone+"8")
      }
      }
      }
      }
      }
      }
      }
      }

  }

  function nine(){

    if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setinputnine(inputnine+"9")
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setinputeight(inputeight+"9")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setinputseven(inputseven+"9")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setinputsix(inputsix+"9")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setinputfive(inputfive+"9")
      }
      else{
      if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setinputfour(inputfour+"9")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setinputthree(inputthree+"9")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setinputtwo(inputtwo+"9")
      }
      else{
        setinputone(inputone+"9")
      }
      }
      }
      }
      }
      }
      }
    }

  }

  function zero(){

    if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setinputnine(inputnine+"0")
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setinputeight(inputeight+"0")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setinputseven(inputseven+"0")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setinputsix(inputsix+"0")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setinputfive(inputfive+"0")
      }
      else{
      if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setinputfour(inputfour+"0")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setinputthree(inputthree+"0")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setinputtwo(inputtwo+"0")
      }
      else{
        setinputone(inputone+"0")
      }
      }
      }
      }
      }
      }
      }
      }

  }

  function dot(){

    if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setinputnine(inputnine+".")
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setinputeight(inputeight+".")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setinputseven(inputseven+".")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setinputsix(inputsix+".")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setinputfive(inputfive+".")
      }
      else{
      if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setinputfour(inputfour+".")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setinputthree(inputthree+".")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setinputtwo(inputtwo+".")
      }
      else{
        setinputone(inputone+".")
      }
      }
      }
      }
      }
      }
      }
     }

  }

  function plus(){

    if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setoperatoreight(operatoreight)
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setoperatoreight(operatoreight+"+")
        seteights("+")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setoperatorseven(operatorseven+"+")
        setsevens("+")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setoperatorsix(operatorsix+"+")
        setsixs("+")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setoperatorfive(operatorfive+"+")
        setfives("+")
      }
      else{ 
        if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setoperatorfour(operatorfour+"+")
        setfours("+")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setoperatorthree(operatorthree+"+")
        setthrees("+")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setoperatortwo(operatortwo+"+")
        settwos("+")
      }
      else{
        setoperatorone(operatorone+"+")
        setones("+")
      }
      }
      }
      }
      }
      }
      }
      }
    }
  
  


  function minus(){

    if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setoperatoreight(operatoreight)
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setoperatoreight(operatoreight+"-")
        seteights("-")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setoperatorseven(operatorseven+"-")
        setsevens("-")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setoperatorsix(operatorsix+"-")
        setsixs("-")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setoperatorfive(operatorfive+"-")
        setfives("-")
      }
      else{ 
        if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setoperatorfour(operatorfour+"-")
        setfours("-")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setoperatorthree(operatorthree+"-")
        setthrees("-")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setoperatortwo(operatortwo+"-")
        settwos("-")
      }
      else{
        setoperatorone(operatorone+"-")
        setones("-")
      }
      }
      }
      }
      }
      }
      }
      }
  }

  function multiply(){

    if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setoperatoreight(operatoreight)
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setoperatoreight(operatoreight+"×")
        seteights("*")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setoperatorseven(operatorseven+"×")
        setsevens("*")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setoperatorsix(operatorsix+"×")
        setsixs("*")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setoperatorfive(operatorfive+"×")
        setfives("*")
      }
      else{ 
        if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setoperatorfour(operatorfour+"×")
        setfours("*")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setoperatorthree(operatorthree+"×")
        setthrees("*")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setoperatortwo(operatortwo+"×")
        settwos("*")
      }
      else{
        setoperatorone(operatorone+"×")
        setones("*")
      }
      }
      }
      }
      }
      }
      }
      }
  }

  function divide(){
    
    if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0)
      {
        setoperatoreight(operatoreight)
      }
      else{
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0)
      {
        setoperatoreight(operatoreight+"÷")
        seteights("/")
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0)
      {
        setoperatorseven(operatorseven+"÷")
        setsevens("/")
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0)
      {
        setoperatorsix(operatorsix+"÷")
        setsixs("/")
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0)
      {
        setoperatorfive(operatorfive+"÷")
        setfives("/")
      }
      else{ 
        if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0)
      {
        setoperatorfour(operatorfour+"÷")
        setfours("/")
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0)
      {
        setoperatorthree(operatorthree+"÷")
        setthrees("/")
      }
      else{
        if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0)
      {
        setoperatortwo(operatortwo+"÷")
        settwos("/")
      }
      else{
        setoperatorone(operatorone+"÷")
        setones("/")
      }
      }
      }
      }
      }
      }
      }
      }
  }

  function del(){

    setfont({
      fontSize: 'xx-large',
      color: 'white',
      transition: '0.25s'
    }
    )

    if(inputnine.indexOf("0") >= 0 ||inputnine.indexOf("1") >= 0 ||inputnine.indexOf("2") >= 0 ||inputnine.indexOf("3") >= 0 ||inputnine.indexOf("4") >= 0 ||inputnine.indexOf("5") >= 0 ||inputnine.indexOf("6") >= 0 ||inputnine.indexOf("7") >= 0 ||inputnine.indexOf("8") >= 0  ||inputnine.indexOf("9") >= 0 ||inputnine.indexOf(".") >= 0 )
    {
      setinputnine(inputnine.slice(0,-1))
    }
    else{
      if(operatoreight.indexOf("+") == 0 || operatoreight.indexOf("-") == 0 || operatoreight.indexOf("×") == 0 || operatoreight.indexOf("÷") == 0) 
      {
        setoperatoreight(operatoreight.slice(0,-1))
      }
      else{
        if(inputeight.indexOf("0") >= 0 ||inputeight.indexOf("1") >= 0 ||inputeight.indexOf("2") >= 0 ||inputeight.indexOf("3") >= 0 ||inputeight.indexOf("4") >= 0 ||inputeight.indexOf("5") >= 0 ||inputeight.indexOf("6") >= 0 ||inputeight.indexOf("7") >= 0 ||inputeight.indexOf("8") >= 0  ||inputeight.indexOf("9") >= 0 ||inputeight.indexOf(".") >= 0 )
      {
        setinputeight(inputeight.slice(0,-1))
      }
      else{ 
        if(operatorseven.indexOf("+") == 0 || operatorseven.indexOf("-") == 0 || operatorseven.indexOf("×") == 0 || operatorseven.indexOf("÷") == 0) 
      {
        setoperatorseven(operatorseven.slice(0,-1))
      }
      else{
        if(inputseven.indexOf("0") >= 0 ||inputseven.indexOf("1") >= 0 ||inputseven.indexOf("2") >= 0 ||inputseven.indexOf("3") >= 0 ||inputseven.indexOf("4") >= 0 ||inputseven.indexOf("5") >= 0 ||inputseven.indexOf("6") >= 0 ||inputseven.indexOf("7") >= 0 ||inputseven.indexOf("8") >= 0  ||inputseven.indexOf("9") >= 0 ||inputseven.indexOf(".") >= 0 )
      {
        setinputseven(inputseven.slice(0,-1))
      }
      else{
        if(operatorsix.indexOf("+") == 0 || operatorsix.indexOf("-") == 0 || operatorsix.indexOf("×") == 0 || operatorsix.indexOf("÷") == 0) 
      {
        setoperatorsix(operatorsix.slice(0,-1))
      }
      else{
        if(inputsix.indexOf("0") >= 0 ||inputsix.indexOf("1") >= 0 ||inputsix.indexOf("2") >= 0 ||inputsix.indexOf("3") >= 0 ||inputsix.indexOf("4") >= 0 ||inputsix.indexOf("5") >= 0 ||inputsix.indexOf("6") >= 0 ||inputsix.indexOf("7") >= 0 ||inputsix.indexOf("8") >= 0  ||inputsix.indexOf("9") >= 0 ||inputsix.indexOf(".") >= 0 )
      {
        setinputsix(inputsix.slice(0,-1))
      }
      else{
        if(operatorfive.indexOf("+") == 0 || operatorfive.indexOf("-") == 0 || operatorfive.indexOf("×") == 0 || operatorfive.indexOf("÷") == 0) 
      {
        setoperatorfive(operatorfive.slice(0,-1))
      }
      else{
        if(inputfive.indexOf("0") >= 0 ||inputfive.indexOf("1") >= 0 ||inputfive.indexOf("2") >= 0 ||inputfive.indexOf("3") >= 0 ||inputfive.indexOf("4") >= 0 ||inputfive.indexOf("5") >= 0 ||inputfive.indexOf("6") >= 0 ||inputfive.indexOf("7") >= 0 ||inputfive.indexOf("8") >= 0  ||inputfive.indexOf("9") >= 0 ||inputfive.indexOf(".") >= 0 )
      {
        setinputfive(inputfive.slice(0,-1))
      }
      else{
        if(operatorfour.indexOf("+") == 0 || operatorfour.indexOf("-") == 0 || operatorfour.indexOf("×") == 0 || operatorfour.indexOf("÷") == 0) 
      {
        setoperatorfour(operatorfour.slice(0,-1))
      }
      else{
        if(inputfour.indexOf("0") >= 0 ||inputfour.indexOf("1") >= 0 ||inputfour.indexOf("2") >= 0 ||inputfour.indexOf("3") >= 0 ||inputfour.indexOf("4") >= 0 ||inputfour.indexOf("5") >= 0 ||inputfour.indexOf("6") >= 0 ||inputfour.indexOf("7") >= 0 ||inputfour.indexOf("8") >= 0  ||inputfour.indexOf("9") >= 0 ||inputfour.indexOf(".") >= 0 )
      {
        setinputfour(inputfour.slice(0,-1))
      }
      else{
        if(operatorthree.indexOf("+") == 0 || operatorthree.indexOf("-") == 0 || operatorthree.indexOf("×") == 0 || operatorthree.indexOf("÷") == 0) 
      {
        setoperatorthree(operatorthree.slice(0,-1))
      }
      else{
        if(inputthree.indexOf("0") >= 0 ||inputthree.indexOf("1") >= 0 ||inputthree.indexOf("2") >= 0 ||inputthree.indexOf("3") >= 0 ||inputthree.indexOf("4") >= 0 ||inputthree.indexOf("5") >= 0 ||inputthree.indexOf("6") >= 0 ||inputthree.indexOf("7") >= 0 ||inputthree.indexOf("8") >= 0  ||inputthree.indexOf("9") >= 0 ||inputthree.indexOf(".") >= 0 )
      {
        setinputthree(inputthree.slice(0,-1))
      }
      else{
        if(operatortwo.indexOf("+") == 0 || operatortwo.indexOf("-") == 0 || operatortwo.indexOf("×") == 0 || operatortwo.indexOf("÷") == 0) 
      {
        setoperatortwo(operatortwo.slice(0,-1))
      }
      else{
        if(inputtwo.indexOf("0") >= 0 ||inputtwo.indexOf("1") >= 0 ||inputtwo.indexOf("2") >= 0 ||inputtwo.indexOf("3") >= 0 ||inputtwo.indexOf("4") >= 0 ||inputtwo.indexOf("5") >= 0 ||inputtwo.indexOf("6") >= 0 ||inputtwo.indexOf("7") >= 0 ||inputtwo.indexOf("8") >= 0  ||inputtwo.indexOf("9") >= 0 ||inputtwo.indexOf(".") >= 0 )
    {
      setinputtwo(inputtwo.slice(0,-1))
    }

    else{
      if(operatorone.indexOf("+") == 0 || operatorone.indexOf("-") == 0 || operatorone.indexOf("×") == 0 || operatorone.indexOf("÷") == 0) 
      {
        setoperatorone(operatorone.slice(0,-1))
      }
      else{
        setinputone(inputone.slice(0,-1))
      }
      }
      }
      }
      }
      }
      }
      }
      }
      }
      }
      }
    }
    }
    }
    }

    setoutput("")
  
  }
  
  function alldel(){
    
    setfont({
      fontSize: 'xx-large',
      color: 'white',
    })

    setinputone("")
    setinputtwo("")
    setinputthree("")
    setinputfour("")
    setinputfive("")
    setinputsix("")
    setinputseven("")
    setinputeight("")
    setinputnine("")
    setoperatorone("")
    setoperatortwo("")
    setoperatorthree("")
    setoperatorfour("")
    setoperatorfive("")
    setoperatorsix("")
    setoperatorseven("")
    setoperatoreight("")
    setoutput("")
  
  }

  function result(){
    
    setfont({
      fontSize: 'x-large',
      color: '#AAD6EB',
      transition: '0.5s',
    })
    
    setoutput(eval(inputone+ones+inputtwo+twos+inputthree+threes+inputfour+fours+inputfive+fives+inputsix+sixs+inputseven+sevens+inputeight+eights+inputnine))
  
  }
  
  return (
    <div className='all'>

      <center className='center'>

      <div className='display'>

          <h1 id='input' style={font}>{inputone}{operatorone}{inputtwo}{operatortwo}{inputthree}{operatorthree}{inputfour}{operatorfour}{inputfive}{operatorfive}{inputsix}{operatorsix}{inputseven}{operatorseven}{inputeight}{operatoreight}{inputnine}</h1>
          <h1 id='output'>{output}</h1>

      </div>

      <div>

        <table className='a'>
          <thead className='p-10'>
            <tr>
              <td><button className='button' id='ac' onClick={alldel}>AC</button></td>
              <td><button className='button' id='del' onClick={del}>DEL</button></td>
              <td><button className='button' id='divide' onClick={divide}>÷</button></td>
            </tr>
          </thead>
       
          <tbody>
            <tr>
              <td><button className='button' id='one' onClick={one}>1</button></td>
              <td><button className='button' id='two' onClick={two}>2</button></td>
              <td><button className='button' id='three' onClick={three}>3</button></td>
              <td><button className='button' id='x' onClick={multiply}>×</button></td>
            </tr>

            <tr>
              <td><button className='button' id='four' onClick={four}>4</button></td>
              <td><button className='button' id='five' onClick={five}>5</button></td>
              <td><button className='button' id='six' onClick={six}>6</button></td>
              <td><button className='button' id='plus' onClick={plus}>+</button></td>
            </tr>

            <tr>
              <td><button className='button' id='seven' onClick={seven}>7</button></td>
              <td><button className='button' id='eight' onClick={eight}>8</button></td>
              <td><button className='button' id='nine' onClick={nine}>9</button></td>
              <td><button className='button' id='minus' onClick={minus}>-</button></td>
            </tr>
          
            <tr>
              <td><button className='button' id='zero' onClick={zero}>0</button></td>
              <td><button className='button' id='dot' onClick={dot}>.</button></td>
              <td><button className='button' id='equals' onClick={result}>=</button></td>
            </tr>
          </tbody>

        </table>
        
      </div>

      </center>

    </div>
  );
  }

export default App;
