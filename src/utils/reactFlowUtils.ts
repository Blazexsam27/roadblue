import { MarkerType } from "@xyflow/react";

class ReactFlowUtils {
  markerStyle = {
    type: MarkerType.Arrow,
    width: 20,
    height: 20,
    color: "#FF0072",
  };
  markerStroke = {
    strokeWidth: 1,
    stroke: "#FF0072",
  };

  // method to create valid nodes for react flow
  createNodes = (roadmap: any[]) => {
    const childrenNodes: any[] = [];
    const parentNodes: any[] = [];
    let a = 0,
      b = 150,
      x = 0,
      y = 0;

    roadmap.forEach((node: any, index: number) => {
      // create parent id
      parentNodes.push({
        id: index.toString(),
        data: { label: node.data.label },
        position: { x, y },
        type: "selectorNode",
      });

      x += 300;
      // create child nodes with additional parentId field.
      node.data.children.map((child: string, childIndex: number) => {
        childrenNodes.push({
          id: `${index}-${childIndex}`,
          data: { label: child },
          position: { x: a, y: b },
          pid: index.toString(),
        });

        b = b + 150;
      });
      b = 150;
      a = x;
    });

    return { childrenNodes, parentNodes };
  };

  // method to create valid edges between nodes
  createEdges = (childrenNodes: any[], parentNodes: any[]) => {
    const edges: any[] = [];

    //  Edges between children
    childrenNodes.forEach((childNode: any) => {
      let val = childNode.id.split("-");
      let tId = `${val[0]}-${parseInt(val[1]) + 1}`;

      edges.push({
        id: `${childNode.pid}-${childNode.id}`,
        source: childNode.id,
        target: tId,
        label: "subtopic",
        type: "smooth",
        markerEnd: this.markerStyle,
        style: this.markerStroke,
      });
    });

    //  Edges between parent nodes
    parentNodes.forEach((parentNode: any, index: number) => {
      edges.push({
        id: `${parentNode.id}@${childrenNodes[index].id}`,
        source: JSON.stringify(index - 1),
        target: JSON.stringify(index),
        label: "Next",
        type: "smooth",
        markerEnd: this.markerStyle,
        style: this.markerStroke,
      });
    });

    // Edges between parent and children
    const tempGroup = childrenNodes.reduce((acc: any, item) => {
      if (!acc[item.pid]) {
        acc[item.pid] = [];
      }

      acc[item.pid].push(item);

      return acc;
    }, {});

    parentNodes.forEach((parentNode: any) => {
      edges.push({
        id: `${parentNode.id}@${tempGroup[parentNode.id][0].id}`,
        source: parentNode.id,
        target: tempGroup[parentNode.id][0].id,
        label: "Next",
        type: "smooth",
        sourceHandle: "bottom-source",
        markerEnd: this.markerStyle,
        style: this.markerStroke,
      });
    });

    return edges;
  };
}

export default new ReactFlowUtils();
