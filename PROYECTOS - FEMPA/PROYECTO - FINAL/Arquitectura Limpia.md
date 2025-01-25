En general es mejor aplicar la aruitectura limpia en el backend pero en froned tenemos framewoekr que nos obligan a trabajn de una forma o otra

Pero en fron end podemos usa:

* core: Nucleo o logica de nuestro fron y tenemos toda la funcionaliada sin dependen de otras carpteas
* ui: capa que contiene todo lo relacionado al framework y la interfaz

### ¿Qué contiene el CORE?

Contiene el:

* model: contiene entidadd(clases) y los objectos de nuestra aplcaicsion y que no esten ligados al 100% a las API
* services: Clases que brindadn funcionaldiad a nuestra aplicacion
* usecases: refleja las funionalidad de la aplicacion con un metodo llamado execute()  o run()
* repositories: Todas las clases encargadas de la conexion con las APIs externas de servidor.
* blocs: clases que unen la capa de ui y el core prubea las funciones sin usar el ui

### ¿Qué contiene el UI?

Contiene el:

* Pages: Componentes que esten relacionado con el router de nuestra aplicacion
* smarts: usa el blocs para conectar con el core
* dumbs: Componentes que se apoyan los smarts para crear la interfaz grafica adecuada a nuestra aplicacion
