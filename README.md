# LinkedIn Clone

The challenge:
Using React.JS create a LinkedIn Clone with the following features:

* SignIn with a new account and store data like Name, Email, PhotoUrl and Password in Redux
* LogIn and Logout of the given app.
* Header section with search and other functionality.
* SideBar with account details fetched from redux
* Central feild with written posts functionality.
* Integrating firebase to the feild to store posts and for global visiblity.
* News section with Latest news.



![Screenshot 2023-01-01 130605](https://user-images.githubusercontent.com/78549024/210163932-9ab32272-083b-4da8-bddf-ecb624df52fd.png)



## Built with:
* React JS
* Redux
* Firebase (Firestore)
* Material UI
* Flexbox
* CSS
* HTML5 markup

## Quick start
Clone this repo, cd into it and run the following commands to install the dependencies:

```
git clone https://github.com/smitjiwani/linkedIn_clone
```
```
npm install
```

**Initialise firebase DB**

*Go to to console.firebase.google.com

![Screenshot 2023-06-02 130617](https://github.com/smitjiwani/linkedIn_clone/assets/78549024/1b1ac2a3-4bb4-4e28-af4a-d6aeee13c67f)

* Create a new project

![Screenshot 2023-06-02 130747](https://github.com/smitjiwani/linkedIn_clone/assets/78549024/8286a9fc-fcf5-4beb-92fc-74df7528a3d7)

* Go to project settings

![Screenshot 2023-06-02 131359](https://github.com/smitjiwani/linkedIn_clone/assets/78549024/df471e5b-e894-402d-94b3-804edc1a636b)

*scroll down to the </> webapp icon

![Screenshot 2023-06-02 131616](https://github.com/smitjiwani/linkedIn_clone/assets/78549024/add16c18-c493-4dcd-8ee3-2cac69f65f6f)

* copy the firebaseConfig to src/firebase.js
![Screenshot 2023-06-02 131642](https://github.com/smitjiwani/linkedIn_clone/assets/78549024/ba3c2257-e76a-4891-9e1c-1d84fdb80d08)




```
npm run start
``` 
```
npmm run build
```
Development
After installing all dependencies run Webpack in watch-mode to continually compile the JavaScript as you work:

```
$ yarn dev # npm start
```

## features to be added

* Networking functionality.
* Messaging feature.
* Who viewed you functionality with actual data.
* Recents with actual search data.
* News section with realitime news api.
* Notification feature with adding.
* Photos videos and event features.
* Like, Comment, Share features.
