This is a simple Hapi Rest API to store and retrieve notes. Data is currently being store in a SQL Lite database.
More functionality coming soon. Currently hosted on render.

Routes are the following:

Retrive all notes
GET https://hapi-note-api-knox.onrender.com/

Insert new note and retrieve values
POST https://hapi-note-api-knox.onrender.com/Insert
Have outlined expected Object for JSON Payload below 
{
    "subject": "testnote1",
    "note": "This is a note testing API input functionality"
}

Get single note by subject.
https://hapi-note-api-knox.onrender.com/GetNote/{subject}

In this case I am passing testnote2 as subject
GET https://hapi-note-api-knox.onrender.com/GetNote/testnote2

