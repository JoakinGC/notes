---
liquid: false
---
Son contantes de difenrtes tamaños de pantalla que combinados con los *estilos en React NAtive* permite dar estilos

Por ejemplo

````JavaScript
{% raw %}
import Constants from "expo-constants";


<View style={{marginTop:Constants.statusBarHeight,flexGrow:1}}>

            <Text>Rate Repository Application</Text>

            <RepositoryList/>

        </View>

{% endraw %}
````
