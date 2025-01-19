Lo mismo que [[MVC]] pero añadiendo y cambiaodo el controler con una API Rest

![[mvc-rest.png]]


MVC  tiene  ventajas que rest no tiene ademas combina cada uno ya que java no tinene asincorona


Primero entra en capa del controlador la petiicon del cliente y no la procesa ahi sino que se la pasa a la capa de Service que es la capa encaragda de la lógica.

Pero si necesita una peticion a la base de datos esa se la pasa a la capa repository controla la logica de la base de datos relacionada con la capa modelo que ahi conteine las entidades que se usan en nuestra base de datos

Una vez que obtine los datos se lo pasa a la capa Service y le la informacion procesada al Controlador y este le devuelve la informacion a la peticion en formato JSON 