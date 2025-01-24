Es un hook que a diferencia de [useState](useState.md) permite guardar el estado de una *variable* independiente de la renderización de [Componente Funcional](..\Componente%20Funcional.md) por lo que el componente puede renderizarse una vez y se mantiene independiente de la renderización

Normalmente se usa para controlar el estado de *DOM*.

````javascript
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
````

Ejemplo de control de estado sin usar
