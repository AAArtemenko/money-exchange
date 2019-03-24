module.exports = function makeExchange(currency) {
    var H = 50, Q = 25, D = 10, N = 5, P = 1, div = 0, res = {};
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    else if (currency <= 0) {
        return res;
    } 

    else {
        div = parseInt(currency / H); 
        if (div != 0) {            
            currency -= div * H;
            res["H"] = div;
        }

        div = parseInt(currency / Q); 
        if (div != 0) {            
            currency -= div * Q;
            res["Q"] = div;
        }

        div = parseInt(currency / D); 
        if (div != 0) {
            currency -= div * D;
            res["D"] = div;
        }
        
        div = parseInt(currency / N); 
        if (div != 0) {
            currency -= div * N;
            res["N"] = div;
        }

        div = parseInt(currency / P); 
        if (div != 0) {
            currency -= div * P;
            res["P"] = div;
        }

        return res;
    }
};
