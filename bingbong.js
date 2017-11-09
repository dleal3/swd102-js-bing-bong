function BingBong() {
    for(var i = 0;i< 101;i++) {
        var n = Math.floor((Math.random() * 100) + 1);
        if(n) {
            var output = "";
            if(n % 3 == 0)
                output += "Bing ";
            if(n % 5 == 0) 
                output += " Bong ";
            document.getElementById('output').innerHTML = output + n;
        } 
    }   
}