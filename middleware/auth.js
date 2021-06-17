// ###### GOOGLE AUTHENTICATION #####
const express = require('express')
const passport = require('passport')
const router = express.Router()

//@route GET /auth/google
// router.get('/google', passport.authenticate('google', { scope: ['profile']}))

//@route GET /auth/google/callback
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), 
//     (req, res) => {
//         res.redirect('/dashboard')
//     }
// )

//@route /auth/logout
// router.get('/logout', (req, res) => {
//   req.logout()
//   res.dedirect('/')
// })

// module.exports = router

// #### LOCAL AUTHENTICATION ###
module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
