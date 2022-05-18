class Node {

    name = "Node";
    children = [];
    
    constructor(name) {
        this.name = name;
    }

    addNode(name) {
        const node = new Node(name);
        this.children.push(node);
        return node;
    }

    copy() {
        return JSON.parse(
            JSON.stringify(this)
        );
    }

}