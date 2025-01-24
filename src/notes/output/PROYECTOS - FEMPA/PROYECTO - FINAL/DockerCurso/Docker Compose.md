es un archivo .yml que contiene la configuracion de neustro contenedores:

Primero le decimos la version de nuestro docker:

version: "x.x"

se puede colocar cualquiera ya sea la uno mas basica la 2 un poco mas nueva y la 3 que contiene caracteristicas mas avznadas

seguido de esto debemos decirle que contenedores son los que queremos usar:

```yml
version: "3.9"
services:
  granja:
  mysqlss:
```

Dentro services se menciona dentro de cada contenedor tenemos difrentes configuraciones:

- build: para decirle donde esta el archivo dockerfile de nuestro proyecto generalmente es "." para decirle que esta en la misma ruta
- ports: puertos que queramos usar. [[Port Mapping]] usamos "" y dentro el puerto, podemos indicar todos los puertos que queramos
- links: le indicamos que otros contenedores trabaja nuestra aplicacion, los nombres de contenedores no usamos " " para indicarlo sin ella.
- image: le indicamos en que images estan basadas


Ejemplo de uso de todo:
```yml
version: "3.9"
services:
  granja:
    build: .
    ports:
      - "3000:3000"
    links:
      - mysqlss
  mysqlss:
    image: mysql
    ports:
      - "27000:27000"
    environment:
      - MYSQL_ROOT_PASSWORD=1234
```

Despues para poder ejeutar nuestro yaml tenemos el comando:

- docker compose up
- docker compose down: para elimanr todas las images, red y conenedores que alla creado nuestro docker