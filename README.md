# gitbrowser
GitHub File Browser - Tree View of the files of a repository in GitHub


Task Definition
----

#### GitHub File Browser

We want to build a simple UI to present the user with a Tree View of the files of a repository in GitHub. The application requires an implementation of the Front End, Back End, and a Relational Database. You are free to choose whatever technologies you like for every part and are free to use any popular third-party libraries you think fit. The only limitation is over the database that must be relational.

The first screen will ask you to authenticate to GitHub using OAuth, and after you’ve successfully authenticated, an input box will be shown, asking you which repository you’d like to display in the tree view.

After the user selects a repository, you should validate it exists, and then fetch its file structure from GitHub API and store it in a relational database of your choice (for example, MySql).

After finishing with that, the user will continue to a screen with the tree view itself, and you will fetch the file structure from the relation database you previously saved the data into and populate the tree view with the file structure.

The tree view should have the option to expand/collapse each folder. An icon indicating whether it’s a file or a folder should appear before each line item. The tree view should support large lists of files and folders, by having a “Load More…” button whenever a page ends, and clicking the “Load More…” will load another bulk of items.

Each line item in the tree view should have the possibility to edit its name - it will be saved into the relational database you chose. Please keep in mind that you should display to the user the loading of the request, handling an error that might happen and such (there is no need to update the name in GitHub, just in your DB).

Important Notes
----

* Document your code properly.
* Meaningful names.
* Logging.
* Error handling.
* Small meaningful commits (and clear commit messages).
* Client-side should not communicate with GitHub API directly.

******

Instructions & Current status
----

I used relational db, mysql and XAMPP for running locally.

Import the DB github-tv.sql from the assets folder (and name it 'github-tv')

Define the user in the env-vars.json (add also the port if you're not using the standard number)

Run the app from the terminal: node app.js

goto localhost:3000/home.

The code has comments, loading, error_handling. 
Client side do not communicate directly with API. 
User can rename a node.

Screenshot 1: 
![alt text](https://github.com/arnonlafer/gitbrowser/raw/master/assets/Screen%20Shot%202019-11-25%20at%202.57.45%20PM.png "Screenshot 1")

Screenshot 2: 
![alt text](https://github.com/arnonlafer/gitbrowser/raw/master/assets/Screen%20Shot%202019-11-25%20at%202.31.51%20PM.png "Screenshot 2")

Screenshot 3: 
![alt text](https://github.com/arnonlafer/gitbrowser/raw/master/assets/Screen%20Shot%202019-11-25%20at%202.31.15%20PM.png "Screenshot 3")

##### I still need to finish the next requirements:
* Documentation
* Load More...

