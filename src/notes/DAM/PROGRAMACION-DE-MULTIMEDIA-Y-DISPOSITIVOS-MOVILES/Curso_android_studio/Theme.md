Es el [PROGRAMACION-DE-MULTIMEDIA-Y-DISPOSITIVOS-MOVILES/Curso_android_studio/xml](xml.md) que se ecneutnra dentro de res > values > themes

ahi podemos cotnrolar los diseños de la parte superior y el color de nuestra aplciaicokn en la parte superior, ademas dentro del mismo podemos generar atributos usando style y de ahi item con el atirubto name con nombre de la proipiedad que queramos remplazar:

````

<style name="ToDoSubtitle">  
    <item name="textAllCaps">true</item>  
    <item name="android:textColor">@color/subtitle_text</item>  
    <item name="android:layout_marginHorizontal">32dp</item>  
</style>
````

Y lo invocamos con el atributo style:

````
style="@style/ToDoSubtitle"


````

En el compontente que queramos usarlo
