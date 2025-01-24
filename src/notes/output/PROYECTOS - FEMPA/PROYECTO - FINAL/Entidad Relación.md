Acorde a los [[Requistos Funcionales]] se a hehco lo siguiente con su respectivamen cjsutificacion:

Entidades:


- Terapia: Id_terapia, descripcion, nombre, id_emfermedad
- Factor:id_Factor, causa (Que lo provoca generalmente), nombre, tipo(ambiental, quimica,etc).
- Cuidadaro / Hotel de perro:ID de cuidador/hotel (clave primaria), nombre, dirección, teléfono, servicios ofrecidos, etc.
- Dueño de mascotas: ID de dueño (clave primaria), nombre, dirección, teléfono, etc.
- Cita: Atributos: ID de cita (clave primaria), fecha, hora, motivo (estética o veterinario), etc.
- Mascota(ID_mascota, nombre_mascota, fecha_nacimiento, ID_especie, ID_raza, ID_dueño)
- Especie(ID_especie, nombre_especie)
- Raza(ID_raza, nombre_raza, ID_especie)
- Enfermedad(ID_enfermedad, nombre_enfermedad, descripción, tratamiento_recomendado)
- Historial(ID_historial, ID_animal, fecha_consulta, diagnóstico, ID_enfermedad, )
- Medicamento(ID_medicamento, nombre_medicamento, descripción)
- Tratamiento(ID_tratamiento, ID_historial, fecha_inicio, fecha_fin, notas,)
- Estética: ID de estética (clave primaria), nombre del esteticista, dirección, teléfono, especialidad (p. ej., peluquería, baño, corte de uñas, etc.), certificaciones o estudios en estética, etc.
- Veterinario: ID de veterinario (clave primaria), nombre del veterinario, dirección, teléfono, especialidad (p. ej., medicina interna, cirugía, odontología, etc.), certificaciones o estudios en veterinaria, etc.

 

 **Relaciones:**
    
- Mascota(ID_mascota) es de Especie(ID_especie)  1-N
- Mascota(ID_mascota) es de Raza(ID_raza) 1-N
- Enfermedad(ID_enfermedad) es común en Raza(ID_raza) N - N
- Enfermedad(ID_enfermedad) es común en Especie(ID_raza) N - N
- Enfermedad es generado por un factor o mas(n - n)
- Historial(ID_historial) es de Mascota(ID_animal) 1 - N
- Historial(ID_historial) tiene Enfermedad(ID_enfermedad) N - N
- Historial(ID_historial) incluye Medicamento(ID_medicamento) N - N
- Tratamiento(ID_tratamiento) pertenece a Historial(ID_historial) 1 -N
- Dueño puede tener muchas Mascota 1 -N
- Mascota puede tener citas 1 -N
- Cuidador / Hotel - Mascota N -N
- Cita puede ser programada con un esteticista o veterinario 1 - N
- Tratamiento - enfermedad n - n




- Persona: Nombre, Apellido, DNI, Edad,ID_Persona
- Dueños: ID_Persona, id_perro, id_gato, Locacion, nombre, apellido, edad
- Veterinarios: id_veterinario, nombre, apellido, especialidad, horarioDeTrabajo
- Hoteles: id_hotel, tipo, 
- Citas: id_cita, persona_id, id_animal, estetica, tratamiento.
- Medicamentos: id_medicamento, 
- Enfermedades
- Empleado


- Dueño de mascotas: ID de dueño (clave primaria), nombre, dirección, teléfono, etc.
- Mascota: Atributos: ID de mascota (clave primaria), nombre, especie, raza, etc.
- Cita: Atributos: ID de cita (clave primaria), fecha, hora, motivo (estética o veterinario), etc.

Relaciones:
1. Relación entre Dueño de mascotas y Mascota:
   - Un dueño puede tener varias mascotas.
   - Una mascota pertenece a un único dueño.
   - Relación de uno a muchos.
2. Relación entre Mascota y Cita:
   - Una mascota puede tener varias citas.
   - Una cita está asociada a una única mascota.
   - Relación de uno a muchos.
3. Relación entre Cita y Tipo de Servicio (Estética o Veterinario):
   - Una cita puede tener un tipo de servicio.
   - Un tipo de servicio puede estar asociado a varias citas.
   - Relación de uno a muchos.




Justificación:


1. **Dueño - Mascota:**
   - La cardinalidad de esta relación sería "1:N", lo que significa que un dueño puede tener muchas mascotas, pero cada mascota pertenece a un único dueño.

2. **Mascota - Especie:**
   - La cardinalidad aquí también sería "1:N", donde una especie puede tener muchas mascotas, pero cada mascota pertenece a una única especie.

3. **Mascota - Raza:**
   - Similarmente, la cardinalidad sería "1:N". Una raza puede tener muchas mascotas, pero cada mascota pertenece a una única raza.

5. **Enfermedad - Raza:**
   - La cardinalidad aquí sería "M:N", ya que una enfermedad puede ser común en varias razas, y una raza puede estar asociada con varias enfermedades.

6. **Historial - Mascota:**
   - La cardinalidad sería "1:N", ya que un historial médico pertenece a una única mascota, pero una mascota puede tener varios historiales médicos (por ejemplo, consultas previas).

7. **Historial - Enfermedad:**
   - Se puede diagnosticar varias enfermedades en un historial y una enfermada puede estar en mas de un historial

8. **Historial - Medicamento:**
   - Igualmente, la cardinalidad sería "1:N". Cada historial médico puede incluir varios medicamentos, pero cada medicamento está asociado a un único historial médico.

9. **Tratamiento - Historial:**
   - La cardinalidad sería "1:N". Cada tratamiento pertenece a un único historial médico, pero un historial médico puede tener varios tratamientos asociados.


1. **Relación entre Dueño de mascotas y Mascota:**
   - Un dueño puede tener varias mascotas (1 a muchos).
   - Una mascota pertenece a un único dueño (1 a 1).

2. **Relación entre Mascota y Cita:**
   - Una mascota puede tener varias citas (1 a muchos).
   - Una cita está asociada a una única mascota (1 a 1).

4. **Relación entre Mascota y Cuidador/Hotel:**
   - Una mascota puede ser cuidada por varios cuidadores o alojada en diferentes hoteles (muchos a muchos).
   - Un cuidador/hotel puede tener varias mascotas bajo su cuidado (muchos a muchos).

5. **Relación entre Cita y Estética/Veterinario:**
	- Una cita puede ser programada con un esteticista o un veterinario (1 a 1).
	- Un esteticista o un veterinario puede tener varias citas programadas (1 a muchos).

![](../attachment/c0bc1298f2b83e1b25dfe4a4ee9c67fc.png)

Con esto pasamos a que [[API]]