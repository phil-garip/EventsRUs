const router = require('express').Router();
const { User, Event } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  console.log('user created');
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(dbUserData);

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  User.findOne({
    attributes: { exclude: ['password', 'username', 'email'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Event,
        attributes: [
          'title',
          'description',
          'date'
        ]
      },
    ]
  })
  .then(dbUserData => {
    if(!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
});

// Login // /api/users/login
router.post('/login', async (req, res) => {
  console.log('logging in')
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(dbUserData);
    const user = dbUserData.get({ plain: true });
    console.log(user);
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.dataValues.id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout // /api/logout
router.post('/', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
