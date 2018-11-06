var express = require('express'),
    router = express.Router(),
    logger = require('../../config/logger'),
    mongoose = require('mongoose'),
    User = mongoose.model('Foobar'),
    asyncHandler = require('express-async-handler');

module.exports = function (app, config) {
    app.use('/api', router);

    router.get('/foobars', asyncHandler(async (req, res) => {
        logger.log('info', 'Get all foos');
        let query = User.find();
        query.sort(req.query.order)
        await query.exec().then(result => {
            res.status(200).json(result);
        })
    }));

    router.get('/foobars/:id', asyncHandler(async (req, res) => {
        logger.log('info', 'Get foos %s', req.params.id);
        await User.findById(req.params.id).then(result => {
            res.status(200).json(result);
        })
    }));

    router.post('/foobars', asyncHandler(async (req, res) => {
        logger.log('info', 'Creating foo');
        var user = new User(req.body);
        await user.save()
            .then(result => {
                res.status(201).json(result);
            })
    }));

    router.put('/foobars', asyncHandler(async (req, res) => {
        logger.log('info', 'Update a foo');
        await User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
            .then(result => {
                res.status(200).json(result);
            })
    }));

    router.delete('/foobars/:id', asyncHandler(async (req, res) => {
        logger.log('info', 'Deleting foo %s', req.params.id);
        await User.remove({ _id: req.params.id })
            .then(result => {
                res.status(200).json(result);
            })
    }));
};

