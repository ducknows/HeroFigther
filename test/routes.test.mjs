import request  from 'supertest';
import app from '../server/index.mjs'; 
import { expect } from 'chai';


describe('API Routes', () => {
  // Player Routes
  it('should return a list of players', async () => {
    const response = await request(app).get('/api/players');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it.skip('should create a new player', async () => {
    const newPlayer = {
      email: 'testing@example.com',
      password: 'noteasypassword123',
    };
    const response = await request(app)
      .post('/api/players')
      .send(newPlayer);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('player_id');
    // Add more assertions as needed
  });

  // Add test cases for other Player routes (e.g., update, delete)

  // Room Routes
  it('should return a list of rooms', async () => {
    const response = await request(app).get('/api/rooms');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it('should create a new room', async () => {
    const newRoom = {
      description: 'A new room description',
    };
    const response = await request(app)
      .post('/api/rooms')
      .send(newRoom);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('room_id');
    // Add more assertions as needed
  });

  // Add test cases for other Room routes (e.g., update, delete)

  // Item Routes
  it('should return a list of items', async () => {
    const response = await request(app).get('/api/items');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it('should create a new item', async () => {
    const newItem = {
      name: 'New Item',
      energy: 10,
      skill: 5,
    };
    const response = await request(app)
      .post('/api/items')
      .send(newItem);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('item_id');
    // Add more assertions as needed
  });

  // Add test cases for other Item routes (e.g., update, delete)

  // Monster Routes
  it('should return a list of monsters', async () => {
    const response = await request(app).get('/api/monsters');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it('should create a new monster', async () => {
    const newMonster = {
      name: 'New Monster',
      energy: 50,
      skill: 8,
    };
    const response = await request(app)
      .post('/api/monsters')
      .send(newMonster);

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('monster_id');
    // Add more assertions as needed
  });

  // Add test cases for other Monster routes (e.g., update, delete)


});