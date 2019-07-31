const express = require('express');
const router  = express.Router();
const User = require("../models/User");

// include the model:
const ProfileImg = require('../models/ProfileImg-Model');

router.get('/profileImg', (req, res, next) => {
    ProfileImg.find()
    .then(profileImgFromDB => {
        res.status(200).json(profileImgFromDB)
    })
    .catch(err => next(err))
})

router.post('/profileImg/create', (req, res, next) => {
    User.findByIdAndUpdate(
        {_id: req.user._id}, 
        {img: req.body.imageUrl},
        {new: true})
    .then(aNewProfileImg => { res.json({ user: aNewProfileImg}) })
    .catch( err => next(err) )
})

router.post('/boardImg/create', (req, res, next) => {
    ProfileImg.create(req.body)
    .then( aNewThing => {
        // console.log('Created new thing: ', aNewThing);
        res.status(200).json(aNewThing);
    })
    .catch( err => next(err) )
})

module.exports = router;
