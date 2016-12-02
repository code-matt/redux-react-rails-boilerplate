# admin

test1 = User.create(
  email: 'qq@qq.com',
  password: '12345678',
)

test2 = User.create(
  email: 'q1@qq.com',
  password: '12345678',
)

test3 = User.create(
  email: 'q2@qq.com',
  password: '12345678',
)

test4 = User.create(
  email: 'q3@qq.com',
  password: '12345678',
)

# summer
Favorite.create(name: "GitHub", url:"www.github.com", user_id: test1.id)
Favorite.create(name: "CNN", url:"www.cnn.com", user_id: test2.id)
Favorite.create(name: "Egghead", url:"www.egghead.io", user_id: test1.id)
Favorite.create(name: "Reddit", url:"www.reddit.com", user_id: test2.id)
Favorite.create(name: "Google", url:"www.google.com", user_id: test4.id)
Favorite.create(name: "Facebook", url:"www.facebook.com", user_id: test3.id)
Favorite.create(name: "LinkedIn", url:"www.linkedin.com", user_id: test1.id)
Favorite.create(name: "PhysOrg", url:"www.phys.org", user_id: test2.id)
Favorite.create(name: "Goodreads", url:"www.goodreads.com", user_id: test4.id)