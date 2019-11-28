const mysql = require('mysql')
const config = require('./config')

const base = {
    connectionLimit:20,
    multipleStatements:true
}

const pool = mysql.createPool({...base,...config})

const query = (sql,values) => new Promise((resolve,reject) =>{
    pool.getConnection((err,connection)=>{
        if(err){
            reject(err)
        }else{
            connection.query(sql,values,(err,rows)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
                connection.release()
            })
        }
    })
})

module.exports = {query}
