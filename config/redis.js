const redis = require('redis')

const cache = redis.createClient('6379', 'cache')

const getCache = key => new Promise((resolve, reject) => {
    cache.get(key, (err, value) => {
        if(err) {
            reject(err)
        } else {
            resolve(value)
        }
    })
})

const setCache = (key, value) => new Promise((resolve, reject) => {
    cache.set(key, value, err => {
        if(err) {
            reject(err)
        } else {
            resolve(true)
        }
    })
})

module.exports = {getCache, setCache}