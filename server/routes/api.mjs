import Router from '@koa/router';
import playerController from '../controllers/playerController.mjs';
import roomController from '../controllers/roomController.mjs';
import itemController from '../controllers/itemController.mjs';
import monsterController from '../controllers/monsterController.mjs';

const router = new Router();

// Player Routes
router.get('/api/players', playerController.getAllPlayers);
router.get('/api/players/:id', playerController.getPlayerById);
router.post('/api/players', playerController.createPlayer);
router.put('/api/players/:id', playerController.updatePlayer);
router.delete('/api/players/:id', playerController.deletePlayer);

// Room Routes
router.get('/api/rooms', roomController.getAllRooms);
router.get('/api/rooms/:id', roomController.getRoomById);
router.post('/api/rooms', roomController.createRoom);
router.put('/api/rooms/:id', roomController.updateRoom);
router.delete('/api/rooms/:id', roomController.deleteRoom);

// Item Routes
router.get('/api/items', itemController.getAllItems);
router.get('/api/items/:id', itemController.getItemById);
router.post('/api/items', itemController.createItem);
router.put('/api/items/:id', itemController.updateItem);
router.delete('/api/items/:id', itemController.deleteItem);

// Monster Routes
router.get('/api/monsters', monsterController.getAllMonsters);
router.get('/api/monsters/:id', monsterController.getMonsterById);
router.post('/api/monsters', monsterController.createMonster);
router.put('/api/monsters/:id', monsterController.updateMonster);
router.delete('/api/monsters/:id', monsterController.deleteMonster);

export default router;
