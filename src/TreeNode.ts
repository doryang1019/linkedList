
import e = require("express");
import { isConstructorDeclaration, isTypeQueryNode, nodeModuleNameResolver } from "typescript";

export class Nodes {
  public data: string;
  public children: Nodes[];
  public parent: string; // can set to uuid
  constructor(data, parent?) {
    this.data = data;
    this.children = [];
    this.parent = parent ? parent.data : null;
  }
}

export class Tree {
  public root: any;
  constructor() {
    this.root = null;
  }
  public add(data, parent?) {
    const findParent = parent ? this.traverseBFS(parent) : null;
    const node = new Nodes(data, findParent);
    console.log('FINDPARENT', findParent);

    if (findParent) {
      findParent.children.push(node);
    } else {
      if (!this.root) {
        this.root = node;
      } else {
        return "error";
      }
    }
  }

  public traverseBFS(data) {
    const queue = [this.root]; // add parent node first
    while (queue.length) {
      const node = queue.shift(); // pop the first node
      if (node.data === data) {
        return node;
      } else {
        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
  }

}

export const listTree = (firstNode) => {

}



