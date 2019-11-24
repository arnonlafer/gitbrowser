# gitbrowser
GitHub File Browser - Tree View of the files of a repository in GitHub


Task Definition
/////////////////////////////

GitHub File Browser

We want to build a simple UI to present the user with a Tree View of the files of a repository in GitHub. The application requires an implementation of the Front End, Back End, and a Relational Database. You are free to choose whatever technologies you like for every part and are free to use any popular third-party libraries you think fit. The only limitation is over the database that must be relational.

The first screen will ask you to authenticate to GitHub using OAuth, and after you’ve successfully authenticated, an input box will be shown, asking you which repository you’d like to display in the tree view.

After the user selects a repository, you should validate it exists, and then fetch its file structure from GitHub API and store it in a relational database of your choice (for example, MySql).

After finishing with that, the user will continue to a screen with the tree view itself, and you will fetch the file structure from the relation database you previously saved the data into and populate the tree view with the file structure.

The tree view should have the option to expand/collapse each folder. An icon indicating whether it’s a file or a folder should appear before each line item. The tree view should support large lists of files and folders, by having a “Load More…” button whenever a page ends, and clicking the “Load More…” will load another bulk of items.

Each line item in the tree view should have the possibility to edit its name - it will be saved into the relational database you chose. Please keep in mind that you should display to the user the loading of the request, handling an error that might happen and such (there is no need to update the name in GitHub, just in your DB).

Important Notes
//////////////////////////////////

* Document your code properly.
* Meaningful names.
* Logging.
* Error handling.
* Small meaningful commits (and clear commit messages).
* Client-side should not communicate with GitHub API directly.


Current status
//////////////////////////////////

You need to have nodejs and mysql to run it. If you have xampp installed, turn on php and mysql from xampp control panel. goto localhost/phpmyadmin and create a new db. Name it github-tv. 
Import the two tables from the assets folder. 
Run the app. goto localhost:3000/home.

The code has comments, loading, error_handling. 
Client side do not communicate directly with API. 
I used relational db, mysql. user can rename a node.

I still need to finish the next requirements:
Documentation
Load More...

