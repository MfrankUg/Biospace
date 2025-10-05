'use client';

import React, { useLayoutEffect, useState } from 'react';
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
import ELK, { type ElkNode as ElkLayoutNode, type LayoutOptions } from 'elkjs/lib/elk.bundled.js';

type KnowledgeGraphProps = {
  publications: Publication[];
};

const nodeTypes = {
  elk: ElkNode,
};

const elk = new ELK();

const elkLayoutOptions: LayoutOptions = {
  'elk.algorithm': 'layered',
  'elk.direction': 'RIGHT',
  'elk.layered.spacing.nodeNodeBetweenLayers': '100',
  'elk.spacing.nodeNode': '80',
};


const getLayoutedElements = (nodes: Node[], edges: Edge[], options: LayoutOptions): Promise<{ nodes: Node[], edges: Edge[] }> => {
  const graph: ElkLayoutNode = {
    id: 'root',
    layoutOptions: options,
    children: nodes.map((node) => ({
      ...node,
      width: node.style?.width as number || 180,
      height: node.style?.height as number || 50,
    })),
    edges: edges.map(edge => ({...edge, sources: [edge.source], targets: [edge.target]})),
  };

  return elk
    .layout(graph)
    .then((layoutedGraph) => ({
      nodes: layoutedGraph.children?.map((node) => ({
        ...node,
        // React Flow expects a position property on the node object
        // which contains the x and y coordinates.
        position: { x: node.x, y: node.y },
      })) as Node[],

      edges: layoutedGraph.edges as Edge[],
    }))
    .catch(console.error) as Promise<{ nodes: Node[], edges: Edge[] }>;
};

export function KnowledgeGraph({ publications }: KnowledgeGraphProps) {
  const [layoutedElements, setLayoutedElements] = useState<{ nodes: Node[], edges: Edge[] } | null>(null);

  useLayoutEffect(() => {
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
            height: 50,
            textAlign: 'center' as const,
        },
      });

      const topicId = `topic-${pub.topic}`;
      if (pub.topic !== 'N/A' && !topicNodes.has(topicId)) {
        topicNodes.set(topicId, {
          id: topicId,
          data: { label: pub.topic },
          position,
          type: 'elk',
          style: { backgroundColor: 'rgb(96 165 250)', color: 'white', width: 120, height: 50 },
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
          style: { backgroundColor: 'rgb(192 132 252)', color: 'white', width: 120, height: 50 },
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

    getLayoutedElements(allNodes, edges, elkLayoutOptions).then(setLayoutedElements);

  }, [publications]);

  if (!layoutedElements) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  return (
    <ReactFlow
      nodes={layoutedElements.nodes}
      edges={layoutedElements.edges}
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
