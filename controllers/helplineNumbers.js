const HelplineNumber = require('../models/helplineNumber');

exports.createHelplineNumber = (req, res, next) => {
  const helplineNumber = new HelplineNumber({
    helplineNumber: req.body.helplineNumber,
    name: req.body.name,
    category: req.body.category,
    description: req.body.description
  });
  
  helplineNumber.save()
    .then(result => {
      res.status(201).json({
        message: 'HelplineNumber record created',
        createdHelplineNumber: result
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Failed to create helplineNumber record',
        error: error
      });
    });
};

exports.getHelplineNumber = (req, res, next) => {
  // const searchTerm = req.query.searchTerm;
  const searchTerm = req.params.searchTerm;
  // const mobileNumber = req.query.mobileNumber;
  
  HelplineNumber.findOne({ $or: [{ helplineNumber: searchTerm }, { name: searchTerm }] })
    .then(helplineNumber => {
      if (!helplineNumber) {
        return res.status(404).json({
          message: 'HelplineNumber not found'
        });
      }
      res.status(200).json({
        helplineNumber: helplineNumber
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Failed to fetch helplineNumber information',
        error: error
      });
    });
};
