import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

function App() {
  // Function to handle the end of a drag event
  const onDragEnd = (result) => {
    // You can implement the logic to reorder the list and update the state here
    // For now, we'll just log the result for demonstration purposes
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          // Added className for styling droppable area
          <div {...provided.droppableProps} ref={provided.innerRef} className="droppable-container">
            <Draggable key="1" draggableId="draggable-1" index={0}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                >
                  <div className="card">
                    <div {...provided.dragHandleProps} className="card-handle">
                      Drag me
                    </div>
                    <div contentEditable="true" className="editable-text"></div>
                  </div>
                </div>
              )}
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
