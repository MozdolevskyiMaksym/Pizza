/* eslint-disable no-console */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  getChildren() {
    return this.children;
  }
}

const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
root.addChild(child1);
root.addChild(child2);
console.log(root.getChildren()); // Результат: [TreeNode { value: 2, children: [] }, TreeNode { value: 3, children: [] }]

// В этом примере мы определяем класс TreeNode, который представляет узел в дереве.
// Каждый узел имеет значение и может иметь дочерние узлы.
// Мы можем добавлять дочерние узлы к узлу с помощью метода addChild, и получать дочерние узлы узла с помощью метода getChildren.
// Мы создаем дерево, связывая узлы через их дочерние узлы.
