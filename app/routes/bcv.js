import express from 'express' 

import { getPriceUsdToBs, getPriceEuroToBs, getPriceCnyToBs, updagetPriceTryToBsteUser, getPriceEuroToBs } from '../controllers/bcvController';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;