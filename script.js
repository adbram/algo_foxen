function algoFoxen(str) {
    let countChars = {};
    let nbV = 0;
    let nbC = 0;
    let maxV = ["", 0];
    let maxC = ["", 0];
    
    str.split('').forEach(v => {
        if (!countChars[v])
            countChars[v] = 0;
        
        countChars[v]++;
        
        if (v.match(/[aeiouy]/gi)) {
            nbV++;
            if (maxV[1] < countChars[v])
                maxV = [v, countChars[v]];
        } else {
            nbC++;
            if (maxC[1] < countChars[v])
                maxC = [v, countChars[v]];
        }
    });
    
    let timeV = (nbV - maxV[1]) * 2 + nbC;
    let timeC = (nbC - maxC[1]) * 2 + nbV;

    if (timeV <= timeC)
        return { time: timeV, string: (maxV[0] === "" ? "A" : maxV[0]).repeat(str.length) };
    
    return { time: timeC, string: (maxC[0] === "" ? "Z" : maxC[0]).repeat(str.length) };
}

console.log("BANANA", "\n", algoFoxen("BANANA"), "\n\n")
console.log("FOXEN", "\n", algoFoxen("FOXEN"), "\n\n")
console.log("SUFIANE", "\n", algoFoxen("SUFIANE"), "\n\n")
console.log("FBHC", "\n", algoFoxen("FBHC"), "\n\n")
console.log("A", "\n", algoFoxen("A"), "\n\n")
console.log("TOBDNNWVJV", "\n", algoFoxen("TOBDNNWVJV"), "\n\n")
console.log("JAVASCRIPT", "\n", algoFoxen("JAVASCRIPT"), "\n\n")
console.log("OICNUIQCNICAZMOYFROQPBCIMZQKMYRBEISXMWUCD", "\n", algoFoxen("OICNUIQCNICAZMOYFROQPBCIMZQKMYRBEISXMWUCD"), "\n\n")