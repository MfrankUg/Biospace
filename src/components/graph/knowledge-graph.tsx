'use client';

import React, { useMemo } from 'react';
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  type Node,
  type Edge,
} from 'reactflow';
import 'reactflow/dist/base.css';
import type { Publication } from '@/lib/types';
import { ElkNode } from './elk-node';

type KnowledgeGraphProps = {
  publications: Publication[];
};

const nodeTypes = {
  elk: ElkNode,
};

export function KnowledgeGraph({ publications }: KnowledgeGraphProps) {
  const { nodes, edges } = useMemo(() => {
    const publicationNodes: Node[] = [];
    const topicNodes = new Map<string, Node>();
    const organismNodes = new Map<string, Node>();
    const edges: Edge[] = [];

    const position = { x: 0, y: 0 };

    publications.forEach((pub) => {
      const pubId = `pub-${pub.id}`;
      publicationNodes.push({
        id: pubId,
        data: { label: pub.title },
        position,
        type: 'elk',
        style: { 
            backgroundColor: 'hsl(var(--secondary))', 
            color: 'hsl(var(--secondary-foreground))',
            width: 180,
        },
      });

      const topicId = `topic-${pub.topic}`;
      if (pub.topic !== 'N/A' && !topicNodes.has(topicId)) {
        topicNodes.set(topicId, {
          id: topicId,
          data: { label: pub.topic },
          position,
          type: 'elk',
          style: { backgroundColor: 'rgb(96 165 250)', color: 'white', width: 120 },
        });
      }

      if (pub.topic !== 'N/A') {
        edges.push({
          id: `${topicId}-${pubId}`,
          source: topicId,
          target: pubId,
          animated: false,
          style: { stroke: 'hsl(var(--border))' },
        });
      }
      
      const organismId = `org-${pub.organism}`;
      if (pub.organism !== 'N/A' && !organismNodes.has(organismId)) {
        organismNodes.set(organismId, {
          id: organismId,
          data: { label: pub.organism },
          position,
          type: 'elk',
          style: { backgroundColor: 'rgb(192 132 252)', color: 'white', width: 120 },
        });
      }
      
      if (pub.organism !== 'N/A') {
        edges.push({
          id: `${pubId}-${organismId}`,
          source: pubId,
          target: organismId,
          animated: false,
          style: { stroke: 'hsl(var(--border))' },
        });
      }
    });

    const allNodes = [
      ...publicationNodes,
      ...Array.from(topicNodes.values()),
      ...Array.from(organismNodes.values()),
    ];

    return { nodes: allNodes, edges };
  }, [publications]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitView
      className="bg-background"
    >
      <Controls />
      <MiniMap nodeStrokeWidth={3} zoomable pannable />
      <Background color="hsl(var(--border))" gap={16} />
    </ReactFlow>
  );
}
