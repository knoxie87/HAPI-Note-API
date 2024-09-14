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

const deleteNote = async (id) => {
    sql = `DELETE FROM notes where id = "${id}"`;
    db.run(sql);
    let result = await retrieveNotes()
    return result;
}

const updateNotes = async (id,subject,note) => {
    sql = `UPDATE notes SET subject = "${subject}", note = "${note}" WHERE id = ${id}`;
    db.run(sql);
    let result = await retrieveNotes()
    return result;
}



module.exports = {
    insertNote,
    retrieveNotes,
    retrieveSpecificNote,
    deleteNote,
    updateNotes
}



