export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpStep = Math.floor(Math.sqrt(breaks.length))
    
    let i = jumpStep
    for (; i<breaks.length; i+=jumpStep) {
        if (breaks[i])
            break;
    }

    i -= jumpStep;

    for (let j=0; j < jumpStep && i<breaks.length; ++j, ++i) {
        if (breaks[i])
            return i
    }
    return -1; 
}
