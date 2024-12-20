import { useState, memo, Suspense, lazy } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Typewriter from 'react-typewriter-effect';
// Carga perezosa de los iconos
const FaLaptopCode = lazy(() => import('react-icons/fa').then((mod) => ({ default: mod.FaLaptopCode })));
const FaServer = lazy(() => import('react-icons/fa').then((mod) => ({ default: mod.FaServer })));
const FaShieldAlt = lazy(() => import('react-icons/fa').then((mod) => ({ default: mod.FaShieldAlt })));
const FaDatabase = lazy(() => import('react-icons/fa').then((mod) => ({ default: mod.FaDatabase })));

function Rama() {
  const [items, setItems] = useState([
    { id: 'ciberseguridad', title: 'Ciberseguridad', icon: <FaShieldAlt />, description: 'Con experiencia utilizando herramientas como Kali Linux y Ubuntu Server, implementando medidas de seguridad.' },
    { id: 'admin_sistemas', title: 'Administración de Sistemas', icon: <FaServer />, description: 'Gestión de servidores web con Apache2 y Nginx, optimización de servidores y soluciones de alta disponibilidad.' },
    { id: 'bases_datos', title: 'Bases de Datos', icon: <FaDatabase />, description: 'Manejo de bases de datos como MySQL, Redis y MongoDB. Optimización de consultas y gestión de índices.' },
    { id: 'desarrollo_web', title: 'Desarrollo Web', icon: <FaLaptopCode />, description: 'Desarrollo de aplicaciones web utilizando React, Node.js y Express, y creación de APIs RESTful.' },
  ]);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination || destination.index === source.index) return;

    const itemsCopy = Array.from(items);
    const [removed] = itemsCopy.splice(source.index, 1);
    itemsCopy.splice(destination.index, 0, removed);

    setItems(itemsCopy);
  };

  return (
    <div className="rama-container">
      {/* Título con el efecto de máquina de escribir */}
      <h2>
        <Suspense fallback={<div>Cargando efecto...</div>}>
          <Typewriter
            text="Áreas de Trabajos"
            cursorColor="black"
            speed={100}
            typingDelay={1000}
          />
        </Suspense>
      </h2>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <div
              className="rama-items"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Suspense fallback={<div>Cargando iconos...</div>}>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        className="rama-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="rama-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
              </Suspense>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default memo(Rama);
