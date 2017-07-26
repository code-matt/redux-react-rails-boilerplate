# Redux-React-Rails-Boilerplate
## https://redux-react-rails-boilerplate.herokuapp.com/ 
( free heroku dyno, give it some time to spin up)

* Redux
* ReduxThunk for async actions
* React
* React Router
* Rails5
* Material Design Lite
* Bootstrap
* FontAwesome
* ReactToastr Notifications

The master branch is semi-educational. Have no experience with this stack?
Follow the simple demo code. There are notifications and mouseovers
trying to explain what is going on as far as Redux containers and Redux
actions go.


![Screenshot](screenshot.png)

### Caviats
* Ruby/Rails/Bundler Setup - It's beyond the scope of this readme to 
help you with this, it can be something of a long process given your setup.
If you are on Windows, God help you. Here are some usefull links:
https://github.com/rbenv/rbenv https://github.com/bundler/bundler

* OAuth - ~~Knock does not support multiple authentication  strategies out
of the box...~~ https://github.com/nsarno/knock/issues/11 see here for an implementatioon
of facebook OAuth!

### Installation:

Do a search and replace on the entire project for 'ReduxReactRails' in
order to change the psql database and project name. 

```
bundle install
rails db:create
rails db:migrate
rails db:seed
```

##### Prod:
Change your production host to localhost also for now in /client/.env before you build.

```
cd client
npm install
npm run build
rails s -p 3001
visit localhost:3001
```

###### Dev:

```
Tab1:
bundle install
rails db:create
rails db:migrate
rails db:seed
rails s
Tab2:
cd client
npm install
npm start
visit localhost:3000
```

### Contribute!
* Clone it
* Create your feature branch
* Commit your changes
* Push to the branch
* Create a new Pull Request
