//¿Qué es un hash?

//Según la definición de Kaspersky:

//“Una función criptográfica hash- usualmente conocida como “hash”-
//es un algoritmo matemático transforma cualquier bloque arbitrario de datos en una nueva serie de caracteres con una longitud fija. Independientemente de la longitud de los datos de entrada, el valor hash de salida tendrá siempre la misma longitud.”.
//En pocas palabras, un hash es un string aleatorio que se genera a partir de un string que le pasamos nosotros, este string que se genera tendrá una longitud fija, no importa si el string que nosotros le pasamos es muy largo.

//El hash se suele usar mucho al momento de encriptar contraseñas, y la forma de calcularlos es mediante un algoritmo matemático 😉

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //metodo para agregar un elemento al hash table
  set(key, value) {
    const address = this.hashMethod(key);

    //si no existe la dirección generamos un array nuevo
    if (!this.data[address]) {
      this.data[address] = [];
    }
    //colición
    //en caso de que exista ya una dirección no queremos borrar la información que ya existe, si no guardaremos un nuevo array dentro de la dirección
    this.data[address].push([key, value]);

    return this.data;
  }

  //metodo para obtener el valor del hashtable
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  }
  //obtner todos los keys
  getKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }
  //Eliminar algun elemento pasando su key
  remove(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedValue = this.data[address][i];
          this.data[address].splice(i, 1);
          return deletedValue;
        }
      }
    }
    return undefined;
  }
}
const myHashTable = new HashTable(50);
