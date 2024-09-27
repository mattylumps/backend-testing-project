const express = require('express');
const router = express.Router();
// Sample route
router.get('/', (req, res) => {
  res.json({ message: 'Hello from the API route!'});
});
module.exports = router;