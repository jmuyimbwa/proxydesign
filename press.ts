interface SearchEngine{
    request(): void

}

class Google implements SearchEngine {
    Data: number[]

    constructor() {
        this.Data = [8,8,9,5]
        
    }

    request(){
        return this.Data
        
    }
}

class GoogleProxy implements SearchEngine {
    Data: number[]
    google: Google

    constructor() {
        this.Data = []
        this.google = new Google
        
    }
    request() {
        if (this.Data.length === 0){
            console.log("Pulling Data from Google")
            this.Data = this.google.request()
            return this.Data
        }

        console.log ("Pulling Data Google Proxy(Cacahe)")
        return this.Data

        
    }
}

//Client
const PROXY = new GoogleProxy()
console.log (PROXY.request())
console.log (PROXY.request())
