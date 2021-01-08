//¿Qué es un array?

//Los arrays son una colección de información que se puede ver de la siguiente forma

//array
//0:diego
//1:Karen
//2:hebert
//3:lucero
//4:mateo
//etc

//Los arrays se les conoce en otros lenguajes de programación como listas.
//Un array se genera un indice para la información que estamos guardando.

// const array = ["hebert", "mrian", "yahayra"];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //obtener algun elemento del array mediante su indice
  get(index) {
    return this.data[index];
  }

  //agregar elemento al array
  push(item) {
    this.data[this.length] = item;
    this.length += 1;
    return this.data;
  }

  //eliminar el ultimo elemento del array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return lastItem;
  }

  //eliminar algun elemento del array a travez del indice
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  //obtener el indice  - eliminar y reemplazar
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length -= 1;
  }

  //eliminar el primer elemento del array
  shift() {
    return this.delete(0);
  }
}

const myArray = new MyArray();
