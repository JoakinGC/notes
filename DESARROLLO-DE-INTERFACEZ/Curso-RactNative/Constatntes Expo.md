Son contantes de difenrtes tamaños de pantalla que combinados con los *estilos en React NAtive* permite dar estilos

Por ejemplo

````JavaScript
import Constants from "expo-constants";

{% raw %}
<View style={{marginTop:Constants.statusBarHeight,flexGrow:1}}>
{% endraw %}
            <Text>Rate Repository Application</Text>

            <RepositoryList/>

        </View>


````
