import { useState, useCallback, useEffect } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useSelector, useDispatch } from "react-redux";
import reactFlowUtils from "../../utils/reactFlowUtils";
import CustomParentNode from "../ReactFlowCustomNodes/CustomParentNode";
import stringUtils from "../../utils/stringUtils";
import { setRoadMap } from "../../features/groqSlice";
import ModalWrapper from "../Widgets/ModalWrapper";
import ResourceModal from "../Modals/ResourceModal";

const initBgColor = "#F5EFFF";

const nodeTypes = {
  selectorNode: CustomParentNode,
};

const initialNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
];

function RoadMapCanvas() {
  const roadMap = useSelector((state: any) => state.groq.roadMap);
  const dispatch = useDispatch();

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [selectedNodeResource, setSelectedNodeResource] = useState([]);

  useEffect(() => {
    processRoadMap(roadMap);
  }, [roadMap]);

  useEffect(() => {
    extractDataFromUrl();
  }, []);

  const processRoadMap = (roadmap: any[]) => {
    const { childrenNodes, parentNodes } = reactFlowUtils.createNodes(roadmap);
    const tempEdges = reactFlowUtils.createEdges(childrenNodes, parentNodes);

    setNodes([...childrenNodes, ...parentNodes]);
    setEdges(tempEdges);
  };

  const onNodesChange = useCallback((changes: any) => {
    setNodes((nds) => {
      return applyNodeChanges(changes, nds);
    });
  }, []);
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const handleNodeClick = (event: any, node: any) => {
    event.preventDefault();
    setSelectedNodeResource(node.resourceUrls);
    setShowResourceModal(true);
  };

  // extract encoded data from url if any
  const extractDataFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get("data");
    if (encodedData && encodedData.length > 0) {
      const decodedData = stringUtils.decodeFromLzString(encodedData);
      const parsedData = JSON.parse(decodedData);
      window.history.replaceState({}, document.title, window.location.pathname);

      dispatch(setRoadMap(parsedData));
    }
  };

  return (
    <div className="h-screen mt-10">
      {showResourceModal ? (
        <ModalWrapper>
          <ResourceModal
            click={() => setShowResourceModal(false)}
            data={selectedNodeResource}
          />
        </ModalWrapper>
      ) : null}
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        edges={edges}
        nodeTypes={nodeTypes}
        style={{ background: initBgColor }}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default RoadMapCanvas;
