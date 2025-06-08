import { useParams } from "react-router";
import { fetchGraphFx } from "./SearchPage/store/actions";
import { useEffect, useState } from "react";
import CytoscapeComponent from 'react-cytoscapejs';
import fcose from 'cytoscape-fcose';
import type { ElementDefinition } from "cytoscape";
import cytoscape from "cytoscape";

cytoscape.use(fcose);

export const GraphPage = () => {
    const { id } = useParams();
    const [graphElements, setGraphElements] = useState<ElementDefinition[] | null>(null);
    useEffect(() => {
        if (id) fetchGraphFx({ id }).then((data) => {
            const edges = data.edges.map(edge => ({ data: { source: edge[0], target: edge[1] } }))
            const nodes = data.nodes.map(node => ({ data: { ...node, id: node.paperId } }))
            setGraphElements([...nodes, ...edges])
        })
    }, [])
    console.log(graphElements)
    return <div>{graphElements && <CytoscapeComponent stylesheet={[
        {
            selector: 'node',
        style: {
            'label': 'data(title)',
        'width': 'mapData(citationCount,0,500,100,200)',
        'height': 'mapData(citationCount,0,500,100,200)',
        'font-size': '8px',
        'font-family': 'system-ui',
        'background-color': 'mapData(year,2000,2025,rgb(204, 205, 255),rgb(37, 41, 253))',
        'text-wrap': 'wrap',
        'text-valign': 'center',
        'font-weight': '500',
        'text-max-width': '1200px',
        'border-width': '2px',
        }
      }, {
            selector: 'edge',
        style: {
            'width': '1px',
        }
      },
        {
            selector: 'node.highlight',
        style: {
            'border-color': 'black',
        'border-width': '2px'
            }
        },
        {
            selector: 'node.semitransp',
        style:{'opacity': '0.5' }
        },
        {
            selector: 'edge.highlight',
        style: {'width': '2px','line-color' : 'black', }
        },
        {
            selector: 'edge.semitransp',
        style:{'opacity': '0.2' }
        },
        {
            selector: 'node.active',
        style: {
            'border-color': 'black',
        'border-width': '4px'
            }
        },
        {
            selector: 'edge.active',
        style: {
            'line-color' : 'black',
        'width': '4px',
            }
        },
        {
            selector: 'node.tapped',
        style: {
            'font-size': '90px',
            }
        },
    ]} elements={graphElements} style={{ width: '600px', height: '600px' }} layout={{ name: 'fcose' }}/>}</div>
}