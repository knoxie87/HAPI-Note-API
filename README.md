This is a simple Hapi Rest API to store and retrieve notes. Data is currently being store in a SQL Lite database.
More functionality comming soon. Currently hosted on render.

Routes are the following:

Retrive all notes
GET https://hapi-note-api-knox.onrender.com/

Insert new note and retrieve values
POST https://hapi-note-api-knox.onrender.com/Insert
Json Payload
{
    "subject": "testnote1",
    "note": "This is a note testing API input functionality"
}
