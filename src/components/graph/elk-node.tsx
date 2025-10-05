'use client';
import { Handle, Position, type NodeProps } from 'reactflow';

export function ElkNode({ data }: NodeProps) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md border-2 border-stone-400">
      <div className="text-sm font-bold">{data.label}</div>
      <Handle type="target" position={Position.Top} className="w-16 !bg-primary" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-primary" />
    </div>
  );
}
