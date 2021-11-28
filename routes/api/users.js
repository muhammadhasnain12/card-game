const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// User Model
const User = require('../../models/User');


// @route   get api/Users/players
// @desc    Create An User
// @access  Public
router.get('/players', (req, res) => {
    let data = {
        realName: "Esmeralda Carrillo",
        playerName: "Skulldart",
        asset: "Yellow Orichalcum Of Paladins"
    }
    // Save the new user
    const newUser = new User();
    newUser.realName = data.realName;
    newUser.playerName = data.playerName;
    newUser.asset = data.asset;
    newUser.save((err, user) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        return res.send({
            success: true,
            message: 'Data save successfully'
        });
    });
});


// @route   GET api/Users/getemployee
// @desc    Get employee details
// @access  Public
router.get('/getemployee', (req, res) => {
    User.find((err, user) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error',
                error: err
            });
        }
        return res.send({
            success: true,
            payload: user
        });
    });
});

// @route   GET api/Users/getemployee
// @desc    Get employee details
// @access  Public
router.post('/addemployee', (req, res) => {
    return res.send({
        success: true,
        message: "Employee data save successfully"
    });
});


module.exports = router;