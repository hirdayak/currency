document.addEventListener("DOMContentLoaded", function () {
    var btc, eth, doge;

    function updatePrices() {
        btc = document.getElementById("bitcoin");
        eth = document.getElementById("ethereum");
        doge = document.getElementById("dogecoin");
        
        if (btc && eth && doge) {
            var settings = {
                async: true,
                crossDomain: true,
                url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
                method: "GET",
                headers: {}
            };

            $.ajax(settings).done(function (response) {
                btc.textContent = "$" + response.bitcoin.usd;
                eth.textContent = "$" + response.ethereum.usd;
                doge.textContent = "$" + response.dogecoin.usd;
            });
        }
    }
    
    updatePrices();
});
