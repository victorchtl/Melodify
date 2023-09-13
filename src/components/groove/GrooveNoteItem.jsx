/* eslint-disable react/prop-types */
import { Rect } from 'react-konva';

function GrooveNoteItem({ x, y, width, height, onDragEnd }) {

    const handleDragEnd = (e) => {
        const newX = Math.round(e.target.x() / 10) * 10;
        const newY = Math.round(e.target.y() / 10) * 10;
        onDragEnd(newX, newY);
    };

    return (
        <Rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill="blue"
            draggable
            onDragEnd={handleDragEnd}
        />
    )
}

export default GrooveNoteItem