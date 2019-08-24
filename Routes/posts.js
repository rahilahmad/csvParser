const express = require('express');
const router = express.Router();
const Post = require('../Models/posts');
const csvFilePath = 'record.csv';
const csv = require('csvtojson');

router.post('/', (req, res) => {
    csv()
        .fromFile(__dirname + '/record.csv')
        .then((jsonObj) => {
            jsonObj.map((object) => {
                const post = new Post({
                    servings: object.servings,
                    servingsize: object.servingsize,
                    shipping_height: object.shipping_height,
                    shipping_length: object.shipping_length,
                    shipping_width: object.shipping_width,
                    volume: object.volume,
                    volumeunit: object.volumeunit,
                    warning: object.warning,
                    weight: object.weight,
                    id: object.id,
                    sdescription: object.sdescription
                })
                post.save().then(data => {
                    res.json(data);
                }).catch(err => {
                    res.json({ message: err })
                })
            })
        })


})

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post)
    } catch (err) {
        res.json({ message: err })

    }
})

router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        res.json(post)
    } catch (err) {
        res.json({ message: err })

    }
})

router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({
            _id: req.params.id
        });
        res.json(removePost)
    } catch (err) {
        res.json({ message: err })

    }
})

router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({ _id: req.params.id }, {
            $set: {
                servingsize: req.body.servingsize
            }
        });
        res.json(updatePost)
    } catch (err) {
        res.json({ message: err })

    }
})

module.exports = router;