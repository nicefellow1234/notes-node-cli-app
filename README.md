# notes-node-cli-app
A command line interface nodejs notes app

## INSTALLATION : 

Just run the following command after `git clone` as : 

    npm install

## USAGE :

You can use following commands to interact with the app through command line : 

Help Flag to show all available commands :

    node app.js --help

Or with each command as : 

    node app.js add --help

    node app.js remove --help

    node app.js read --help

    node app.js list --help

Add Note : 

    node app.js add --title="NOTE_NAME_HERE" --body="NOTE_BODY_HERE"
    
Read Note : 

    node app.js read --title="NOTE_NAME_HERE"
    
Remove Note :

    node app.js remove --title="NOTE_NAME_HERE"
    
Get All Notes :

    node app.js list
    
    

