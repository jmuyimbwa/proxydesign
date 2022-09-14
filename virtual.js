var RealSubject = /** @class */ (function () {
    function RealSubject() {
        // hypothetically enormous amounts of data
        this.enormousData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    RealSubject.prototype.request = function () {
        return this.enormousData;
    };
    return RealSubject;
}());
var ProxySubject = /** @class */ (function () {
    function ProxySubject() {
        this.enormousData = [];
        this.realSubject = new RealSubject();
    }
    ProxySubject.prototype.request = function () {
        // Using the proxy as a cache, and loading data into it only
        // if it is needed
        if (this.enormousData.length === 0) {
            console.log("pulling data from RealSubject");
            this.enormousData = this.realSubject.request();
            return this.enormousData;
        }
        console.log("pulling data from Proxy cache");
        return this.enormousData;
    };
    return ProxySubject;
}());
// The Client
var PROXY_SUBJECT = new ProxySubject();
// Use the Subject. First time it will load the enormous amounts
// of data
console.log(PROXY_SUBJECT.request());
// Use the Subject again, but this time it retrieves it from
// the local cache
console.log(PROXY_SUBJECT.request());
