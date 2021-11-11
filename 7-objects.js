'use strict';

const fn = () => {
  const obj1 = { name: 'Alina' };//1
  let obj2 = { name: 'Vasya' };//2

  obj1.name = 'Bogdan'; //3
  obj2.name = 'Danya'; //4

  obj2 = { name: 'Bogdan Danya' };

};

fn();
module.exports = { fn };
