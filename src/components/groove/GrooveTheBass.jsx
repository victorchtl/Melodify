import { Layer, Rect, Stage } from "react-konva"
import GrooveNoteItem from "./GrooveNoteItem";
import { useRef, useState } from "react";



function GrooveTheBass() {

    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

    const steps = new Array(32).fill([])

    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(100);

    const handleDragEnd = (e) => {
        const node = e.target;
        setWidth(node.width());
        setHeight(node.height());
    };

    const handleDragMove = (e) => {
        const node = e.target;
        const scaleX = node.scaleX();
        node.scaleX(1);
        node.width(width * scaleX);
    };


    return (
        <Stage width={800} height={400} style={{ background: 'lime' }}>
            <Layer>
                <Rect
                    x={100}
                    y={100}
                    width={width}
                    height={height}
                    draggable
                    fill="blue"
                    onDragEnd={handleDragEnd}
                    onDragMove={handleDragMove}
                    dragBoundFunc={(pos) => ({
                        x: pos.x,
                        y: 100, // Empêche le déplacement vertical du rectangle
                    })}
                    transformsEnabled="position"
                    resizable
                />

            </Layer>
        </Stage>
    )
}

export default GrooveTheBass