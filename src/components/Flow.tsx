import React, { useCallback } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';
import * as _ from 'lodash';
import 'reactflow/dist/style.css';
import './Flow.css';

interface IFlow {
    setSelectedInfo: (data: any) => void;
}

function Flow(props: IFlow) {

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const addNode = () => {
        const lastNode = _.last(nodes);
        if (lastNode) {
            const newNode = {
                id: parseInt(lastNode.id) + 1 + '',
                data: {
                    label: 'Node ' + (parseInt(lastNode.id) + 1)
                },
                position: {
                    x: 100,
                    y: 100
                }
            }
            setNodes([...nodes, newNode]);
        } else {
            const newNode = {
                id: '1',
                data: {
                    label: 'Node 1'
                },
                position: {
                    x: 100,
                    y: 100
                }
            }
            setNodes([...nodes, newNode]);
        }
    }

    const selectNode = (event) => {
        const { setSelectedInfo } = props;
        const node = _.find(nodes, ['id', event.target.dataset.id]);
        setSelectedInfo(node);
    }

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <ReactFlowProvider>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={selectNode}
                >
                    <Controls position='bottom-right' />
                    <Background />
                </ReactFlow>
                <button className='add-node_button' onClick={addNode}>Add Node</button>
            </ReactFlowProvider>
        </div>
    );
}

export default Flow;
