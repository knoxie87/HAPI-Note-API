const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {if (err) return console.error(err.message);});

const insertNote = (subject,note) => {
    sql = `INSERT INTO notes (note,subject) VALUES('${subject,note}');`;
    db.run(sql); 
}

const retrieveNotes = () => {
    sql = `SELECT * FROM notes`;
    db.all(sql,[],(err,rows) => {
        if (err) return console.error(err.message);
        return rows
    })
}

const retrieveSpecificNote = (subject) => {
    sql = `SELECT * FROM notes where subject = ${subject}`;
    db.all(sql,[],(err,rows) => {
        if (err) return console.error(err.message);
        return rows
    })
}

module.exports = {
    insertNote,
    retrieveNotes,
    retrieveSpecificNote
}



