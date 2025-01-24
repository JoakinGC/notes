Es el que le dice al [Recicly View](Recicly%20View.md) como pintar los elelemntos

Generalmente hacemps que here de ReciclerView.ViewHolder(Vista) , quedano de la siguente manera:

````kotlin
package com.example.estudioandroid.todoapp  
  
import android.view.View  
import androidx.recyclerview.widget.RecyclerView  
  
class CatagoryViewholder (view:View): RecyclerView.ViewHolder(view){  
  
  
}
````

Dentro holder creamos una funciona qe normalemente se llama render() y que recive nuestra clase creadad [SealedClass](Curso_android_studio\SealedClass.md)
