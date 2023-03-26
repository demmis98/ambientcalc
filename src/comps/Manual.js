import { useState } from "react"

const Manual = () => {
    const [a_list, setA_list] = useState([])
    const [x_1, setX_1] = useState()
    const [x_2, setX_2] = useState()
    const [x_3, setX_3] = useState()
    const [x_4_1, setX_4_1] = useState()
    const [x_4_2, setX_4_2] = useState()
    const [x_5, setX_5] = useState()

    let p_1 = 0
    let p_2 = 0
    let p_3 = 0
    let p_4 = 0
    let p_5 = 0
    let p_a = 0

    const showCalc = () => {
        p_1 = calcP_1(a_list)
        p_2 = calcP_2(x_2)
        p_3 = calcP_3(x_3)
        p_4 = calcP_4(calcCalmness(x_4_1, x_4_2))
        p_5 = calcP_5(x_5)

        p_a = calc(p_1, p_2, p_3, p_4, p_5)
    }

    showCalc()
    
    const inputList = a_list.map((punctuation, i) => 
    <div><input type={"number"}
            placeholder={"what's observer " + (i + 1) + "'s punctuation for beauty?"}
            onChange={(e) => setA_list(a_list[i] = e.target.value)}
            value={punctuation}></input></div>)

    return(
        <>
        <div>x_1</div>
        <div>P1 = {p_1}</div>
        <input type={"number"}
            placeholder={"how many observers?"}
            onChange={(e) => setX_1(e.target.value)}
            value={x_1}></input>
        {inputList}
        <div>x_2</div>
        <div>P2 = {p_2}</div>
        <input type={"number"}
            placeholder={"how many strangers are watching?"}
            onChange={(e) => setX_2(e.target.value)}
            value={x_2}></input>
        <div>x_3</div>
        <div>P3 = {p_3}</div>
        <input type={"number"}
            placeholder={"how many lux are there"}
            onChange={(e) => setX_3(e.target.value)}
            value={x_3}></input>
        <div>x_4</div>
        <div>P4 = {p_4}</div>
        <input type={"number"}
            placeholder={"how many decibels?"}
            onChange={(e) => setX_4_1(e.target.value)}
            value={x_4_1}></input>
        <br></br>
        <input type={"number"}
            placeholder={"how many inconviniences?"}
            onChange={(e) => setX_4_2(e.target.value)}
            value={x_4_2}></input>
        <div>x_5</div>
        <div>P5 = {p_5}</div>
        <input type={"number"}
            placeholder={"how many seconds watching each other?"}
            onChange={(e) => setX_5(e.target.value)}
            value={x_5}></input>
        <br></br>
        <div>Point of ambiance = {p_a}</div>
        </>

    )
}

const calc = (p_1, p_2, p_3, p_4, p_5) => {
    const p_a = p_1 + p_2 + p_3 + p_4 + p_5
    return p_a
}

const calcP_1 = (a_list) => {
    let p_1 = 0
    for (let i = 0; i < a_list.length; i++) {
        p_1 += a_list[i]
    }
    p_1 = p_1 / a_list.length
    p_1 = p_1 / 5
    return p_1
}

const calcP_2 = (x_2) => {
    let p_2 = 0
    if (x_2 == 0) {
        p_2 = 20
    }
    else if (x_2 > 0) {
        p_2 = x_2 * -10000
    }
    return p_2
}

const calcP_3 = (x_3) => {
    let p_3 = 0
    p_3 = (x_3 / 20) + (20 / x_3)
    p_3 = p_3 * (-2)
    p_3 += 104
    p_3 = p_3 / 5
    return p_3
}

const calcP_4 = (x_4) => {
    let p_4 = 0
    p_4 = 1000 / x_4
    p_4 = 30 - p_4
    return p_4
}

const calcP_5 = (x_5) => {
    let p_5 = 0
    if (0 < x_5 && x_5 < 30) {
        p_5 = 100 * x_5 / 30
    }
    else if (30 <= x_5 && x_5 <= 60) {
        p_5 = 100
    }
    else if (60 < x_5) {
        p_5 = 100 - (5 * (x_5 - 60 ))
    }
    p_5 = p_5 / 5
    return p_5
}

const calcCalmness = (volume, problems) => {
    let calmness = 100
    if(volume > 20){
        calmness -= Math.log10(volume)
    }
    calmness -= 10 * problems

    return calmness
}

export default Manual