
import React from "react";
import './Calculator.css';
import { Container } from '@mui/material';
import {Box} from "@mui/material"
import { useState } from "react";


export default function Calculator() {
    const[num,setNum] = useState("");
    const[oldnum,setoldNum] = useState("");
    const[operador,setOperador] = useState();

    const inputNum = (e) => {
        var input = e.target.value;
        if(num===0){
            setNum(input);
        }else{
            setNum(num + input);
        }
        
    }

    const limpar = (e) => {
        setNum(0)
    }

    const porcentage = () => {
        //setNum(num/100); 
        num = num.substring(0, num.length - 1);       
    }

    const mudarsinal = () => {
        if(num>0){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }

    const calcular = () => {
        const oldNumNumber = parseFloat(oldnum.replace(",","."));
        const NumNumber = parseFloat(num.replace(",","."));

        if(operador==="/"){
            setNum((oldNumNumber/NumNumber).toLocaleString("pt-BR"));
        }else if(operador==="x"){
            setNum((oldNumNumber*NumNumber).toLocaleString("pt-BR"));
        }else if(operador==="-"){
            setNum((oldNumNumber-NumNumber).toLocaleString("pt-BR"));
        }else if(operador==="+"){
            setNum((oldNumNumber+NumNumber).toLocaleString("pt-BR"));
        }
        
    }

    const operadorHandler = (e) => {
        var operadorInput=e.target.value;
        setOperador(operadorInput);
        setoldNum(num);
        setNum(0);
    }

    return (
        <div>
        <Box m={5} />
        <Container maxWidth="xs">
        <div className="wrapper">
            <h1 className="h1">Calculadora Softex!</h1>
            <Box m={12} />
            <h1 className="resultado">{num}</h1>
            <button className="opline1" onClick={limpar}>AC</button>
            <button className="opline1" onClick={mudarsinal}>+/-</button>
            <button className="opline1" onClick={porcentage}>%</button>
            <button className="orange" onClick={operadorHandler} value="/">/</button>
            <button className="gray" onClick={inputNum} value={7}>7</button>
            <button className="gray" onClick={inputNum} value={8}>8</button>
            <button className="gray" onClick={inputNum} value={9}>9</button>
            <button className="orange" onClick={operadorHandler} value="x">x</button>
            <button className="gray" onClick={inputNum} value={4}>4</button>
            <button className="gray" onClick={inputNum} value={5}>5</button>
            <button className="gray" onClick={inputNum} value={6}>6</button>
            <button className="orange" onClick={operadorHandler} value="-">-</button>
            <button className="gray" onClick={inputNum} value={1}>1</button>            
            <button className="gray" onClick={inputNum} value={2}>2</button>
            <button className="gray" onClick={inputNum} value={3}>3</button>
            <button className="orange" onClick={operadorHandler} value="+">+</button>
            <button className="zero" onClick={inputNum} value={0}>0</button>
            <button className="gray" onClick={inputNum} value={","}>,</button>
            <button className="orange" onClick={calcular}>=</button>  
        </div>
        </Container>
        </div>
        
    )
}