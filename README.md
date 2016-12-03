# Redux-React-Rails-Boilerplate
## https://redux-react-rails-boilerplate.herokuapp.com/

* Redux
* ReduxThunk for ansync actions
* React
* Rails 
* Material Design Lite
* Bootstrap
* FontAwesome
* ReactToastr Notifications

![Screenshot](screenshot.png)

### Caviats
* Router - This is not set up to work with the react-router. If you think
your design needs it, think again. If you still think it needs it,
see this gist (coming soon) on a hack you can do to have Rails
and React router play together.

* OAuth - Knock does not support multiple authentication  strategies out
of the box. Luckily, there has been discussion and attempts at this by
users of the gem. Have a look at https://github.com/nsarno/knock/issues/11
if you are interested in this. Please open a PR here if you do get it working
smoothly!

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

### Contribute!
* Fork it
* Create your feature branch (git checkout -b my-new-feature)
* Commit your changes (git commit -am 'Add some feature')
* Push to the branch (git push origin my-new-feature)
* Create a new Pull Request
