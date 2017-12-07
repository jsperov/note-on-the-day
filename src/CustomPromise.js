export function CustomPromise(callback) {
    this.status = 'pending'
    this.value = null
    this.handlerFn = []

    const resolve = (fn) => {
        this.status = "resolve"
        this.value = fn
 
        this.then(fn) 
    } 

    const reject = (err) => {
        this.status = "reject"
        this.value = err

        this.then(err)
    }

    setTimeout(() => { callback(resolve, reject) }, 0)
}

CustomPromise.prototype.then = function(onFulfilled, onRejected) { 
    if (this.status !== 'pending') { 
        console.log(this.handlerFn)
    } else {
        this.handlerFn.push(onFulfilled || onRejected)
    }

    console.log(this)
    return this
}

const promise =  (() => {
    return new CustomPromise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open('GET', 'https://api.spacexdata.com/v1/vehicles')
        xhr.onload = () => {
            (xhr.status === 200) ? resolve(xhr.response) : reject(xhr.statusText)
        }
    
        xhr.send()
    })
})()

promise
    .then(res => promise)
    .then(res => res)
    .then(res => res, err => err) 

console.log('next') 