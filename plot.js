Direction = { 
    Horizontal: "flex-row",
    Vertical: "flex-col"
}

class RecursivePlot {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    draw(node, isometric) {
        const __draw = (node, element, direction) => {
            // Alternate between the direction.
            direction = direction == Direction.Horizontal
                ? Direction.Vertical
                : Direction.Horizontal;

            // Create a div for each child node, and recursively call
            // this function.
            for (let child of node.children) {
                const div = document.createElement('div');
                div.classList.add('node');
                div.classList.add(direction);
                element.appendChild(div);
                __draw(child, div, direction);
            }

            // Create a label for the name of the node.
            const label = document.createElement('div');
            label.classList.add('label');
            element.appendChild(label);
            label.innerHTML = node.name;

            // If the node doesn't have any children, indicate
            // that this node is a leaf.
            if (node.children.length == 0) {
                label.classList.add('node-leaf');
            }
        }

        // Default direction to start with (sets flex-direction).
        const defaultDirection = Direction.Vertical;

        // Create the container for the root node.
        const container = document.createElement('div');
        container.classList.add('node');
        container.classList.add(defaultDirection);
        this.element.appendChild(container);

        if (isometric) {
            container.classList.add('isometric');
        }

        __draw(node, container, defaultDirection);
    }
}