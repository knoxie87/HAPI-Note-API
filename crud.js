const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});

const insertNote = async (subject,note) => {
    sql = `INSERT INTO notes (subject, note) values ('${subject}','${note}')`;
    db.run(sql);
    let result =  await retrieveNotes()
    return  result;
}

const retrieveNotes = () => {
    sql = `SELECT * FROM notes`;
    return new Promise((resolve, reject) => {
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

const retrieveSpecificNote = (subject) => {
    sql = `SELECT * FROM notes where subject = "${subject}"`;
    return new Promise((resolve, reject) => {
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

module.exports = {
    insertNote,
    retrieveNotes,
    retrieveSpecificNote
}



