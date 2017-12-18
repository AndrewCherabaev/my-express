const router = require('express').Router()
const db = require('../db')

router.get('/', (req, res, next) => {
    db.query('SELECT * FROM users').then((db_result) => {
        res.render(
            'users/index',
            {
                title: 'Users page',
                users: db_result.rows
            }
        )
    }).catch((db_error) => {
        console.error(db_error)
    })
})

router.get('/:id', (req, res, next) => {
    db.query('SELECT * FROM users WHERE id=$1 LIMIT 1', [req.params.id]).then((db_result) => {
        console.log('db_result', db_result.rows[0]);
        res.render(
            'users/detail',
            {
                title: 'User detail page',
                user: db_result.rows[0]
            }
        )
    }).catch((db_error) => {
        console.error(db_error)
    })
})

module.exports = router
