//🦁 Linked List

//Linked List son simplemente un conjunto de nodos ordenados que contienen los valores que necesitemos
//(numbers, strings, boolean, etc). Cada uno tiene un valor y una referencia a un siguiente nodo.

//---------------------
//metodos single linked list
//prepend | agregar un Nodo al inicio
//append | agregar un nodo al final
//lookup/search | buscar un nodo
//insert | insertar un no en la lista
//delete | borrar un nodo

//la forma de hacer estos metodos es distinta  al de los arrays o hashTables .

//ejemplos de linked List -  paginas del browser

//Singly linked List
//las Linked List guardan los nodos aleatoriamente en la memoria,
//sí, aunque esta estructura de datos solo conoce a su siguiente nodo,
//los nodos pueden estar guardados aleatoriamente en la memoria porque cada nodo sabe
//cuál es la referencia de memoria del siguiente nodo

// 1 --> 2 --> 3 --> 4 --> 5 --> null

//let singlyLinkedList = {
//  head: {
//    value: 1,
//    next: {
//      value: 2,
//      next: {
//       value: 3,
//        next: {
//          value: 4,
//         next: {
//            value: 5,
//            next: null,
//          },
//        },
//      },
//    },
//  },
//};

//clase del modelo de un nodo
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//clase del Modelo de la list de linkedList
class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;

    this.length = 1;
  }

  //metodo para añadir un nodo a la list de linked List
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;

    return this;
  }
  //metodo para añadir un nodo al Inicio de la lista (head)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  //metodo para agregar un nodo al medio de la lista
  insert(index, value) {
    if (position === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length += 1;

    return this;
  }

  //metodo para obtener el indice de un nodo
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  //metodo para eliminar un nodo a travez de su indice
  delete(index) {
    if (index <= 0) return this.shift();
    if (index >= this.length) return this.pop();
    const prevDeletedNode = this.getTheIndex(index - 1);
    prevDeletedNode.next = prevDeletedNode.next.next;
    this.length--;

    return this;
  }

  //metodo para eliminar el primer nodo de la lista
  shift() {
    const secondNode = this.head.next;
    this.head = secondNode;
    this.length--;

    return this;
  }

  //metodo para eliminar el ultimo nodo de la lista
  pop() {
    const prevLastNode = this.getTheIndex(this.length - 2);
    this.tail = prevLastNode;
    prevLastNode.next = null;
    this.length--;

    return this;
  }
}

let myLinkedList = new MySinglyLinkedList(1);
