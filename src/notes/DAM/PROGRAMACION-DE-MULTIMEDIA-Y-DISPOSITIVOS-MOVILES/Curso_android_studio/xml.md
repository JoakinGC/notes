Es que indica la [[EstructuraDeUnProyecto]] y el diseño de nuestra app

Tenemos u contenodr padre el mas facil es FrameLayout, Y mas sencillo de todos

Cada cotenedor tienen diferentes propiedades 

android:layout_width="wrap_content" Esta propiedad le indicamos cuanto ocupa de ancho y el wrapcontent indica que ocupe solo lo minimo que necesita para mostrarse el boton

Y el matchParent todo el espacio que le permita el padre.


También tenemos unidades fijas: 
- dp(para pantalla )
- sp(para tamaño de fuentes)

Dentro de frame podemos crear otros componentes que también cuenta con estas propiedades, algunos de esos componentes son:

- [[TextView]]
- [[View]]
- [[AppCompatButton]]
- [[Button]]
- [[AppCompatEditText]]
- [[CardView]]
- [[RangeSlider]]
- [[FloatingActionButon]]
- [[CheckBox]]
- [[editText]]
- [[RadioButton]]




Al igual que framelayout tenemos otros como:

- [[LinearLayout]]
- [[ConstransLayout]]


Se puede colcoar id a cada componente

con: android:id="@+id/nombreDeID"

Sirve para engachar con [[]]


Igual la propiedad text de nuestro text view no debe ser suado sino que debe referenciar a un string que tengamos en nuestro string de la carpata de recursos