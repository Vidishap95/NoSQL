const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    emoveFriend,
} = require ('../../controllers/user-controller');
const { remove } = require('../../models/Reaction');
const { route } = require('./thought-routes');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// export router
module.exports = router;