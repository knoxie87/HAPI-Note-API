const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});
let sql;

const createTable = () => {
    sql =`drop table if exists notes`
    sql = `CREATE TABLE notes (id INTEGER PRIMARY KEY, subject text, note text)`;
    db.run(sql, (err) => {if (err) return console.error(err.message);}); 

}

module.exports = {
    createTable
}
