//BinarySearchTree

//Los arboles son una estructura de datos que puede ser lineal o no ( ahora lo vemos),
//los arboles tienen una estructura con nodos que estos representan ser los hijos

//Por favor, no te asustes al llegar a esta clase, es muy sencillo:
//.
//Un Binary Search Tree básicamente costa de un elemento root (El elemento padre del que todos descienden).
//Es a partir de ese elemento en donde se empieza la búsqueda.
//.
//La condición es simple, un elemento únicamente puede tener dos descendientes,
//no más. Los descendientes que son mayores que el elemento padre se colocan del lado derecho
// y los descendientes que son menores se colocan del lado izquierdo, simple, ¿verdad?
//.
//Para buscar en un Binary Search Tree simplemente tienes que preguntarte:
//¿Este elemento es mayor o menor que el que estoy buscando? Ohh es mayor,
//entonces me voy para la izquierda, y así sucesivamente hasta que encuentres el elemento que estabas buscando.

//cada nodo debe cumplir esta logica
//lado izquiero disminuyendo - lado derecho aumentando
//      10
//   4      20
// 2   8   17  170

//metodos
//search - buscar un nodo
//insert - insertar un nodo
//delete - borrar un nodo

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySeachTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  search(value) {
    let firstNode = this.root;
    while (true) {
      if (firstNode.right === null && firstNode.left === null) {
        if (value !== firstNode.value) {
          return "No esta en el arbol";
        }
      }
      if (value === firstNode.value) {
        return firstNode;
      } else if (value < firstNode.value) {
        firstNode = firstNode.left;
      } else {
        firstNode = firstNode.right;
      }
    }
  }
}

const tree = new BinarySeachTree();
