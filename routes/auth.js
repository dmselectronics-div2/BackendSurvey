const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register user
router.post('/registering', authController.register);

// Send confirmation email
router.post('/send-confirmation-email', authController.sendConfirmationEmail);

// Send password reset email
router.post('/send-password-reset-email', authController.sendPasswordResetEmail);

// Send email verification
router.post('/send-email', authController.sendEmail);

// Save PIN
router.post('/save-pin', authController.savePin);

// Get user profile
router.get('/profile', authController.getProfile);

// Delete account request
router.post('/delete-account', authController.deleteAccount);

// Get team members
router.get('/getTeamMembers', authController.getTeamMembers);

// Save or update team data
router.post('/saveOrUpdateTeamData', authController.saveOrUpdateTeamData);

module.exports = router;
