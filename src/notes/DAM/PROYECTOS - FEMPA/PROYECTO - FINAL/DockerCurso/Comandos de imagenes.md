Listado y descrpcion de comandos:

- docker images: lista todas las imágenes
- docker pull < aplicacion que queremos> : < version que queramos>: por defecto coloca la ultima version
- docker image rm node:< version que queramos elmininar> : para ilimnar una imagen
-  docker build -t < nombre de aplicacion>: numero que queramos>  < ruta de nuestro proyecto >: sirve para conteruir una aplcacion con la lista de comandos que nosotros allamos hecho de [[Conectar un contenedor a nuestra app]]. Crea una imagen de nuestro proyecto
- 




Existen imagenes que necesitan [[variables de configuracion]] para poder funcionar las imagenes

- docker create --name mysqls -p 27070:27070 -e MYSQL_PASSWORD=simanadulto1J -e MYSQL_USER=javi mysql este es un ejemplo que usa variables de configuracion el parametro -e es para decirle a docker que es un variable 