Es una vista padre de todas, que recicla las vista

Es una forma de reciclar componente y no malgastar tantos recursos para mostrar un mismo elemento tanta veces 

dentro de esas vistas pueden haber img view o text view

La unión de varias vistas le llaman "Listas"  

En memoria se guardan las instancia de las vistas. y sobrescriba en lo mismos para no volver a ocupar memoria de nuevo por lo que ahorra memoria


Para trabajar con el debemos colocar en [[PROGRAMACION-DE-MULTIMEDIA-Y-DISPOSITIVOS-MOVILES/Curso_android_studio/xml]] principal ricibleView compoenente que lo asocie después decidir su tamaño debemos colocar un id para poder trabajar con el en nuestro código.

Para usar el componten ricvlerView debemos darle un [[Adapter]] que este le dice y le da la informacion que debe colcoar en nuestro componente y el [[holder]] es la clase que lo pinta

En nuestro activyt main inicializamos un adapter una vez configurados estos para poder usarlo