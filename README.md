There are two views.

The first view is upon successful login of the admin credentials, where they can create new admins and give them permissions to 3 tasks. 
You can then view the existing users, their passwords, and check which user has permissions, and delete the users as well.

The second view is upon succsessful login of the user credentials, where all they can do is view the existing users and not be able to view who has what permission or other user's passwords.

Bugs:

-Alignment in the User Creation form in the Admin View

-User and Admin credentials are fixed. They are not connected to the other users/admins we can create in the admin view and you cannot login with the other account usernames and password.

Missing/To-Do:

If I had more time, here are some more additions I could've added:

-Have an external API for creation/updating of users. This way each time we reload the page the user accounts aren't lost

-The API will also help fix the bug of not being able to login with user-created admins

-Logging with the API would also make it more secure than simply hardcoding the users inside the .js file

-An upload feature. This was nearly done but my PC was not able to install axios which is what I needed for uploading files locally in React
