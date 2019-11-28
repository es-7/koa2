(()=>{
    const ls = {}
    ls.get = (key) => {
        const string = window.localStorage.getItem(key)
        return (JSON.parse(string)||{}).data
    }
    ls.set = (key,value) => {
        const obj = {data:value}
        window.localStorage.setItem(key,JSON.stringify(obj))
    }
    window.ls = ls
})()

