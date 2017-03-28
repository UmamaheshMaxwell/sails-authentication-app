# sails-authentication-app

A [Sails](http://sailsjs.org) application. 

1) Download or  git clone the repository. 
2) do npm install. 
3) do sails lift.  

## Testing  

1) Open [Postman](https://www.getpostman.com) and make a get request with [http://localhost:1337/user](http://localhost:1337/user).   
2) You will recieve an error message saying "no authorization header was found".  
3) Make a post request with email, password and confirmPassword which will return a JSON data with token. 
4) Now make a get request once again with Authorization header with a value of Bearer [paste the token]. 
5) Now you will be able to the user data. 
