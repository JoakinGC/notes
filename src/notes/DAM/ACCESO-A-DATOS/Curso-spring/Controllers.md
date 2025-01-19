Los controllers sirven para controlar las direcciones de url y añade una capa mas a nuestro proyecyto de Spring

Ademas utiliza la [[Anotaciones]]  @RestController:

```java
package curso.spring.Curso.controllers;  
  
import org.springframework.web.bind.annotation.RestController;  
  
@RestController  
public class usuarioController {  
  
  
}
```


Metodos que controlan una URL:


```java
package curso.spring.Curso.controllers;  
  
import curso.spring.Curso.Models.Usuario;  
import org.springframework.web.bind.annotation.PathVariable;  
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.RestController;  
  
import java.util.List;  
  
@RestController  
public class usuarioController {  
  
  
    @RequestMapping(value = "prueba") //Se usa esta notacion 
    public List<String> prueba(){  
        return List.of("Manzana","kiwi","banana");  
    }  
  
    @RequestMapping(value = "usuario/{id}")  //Se usan esto para hacer variable la notacion
    public Usuario getUsuario(@PathVariable String id){  
        Usuario usu = new Usuario();  
        usu.setNombre("pepe");  
        usu.setApellido("pepona");  
        usu.setEmail("Email");  
        usu.setTelefono("2133");  
        return usu;  
    }  
  
    @RequestMapping(value = "editar")  
    public Usuario editar(){  
        Usuario usu = new Usuario();  
        usu.setNombre("pepe");  
        usu.setApellido("pepona");  
        usu.setEmail("Email");  
        usu.setTelefono("2133");  
        return usu;  
    }  
  
    @RequestMapping(value = "eliminar")  
    public Usuario eliminar(){  
        Usuario usu = new Usuario();  
        usu.setNombre("pepe");  
        usu.setApellido("pepona");  
        usu.setEmail("Email");  
        usu.setTelefono("2133");  
        return usu;  
    }  
  
    @RequestMapping(value = "buscar")  
    public Usuario buscar(){  
        Usuario usu = new Usuario();  
        usu.setNombre("pepe");  
        usu.setApellido("pepona");  
        usu.setEmail("Email");  
        usu.setTelefono("2133");  
        return usu;  
    }  
}

```

Notaciones:

- @PathVariable: pasar una vairable en la URL
- @RequestMapping: Buscar el metodo y lo asocia con la ruta de url que le pasamos