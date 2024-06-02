export function formatNumber(num: number) {
    function trimDecimals(n:number) {
        return n.toFixed(0)
    }
    if (num >= 1000 && num < 1000000) {
        return trimDecimals(num / 1000) + 'K';
    }
    else if (num >= 1000000 && num < 1000000000) {
        return trimDecimals(num / 1000000) + 'M';
    }
    else if (num >= 1000000000 && num < 1000000000000) {
        return trimDecimals(num / 1000000000) + 'B';
    }
    else {
        return num.toString();
    }
}
