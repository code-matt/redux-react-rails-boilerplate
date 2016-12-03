# Redux-React-Rails-Boilerplate
## https://redux-react-rails-boilerplate.herokuapp.com/

* Redux
* React
* Rails 
* Material Design Lite
* Bootstrap
* FontAwesome
* ReactToastr Notifications

![Screenshot](screenshot.png)

### Installation:

##### Prod:
Change your production host to localhost also for now in /client/.env before you build.
```
rails db:create
rails db:migrate
rails db:seed
cd client
npm install
npm run build
rails s
visit localhost:3000
```

###### Dev:
```
Tab1:
rails db:create
rails db:migrate
rails db:seed
rails s
Tab2:
cd client
npm install
npm start
visit localhost:3001
```
