Es el que estrae los datos y dice donde van, que se van usar en el [Recicly View](Recicly%20View.md)

Para usarlo extendemos de RecyclerView,Adapter \< NombreDeLaClaseHolder>

Ejemplo:

````kotlin
package com.example.estudioandroid.todoapp  
  
import android.view.ViewGroup  
import androidx.recyclerview.widget.RecyclerView  
  
class CategoryAdapter (private val categies:List<TaskCategory>):RecyclerView.Adapter<CatagoryViewholder>(){  
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CatagoryViewholder {  
        TODO("Not yet implemented")  //Crea en viewHolder
    }  

	override fun getItemCount(): Int = categies.size //Retorna el tamaño de la lista
    
    override fun onBindViewHolder(holder: CatagoryViewholder, position: Int) {  
        TODO("Not yet implemented")  //Coloca la informacion en vieHolder Cread
    }  
  
  
}
````

Antes de crear viewHolder debemos tener el layout del item

Por lo que debemos crear un xml con el diseño del ítem que va repetir

````kotlin

override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CatagoryViewholder {  
    val view = LayoutInflater.from(parent.context).inflate(R.layout.item_task_category,parent,false)  
    return CatagoryViewholder(view)  
}  
````

En este devemos incializar una view que le pasaremos de parametro a nuestro holder para que la pinte

Layput Infalte busacr xml con item que allamaos creado como estamos en otro contexto no podemos usar this debemos decir contexto padre y R en debe busacr por id buscamos por layout, entrando en el directorio layout y buscando el nombre que le digmos

````kotlin
override fun onBindViewHolder(holder: CatagoryViewholder, position: Int) {  
    holder.render(categories[position])  
}
````

Este recorre dentro de nuestra lista por detrás y ira pintando con la función render que nosotros creamos en nuestro [holder](holder.md)
