const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('Should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();

  });
  it('Should call saveUser with user object', () => {
    var email = 'javi@example.com'
    var password = '123';
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});

  });
});