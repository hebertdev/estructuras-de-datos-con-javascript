//Queues

//Una cola o queue es una estructura de datos muy similar a una Pila.
//Cuando usamos una Pila, ésta opera con una modalidad LIFO (Last In First Out),
//mientras que con una Cola es FIFO (First In First Out), es decir, siempre el primer elemento que agreguemos,
//será el primero que saquemos de ella.

//Ejemplos
//Ejemplo: Un escenario común es cuando vamos al banco,
//Llegamos y lo primero que haces es tomar un turno,
//inmediatamente nos damos cuenta que ya había 10 personas primero que tú por lo que automáticamente
//deduces que ellos serán atendidos primero que tú.
//Si nos damos cuenta en este escenario
//el primer cliente que llego y solicito un turno sera el que sea atendido primero y tú que llegaste al último serás atendido hasta el final.

//Metodos
// enqueue - agregar un elemento al final de la linea
// dequeue - remover al primer elemento de la  linea
// peek - Tomar el primer elemento de la lista

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length += 1;
    return this;
  }

  dequeue() {
    const eliminado = this.first;
    if (this.length === 0) {
      return console.error("no hay nada que eliminar");
    } else if (this.length === 1) {
      this.first = eliminado.next;
      this.last = null;
      this.length -= 1;
      return eliminado;
    }

    this.first = eliminado.next;
    this.length -= 1;
    return eliminado;
  }
}

const myQueue = new Queue();
