export default function bs_list(haystack: number[], needle: number): boolean {
    let hi = haystack.length 
    let lo = 0 
    do {
        let m = Math.floor(lo + (hi - lo)/2)
        let val = haystack[m]
        if (val === needle)
            return true
        else if (val > needle)
            hi = m; 
        else lo = m + 1;
    } while (lo < hi)
    return false
}
