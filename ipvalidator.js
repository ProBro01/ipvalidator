class Solution {
    
     getnum(x){
        switch(x){
                case "1": return 1;
                case "2": return 2;
                case "3": return 3;
                case "4": return 4;
                case "5": return 5;
                case "6": return 6;
                case "7": return 7;
                case "8": return 8;
                case "9": return 9;
                case "0": return 0;
                case "-": return "-";
                default : return -1;
            }
    }
    
    atoi(s){
        s = s.split("")
        var isnegative = false
        var startfrom = 1
        var res = this.getnum(s[0])
        if(res === -1){
            return -1
        }
        if(res === '-'){
            isnegative = true
            startfrom = 2
            res = this.getnum(s[1])
            if(res === -1 || res === "-"){
                return -1
            }
        }
        for(let i = startfrom; i < s.length; i++){
            var temp = this.getnum(s[i])
            if(temp === -1){
                return -1
            }
            res = res*10 + temp 
        }
        if(isnegative){
            return -1
        }
        return res
    }
    
    isinrange(num){
        num = this.atoi(num)
        if(num === -1){
            return false
        }
        if(num > 255){
            return false
        }
        return true
    }
    
    checkifemptyornotinrange(st){
        for(let i = 0; i < st.length; i++){
            if(st[i] === ""){
                return true
            }
            if(!this.isinrange(st[i])){
                return true
            }
            if(st[i].length >= 2 && this.splitit(st[i], "")[0] === "0"){
                return true
            }
        }
        return false
    }
    
    splitit(st, point){
        var splitedarray = []
        var temp = ""
        let stringcounter = 0
        let q = st.charAt(stringcounter)
        let t = ""
        if(point === ""){
            while(q !== ""){
              q = st.charAt(stringcounter)
              if(q !== ""){
                splitedarray.push(q)
              }
              stringcounter += 1
            }
            return splitedarray
        }
        else{
            while(q !== ""){
                q = st.charAt(stringcounter)
                if(q === point){
                    splitedarray.push(temp)
                    temp = ""
                }
                else{
                    temp += q
                }
                stringcounter += 1
            }
            splitedarray.push(temp)
            return splitedarray
        }
    }
    
    isValid(s){
        // double dot check --- done
        // more than 4 block check --- done
        // range check
        // zeros check
        s = this.splitit(s, ".")
        if(s.length !== 4){
            return 0
        }
        if(this.checkifemptyornotinrange(s)){
            return 0
        }
        return 1
    }
}