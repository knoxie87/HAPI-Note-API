This is a simple Hapi Rest API that stores and retrieves notes. Data is currently being stored in a SQL Lite database. More functionality is coming soon. Currently hosted on render.
Routes are the following:
Retrive all notes 
https://hapi-note-api-knox.onrender.com/

Insert new note and retrieve values 
POST https://hapi-note-api-knox.onrender.com/Insert 
Have outlined the expected Object for JSON Payload below { "subject": "testnote1", "note": "This is a note testing API input functionality" }

Get a single note by subject.
https://hapi-note-api-knox.onrender.com/GetNote/{subject}
In this case, I am passing testnote2 as a subject  
https://hapi-note-api-knox.onrender.com/GetNote/testnote2
