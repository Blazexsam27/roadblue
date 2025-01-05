import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import Node from "../Widgets/Node";

export default memo(
  ({ data, isConnectable }: { data: any; isConnectable: any }) => {
    return (
      <>
        <Handle
          type="target"
          id="left-target"
          position={Position.Left}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
        <div className="flex flex-col items-center justify-center w-40 min-h-7 max-h-max  space-y-8">
          <Node text={data.label} />
        </div>
        <Handle
          type="source"
          position={Position.Right}
          id="right-source"
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="bottom-source"
          isConnectable={isConnectable}
        />
      </>
    );
  }
);
