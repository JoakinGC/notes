Listado y funcionamiento de comandos:

- docker create (opcional) --name < nombre del contenedor> < imagen que usemos> : crea un contenedor junto a una imagen que usemos. Este devuelve un id para poder ejecutar nuestro contenedor.
- docker container create < imagen que usaremos> otra manera de crear un contenedor
- docker start < id del container || nombre del contenodr>: iniciamos nuestro contenedor y devuelve el id de nuestro container.
- docker ps: devuelve todos los contenedores que esten ejecutandose
- docker stop < id de container>: detiene ese contenedor mas no elimina
- docker ps -a : devuelve todos los contenedores ya esten activos o no
- docker rm < nombre del container>: cuando listas los cotnendosres estos tienen un nombre debes colocarlo para poder elimarlo.
- docker create -p< puerto de nuestra maquina fisica que queramos usar> : (importante hay doble punto en el comanod) < puerto interno que usar docker > ... : crea un contenedor en el puerto especifico que nosotros queramos y elegimos el puerto del docker tambien, esto es llamado como [[Port Mapping]]
- docker  logs < nombre de contenedor>: este mostrar todos los logs que tenga ese contenedor
- docker logs --follow < nombre contenedor>: este sigue esperando y no permite escribir mas logs sino que queda a la espera de mas logs para salir se usa ctrl + c
- docker run < nombre de imagen> : Este es una combinacion de varios [[Comandos de imagenes]] y comandos de contendores:
	1. Si no encuentra la imagen la descarga
	2. Crea un contenedor
	3. Inicia contenedor
	4. Inicia el comando docker logs --follow
	5. Si salimos del comando tambien se detiene la ejecucion del contenedor
- docker run -d < nombre de imagen>: hace lo mismo que lo anterior pero sin logs y ni detener la ejecucion del contenedor. Esto se llama modo destapach por eso es "-d".
- docker run --name < nombre de contenedor> -p< puerto fisico o virtula nuestro > : < puerto interno de docker> -d (opcional) < nombre de imagen que queremos usar>: Este ejecuta lo mismo que run -d pero con [[Port Mapping]] y diciendole el nombre que nos interesa.
- 