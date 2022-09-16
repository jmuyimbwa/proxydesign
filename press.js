var Google = /** @class */ (function () {
    function Google() {
        this.Data = [8, 8, 9, 5];
    }
    Google.prototype.request = function () {
        return this.Data;
    };
    return Google;
}());
var GoogleProxy = /** @class */ (function () {
    function GoogleProxy() {
        this.Data = [];
        this.google = new Google;
    }
    GoogleProxy.prototype.request = function () {
        if (this.Data.length === 0) {
            console.log("Pulling Data from Google");
            this.Data = this.google.request();
            return this.Data;
        }
        console.log("Pulling Data Google Proxy(Cacahe)");
        return this.Data;
    };
    return GoogleProxy;
}());
//Client
var PROXY = new GoogleProxy();
console.log(PROXY.request());
console.log(PROXY.request());
