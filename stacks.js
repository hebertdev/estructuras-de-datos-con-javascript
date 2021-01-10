// que es stacks

//Un stack basicamente es una pila,
//es decir, algo que estás apilando,
//lo primero que entra se queda hasta abajo y lo último que entra se queda hasta arriba,
//de ahí su nombre LIFO, Las In (El último que entra), First Out (Es el primero que sale).

//metodos

// pop - remover el ultimo elemento
// push - agregar un elemento al final
// peek - tomar al ultimo elemento de la linea

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.length) {
      console.error("There is no nodes in the stack.");
      return;
    }
    const topNode = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return topNode;
  }
}

const myStack = new Stack();
