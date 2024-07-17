import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'asd098',
    database: 'db_cup'
})

connection.connect()

/**
 * Executa um código SQL com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} values valores a serem passados para o sql
 * @param {string} rejectMessage mensagem a ser exibida
 * @returns objeto da Promise
 */
export const inquiry = (sql, values='', rejectMessage) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (error, result) => {
            if(error) return reject(rejectMessage)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default connection
