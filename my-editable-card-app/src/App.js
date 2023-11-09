import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css'; // Make sure to include the CSS from your previous HTML

function App() {
  // Function to handle the end of a drag event
  const onDragEnd = (result) => {
    // Logic to reorder the list and update the state goes here
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Draggable key="1" draggableId="draggable-1" index={0}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  <div className="card">
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
