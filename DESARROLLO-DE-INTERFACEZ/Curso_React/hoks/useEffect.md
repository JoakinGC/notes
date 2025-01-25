
````javascript
useEffect(() => ,[/*dependecies*/])
````

Se la pasa una dependencia, hook común, si no se coloca ninguna dependencia solo se ejecuta cuando se renderiza el componente

## Advertencias

* useEffect es un Hook, por lo que solo puede llamarlo en el nivel superior de su componente o en sus propios Hooks. No se puede llamar dentro de bucles o condiciones. Si lo necesita, extraiga un nuevo componente y mueva el estado a él.

* Si no estás tratando de sincronizar con algún sistema externo, probablemente no necesites un efecto.

* Cuando el modo estricto está activado, React ejecutará un ciclo adicional de configuración + limpieza solo para desarrollo antes de la primera configuración real. Se trata de una prueba de esfuerzo que garantiza que la lógica de limpieza "refleja" la lógica de configuración y que se detenga o deshaga lo que sea que esté haciendo la configuración. Si esto causa un problema, implemente la función de limpieza.

* Si algunas de las dependencias son objetos o funciones definidas dentro del componente, existe el riesgo de que hagan que el efecto se vuelva a ejecutar con más frecuencia de la necesaria. Para solucionar este problema, elimine las dependencias innecesarias de objetos y funciones. También puede extraer actualizaciones de estado y lógica no reactiva fuera de su efecto.

* Si tu efecto no fue causado por una interacción (como un clic), React generalmente permitirá que el navegador pinte la pantalla actualizada primero antes de ejecutar tu efecto. Si el efecto está haciendo algo visual (por ejemplo, colocar una información sobre herramientas) y el retraso es notable (por ejemplo, parpadea), reemplácelo por useLayoutEffect.useEffect

* Si su efecto es causado por una interacción (como un clic), React puede ejecutar su efecto antes de que el navegador pinte la pantalla actualizada. Esto garantiza que el resultado del efecto pueda ser observado por el sistema de eventos. Por lo general, esto funciona como se espera. Sin embargo, si debe aplazar el trabajo hasta después de pintar, como un , puede usar . Véase reactwg/react-18/128 para más información.alert()setTimeout

* Incluso si su efecto fue causado por una interacción (como un clic), React puede permitir que el navegador vuelva a pintar la pantalla antes de procesar las actualizaciones de estado dentro de su efecto. Por lo general, esto funciona como se espera. Sin embargo, si debe bloquear el navegador para que no vuelva a pintar la pantalla, debe reemplazarlo con useLayoutEffect.useEffect

* Los efectos solo se ejecutan en el cliente. No se ejecutan durante la representación del servidor.
