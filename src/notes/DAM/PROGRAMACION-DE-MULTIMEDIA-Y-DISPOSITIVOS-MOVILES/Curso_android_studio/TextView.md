Componente para colocar texto

Tenemos propiedades como android:layout_width que es el ancho y la altura también es parecido

Y luego propiedades para a alinear el texto:

android:layout_gravity="center"

Otras propiedades:

- android:textSize:Tamaño de la letra Se puede colcoar dos valores a la vez ej: "top|center"
- android:text: El texto que contiene
- andorsStyle: el tipo de letra cursiva o demás

Dependiendo del componete padre que sea ya sea  FremeLayout, innerLayout o contraint Layout capa componete tendra diferentes formas de centrarlo lo recomendado es mejor usar contrsinaLayout

Si lo que queremos es que no se muestre el contenido del texto usamos tools:

````xml

<?xml version="1.0" encoding="utf-8"?>  
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"  
    xmlns:app="http://schemas.android.com/apk/res-auto"  
    xmlns:tools="http://schemas.android.com/tools"  
    android:layout_width="match_parent"  
    android:layout_height="match_parent"  
    tools:context=".firstapp.ResultActivity">  
  
  
    <TextView        android:layout_width="wrap_content"  
        android:layout_height="wrap_content"  
        tools:text="Esto es un ejemplo"  
        android:textSize="35sp"  
        android:textColor="@color/material_dynamic_primary50"  
        android:layout_gravity="center"/>  
</FrameLayout>
````


En el código de la activyty podemos usar nombreDeTextView.text = "Texto que queramos"

