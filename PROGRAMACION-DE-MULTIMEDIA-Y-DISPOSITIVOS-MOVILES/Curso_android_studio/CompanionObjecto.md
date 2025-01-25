Es un objecto en kotlin que permite hacer cosntante spara que se puedan comunicar entre [Activity](Activity.md) o [Clase](../Clase.md)

````kotlin
companion object{  
    const val IMC_KEY = "IMC_RESULT"  
}


//Ejemplo de uso 
val intent = Intent(this, ResultIMCActivity::class.java)  
intent.putExtra(IMC_KEY,result)  
startActivity(intent)


//Llamado en otro actibbyty:
import com.example.estudioandroid.imccalculator.ImcActivity.Companion.IMC_KEY
val result:Double = intent.extras?.getDouble(IMC_KEY) ?: -1.0

````

Entonces se importa en las activty que usemos en ella y si cambiamos la llave cambiara en la demas que se usen y no tener que ir una a una
