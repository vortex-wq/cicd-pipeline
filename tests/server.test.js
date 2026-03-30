const request = require('supertest');
const app = require('../server');

describe('Todo API', () => {
  beforeEach(() => {
    // Reset todos before each test
    app.locals.todos = [];
    app.locals.idCounter = 1;
  });

  it('should get all todos', async () => {
    const response = await request(app).get('/api/todos');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should add a new todo', async () => {
    const response = await request(app)
      .post('/api/todos')
      .send({ text: 'Test todo' });
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({ text: 'Test todo', completed: false });
  });

  it('should not add todo without text', async () => {
    const response = await request(app)
      .post('/api/todos')
      .send({});
    expect(response.status).toBe(400);
  });

  it('should toggle todo completion', async () => {
    const addResponse = await request(app)
      .post('/api/todos')
      .send({ text: 'Test todo' });
    const id = addResponse.body.id;

    const toggleResponse = await request(app)
      .put(`/api/todos/${id}`)
      .send({ completed: true });
    expect(toggleResponse.status).toBe(200);
    expect(toggleResponse.body.completed).toBe(true);
  });

  it('should delete a todo', async () => {
    const addResponse = await request(app)
      .post('/api/todos')
      .send({ text: 'Test todo' });
    const id = addResponse.body.id;

    const deleteResponse = await request(app)
      .delete(`/api/todos/${id}`);
    expect(deleteResponse.status).toBe(204);

    const getResponse = await request(app).get('/api/todos');
    expect(getResponse.body).toEqual([]);
  });
});