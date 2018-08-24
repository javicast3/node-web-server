const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  describe('#add', ()=>{
    it('should add two numbers', () => {
      var res =  utils.add(33,11);
      expect(res).toBe(44).toBeA('number');

        //if (res !== 44){
        //  throw new Error(`Expected 44, but got ${res}`);
      //}
    });
    it('should async add two numbers',(done) => {
      utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });


  it('square a number', () => {
    var res =  utils.square(3);
    expect(res).toBe(9).toBeA('number');

  });

  it('shuould verify first and last names are set', () => {
    var user = {
      location : 'Capital',
      age : 35
    };
     var res = utils.setName(user,'Javier Castillo');
    expect(res).toInclude({
      firstName : 'Javier',
      lastName : 'Castillo'
    });
  });

});
