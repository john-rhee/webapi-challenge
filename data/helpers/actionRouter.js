const express = require('express');

const actionData = require("./actionModel.js");

const router = express.Router();

router.get('/', (req, res) => {
    actionData.get(req.query)
    .then(stuffs => {
      res.status(200).json(stuffs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: "The users information could not be retrieved." 
      });
    });
});

router.get('/:id', (req, res) => {
    actionData.get(req.params.id)
  .then(stuff => {
      if (stuff) {
      res.status(200).json(stuff);
      } else {
      res.status(404).json({ message: 'ID not found' });
      }
  })
  .catch(error => {
      console.log(error);
      res.status(500).json({
      message: 'Error retrieving the stuff',
      });
  });
});

router.post('/', (req, res) => {
    const updateData = req.body; 
    
    actionData.insert(updateData)
      .then(stuff => {
          res.status(201).json(stuff);
      })
      .catch(error => {
          console.log(error);
          res.status(500).json({
          message: 'Error adding',
          });
      });
  
  });

router.delete('/:id', (req, res) => {
    actionData.remove(req.params.id)
    .then(removed => {
        if (removed) {
        res.status(200).json({ message: 'Delete sucessful' });
        } else {
        res.status(404).json({ message: 'ID not found' });
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
        message: 'Error removing the post',
        });
    });
});

router.put('/:id', (req, res) => {

  const updatedPost = req.body;
  
  actionData.update(req.params.id, updatedPost)
    .then(updated => {
        if (updated) {
        res.status(200).json(updated);
        } else {
        res.status(404).json({ message: 'ID not found' });
        }
    })
    .catch(error => {
        // log error to database
        console.log(error);
        res.status(500).json({
        message: 'Error updating the post',
        });
    });
});

module.exports = router;