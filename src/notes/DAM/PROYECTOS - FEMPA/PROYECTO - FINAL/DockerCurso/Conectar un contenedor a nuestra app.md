Debemos crear una carpeta que si o si se debe llamar DockerFile

debemos decir de que tipo es una image:
- From < tipo de aplicacion >: node , python ,etc. Seguido de : podemos indicar la version que este disponible docker hub.
- RUN mkdir -p /home/app: es una ruta de nuestro contenedor y podremos indicar que es el home o index de nuestra aplicacion
- COPY . /home/app es desde donde estamos copiamos en la ruta home hasta app  con eso podemos copiar el directorio de nuestro programa 
- EXPOSE < puerto del contendor>: se expone un puerto del contendor que puede ejecutarse para poder usarlo
- comadon para ejcutar nuestro servicio: puede ser python y el nombre del apalcaicion y ruta o node si es de node y de otra dependiendo de que tecnologia sea se usara una o otra.
- CMD ["node","/home/app/index.js"] este es un ejemplo

Podemos usar cualquier comando de linux