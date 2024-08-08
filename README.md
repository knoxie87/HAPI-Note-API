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

![image](https://github.com/user-attachments/assets/276fa624-9e16-4224-831e-e6ba2e756d68)
