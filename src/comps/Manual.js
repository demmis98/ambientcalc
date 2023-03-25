const Manual = () => {
    return(
        <>

        </>
    )
}

const calc = (p_1, p_2, p_3, p_4, p_5) => {
    const p_a = p_1 + p_2 + p_3 + p_4 + p_5
    return p_a
}

const calcP_1 = (a_list) => {
    let p_1 = 0
    let i = 0
    for (i = 0; i < a_list.length; i++) {
        p_1 += a_list[i]
    }
    console.log(i)
    //i++
    p_1 = p_1 / i
    p_1 = p_1 / 5
    return p_1
}

const calcP_2 = (x_2) => {
    let p_2 = 0
    if (x_2 == 0) {
        p_2 = 20
    }
    else if (x_2 > 0) {
        p_2 = x_2 * 10000
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
        p_5 = 100 * x_5 / 3
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

const calcCalmness = (volume, problems) {
    let calmness = 100
    if(volume > 20){
        calmness -= Math.log10(volume)
    }
    calmness -= 10 * problems

    return calmness
}
export default Manual