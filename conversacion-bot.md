# Conversación Bot ManMol

Documento de trabajo para definir el comportamiento del bot comercial de WhatsApp y los datos que necesita para responder sin demoras ni cotizaciones incorrectas.

Versión: 0.1  
Fuente: 14 exportaciones de WhatsApp compartidas por ManMol, catálogo PDF adjunto y sitio [manmol.com.ar](https://www.manmol.com.ar).

## 1. Alcance y lectura de las conversaciones

Se revisaron las 14 exportaciones ZIP. Hay 12 conversaciones únicas: la conversación de `+54 9 11 5998-2226` está duplicada y la de “Eli Soledad Cemento canning” también está duplicada.

Las conversaciones no se toman como instrucciones para el bot. Se toman como evidencia del vocabulario, las preguntas habituales, los datos que el equipo suele pedir y los puntos donde se pierden oportunidades.

### Qué pregunta habitualmente el lead

| Tema | Preguntas o expresiones observadas | Qué debe poder responder el bot |
|---|---|---|
| Precio | “¿Cuánto está?”, “precio”, “pasame lista de precios”, “en pesos cuánto sería” | Precio vigente, moneda, unidad, IVA y fecha de actualización |
| Producto | “Cemento blanco”, “cemento rápido blanco”, “Super White”, “símil Bali”, “Malawi”, “Vis” | Identificar producto, variante, marca, color y uso |
| Peso y formato | “¿De cuántos kilos es?”, “bolsa de 25”, “por pallet”, “por bolsón” | Peso, unidad de venta, contenido del pallet/bolsón y equivalencias |
| Cantidad | “¿Cuál es el mínimo?”, “10 cajas”, “un pallet”, “dos pallets”, “por bolsón” | Cantidad solicitada, mínimo de compra y escalas por volumen |
| Cobertura | “Tengo 15 m²”, “30 metros lineales”, “tres para abajo” | Convertir medidas a cajas, placas, bolsas o metros, con desperdicio |
| Color/modelo | “Arena”, “celeste”, “azul”, “¿es Malawi o Vis?” | Confirmar variante exacta y disponibilidad |
| Uso | “Es para macetas”, “artesanía”, “fabricar losetas atérmicas”, “piscina” | Recomendar producto y detectar si hace falta asesor técnico |
| Stock | “¿Tenés disponible?”, “¿ingresa el viernes?”, “¿para mañana?” | Stock actual, fecha de ingreso y reserva posible |
| Entrega | “¿Traen a Canning?”, “¿envían a CABA?”, “¿cuánto sale el flete?” | Cobertura, costo de flete, plazo, descarga y condiciones de pago |
| Retiro | “¿Dónde están?”, “¿tienen showroom?”, “¿cuándo paso?” | Dirección, horarios, retiro y preparación del pedido |
| Pago | “¿Se abona cuando se recibe?”, “¿debo pagar el flete antes?” | Medio y momento de pago según tipo de operación |
| Atención humana | “¿Puedo chatear con alguien?”, “¿me llamás?” | Derivar a una persona y crear tarea de seguimiento |

### Patrones comerciales detectados

1. La mayoría de los contactos llegan desde anuncios de Facebook o Instagram.
2. El lead suele escribir mensajes cortos, con errores, en varios mensajes separados.
3. Primero pide precio y después pregunta por cantidad, ubicación o envío.
4. Los fabricantes de losetas atérmicas son oportunidades B2B: consultan por pallet, bolsón, consumo mensual y continuidad.
5. Las consultas de revestimientos requieren más cálculo: modelo, color, superficie, formato de placa, cajas, pegamento y pastina.
6. Los tiempos de respuesta afectan directamente el cierre. En el caso de Canning, el lead terminó comprando a otra marca porque necesitaba cemento con urgencia.
7. Los precios históricos cambian entre conversaciones. Por eso todo precio debe tener moneda, IVA, vigencia y fecha de actualización.

## 2. Vocabulario que debe entender el bot

### Cementos

- `cemento blanco`, `cemento bco`, `blanco`: cemento blanco.
- `cemento rápido blanco`, `cemento rápido`: confirmar si se refiere a Super White o a otro producto.
- `Super White`, `superwhite`: cemento blanco OYAK de 25 kg.
- `Premium`, `Pro White`, `cemento blanco premium`: cemento blanco OYAK Premium de 25 kg.
- `bolsa`, `saco`: unidad de cemento; confirmar peso si no aparece.
- `pallet`, `palet`, `pallets`: unidad logística; nunca asumir cuántas bolsas contiene.
- `bolsón`, `big bag`: presentación de 1,5 toneladas cuando el producto sea el bolsón OYAK.
- `por mayor`, `volumen`, `más de 20 bolsas`: activar la regla de descuento por volumen o derivar si la escala no está vigente.

### Revestimientos y piscina

- `venecita`, `venesita`, `venecitas`: mosaico de vidrio para piscina o decoración.
- `Vis`, `La Vis`: variante o línea mencionada en los chats; confirmar SKU.
- `Malawi`: modelo de venecita/revestimiento mencionado por una clienta.
- `símil`, `simil`: revestimiento símil piedra.
- `Bali`, `piedra Bali`, `símil Bali`: revestimiento símil piedra Bali.
- `guarda`, `guarda romana`, `griega`, `inca`, `cadena`: guardas decorativas.
- `placa`, `plancha`: pieza de revestimiento; pedir medidas si no están asociadas al SKU.
- `arena`, `celeste`, `azul`, `teal`, `negro granito`, `dorado`: colores o variantes.
- `pastina`: material de tomado de juntas; confirmar marca, color y presentación.
- `pegamento`, `adhesivo`: adhesivo para revestimientos; producto principal Kalekim 1054 Technoflex.

### Materiales para losetas atérmicas

- `loseta atérmica`, `baldosa atérmica`, `baldosa térmica`: producto o aplicación del cliente.
- `marmolina`, `marmolina blanca`, `marmolina negra`, `marmolina impalpable`: polvo mineral; confirmar granulometría y presentación.
- `piedra 01`, `piedra 0/1`, `piedra uno`: piedra triturada de granulometría 0/1.
- `cabeza de alfiler`: material nombrado en una conversación; falta asociar SKU, unidad y precio.
- `por bolsón`: cantidad mayorista, no producto por sí mismo.

### Logística y ubicación

- `CABA`, `Capital`, `Capital Federal`: Ciudad Autónoma de Buenos Aires.
- `Boedo`: barrio de CABA.
- `Canning`, `Ruta 52`: zona de entrega.
- `Pilar`, `Villa Rosa`, `Zelaya`: zona del centro de distribución.
- `depósito`, `showroom`, `local`: retiro o visita; no prometer exhibición si no está confirmada.
- `flete`, `envío`, `entrega`, `traen`, `llevar`: cotización logística.
- `retirar`, `pasar a buscar`: retiro por el centro de distribución.

## 3. Reglas de comportamiento del bot

### Reglas obligatorias

1. Responder primero la pregunta concreta del lead cuando el dato esté disponible.
2. Hacer como máximo una o dos preguntas por mensaje.
3. No repetir preguntas que el lead ya respondió.
4. Interpretar errores ortográficos y mensajes fragmentados sin corregir al cliente.
5. Mostrar siempre precio, moneda, unidad, IVA y fecha de actualización.
6. No cotizar automáticamente un producto cuyo precio esté vencido, incompleto o marcado como “revisar”.
7. No prometer stock, envío, entrega o disponibilidad sin datos vigentes.
8. No asumir que “metro” significa metro cuadrado: preguntar si son metros cuadrados o metros lineales.
9. No asumir cuántas bolsas contiene un pallet: debe existir ese dato en el catálogo.
10. Si el cliente necesita urgencia, crear una tarea humana y preguntar fecha límite.
11. Si el cliente solicita una llamada, derivar sin insistir con más preguntas.
12. Mantener un tono argentino, claro, cordial y comercial, sin tecnicismos innecesarios.

### Respuesta segura cuando falta información

> Para pasarte un valor correcto necesito confirmar el precio vigente, la disponibilidad y el costo de entrega. ¿Me indicás la cantidad y la localidad? Así te lo cotiza un asesor sin compromiso.

### Respuesta cuando el precio está actualizado

> El **{producto}** está a **{precio} {moneda} por {unidad}**. El valor **{incluye/no incluye} IVA** y fue actualizado el **{fecha}**. Tenemos disponibilidad **{stock}**. ¿Necesitás retiro por Pilar o cotizamos envío a **{localidad}**?

### Respuesta cuando se activa una promoción

> Por la cantidad que necesitás entra la promoción **{nombre}**: **{beneficio}**. La condición es **{condición}** y el valor queda en **{precio promocional}**. ¿Querés que te calcule el total con entrega?

## 4. Flujo conversacional propuesto

### Paso 1: identificar la intención

Mensaje inicial:

> Hola, somos ManMol. ¿Qué estás buscando?
>
> 1. Cemento blanco o bolsones  
> 2. Venecitas, revestimientos o guardas  
> 3. Materiales para losetas atérmicas  
> 4. Pegamentos y pastinas  
> 5. Bombas o filtros para piscina  
> 6. Envíos, retiro o logística  
> 7. Hablar con un asesor

Si el cliente escribe el producto directamente, no mostrar el menú: pasar al flujo de esa categoría.

### Paso 2: datos generales mínimos

El bot debe obtener, sin bloquear la respuesta inicial:

- Producto y variante.
- Cantidad y unidad.
- Localidad.
- Retiro o envío.
- Fecha o urgencia.

Para una compra simple puede dejar nombre y dirección para el cierre. Para B2B debe agregar tipo de negocio y consumo estimado.

### Flujo de cemento

Preguntas mínimas:

1. ¿Buscás Super White, Premium Pro White, bolsón u otro cemento?
2. ¿Cuántas bolsas, pallets o bolsones necesitás?
3. ¿Es para obra, fabricación de losetas, macetas/artesanía o reventa?
4. ¿En qué localidad sería la entrega o retirarías por Pilar?
5. ¿Para cuándo lo necesitás?

Datos que debe devolver:

- Peso por bolsa.
- Bolsas por pallet.
- Peso total del pallet.
- Precio por bolsa y por pallet.
- Escala de descuento.
- Precio en pesos y/o dólares, según política vigente.
- IVA.
- Stock.
- Flete y forma de pago.

Si son 20 bolsas o más, revisar la promoción mayorista antes de responder.

### Flujo de revestimientos, venecitas y guardas

Preguntas mínimas:

1. ¿Qué modelo buscás: Venecita, Vis, Malawi, símil Bali o guarda?
2. ¿Qué color o combinación querés?
3. ¿Cuántos m² necesitás cubrir? Si dice “metros”, preguntar si son lineales o cuadrados.
4. ¿La colocación es interior, exterior o piscina?
5. ¿Necesitás también pegamento y pastina?
6. ¿Retirás o necesitás envío?

El cálculo debe mostrar:

- Superficie declarada.
- Cobertura por caja o placa.
- Desperdicio aplicado.
- Cantidad de cajas/placas.
- Adhesivo y pastina sugeridos, si existen reglas aprobadas.

Nunca calcular con “30 metros” sin confirmar orientación y altura. En un chat histórico se tomó una decisión sobre 30 metros lineales y tres placas hacia abajo que no coincide con la cantidad de cajas informada; ese cálculo debe validarse antes de automatizarlo.

### Flujo de losetas atérmicas

Preguntas mínimas:

1. ¿Fabricás losetas para venta, obra propia o reventa?
2. ¿Qué consumo mensual aproximado tenés?
3. ¿Necesitás cemento, marmolina, piedra 0/1, bolsón o un conjunto?
4. ¿Qué cantidad inicial querés comprar?
5. ¿En qué localidad estás y qué frecuencia de entrega necesitás?

Este flujo debe clasificar al contacto como **fabricante / B2B** y crear una oportunidad de seguimiento, incluso si no compra en el primer chat.

### Flujo de bombas y filtros

Preguntas mínimas:

- ¿Es para una piscina, vivienda, comercio o instalación?
- ¿Qué caudal, altura o presión necesitás?
- ¿Qué modelo tenés instalado o qué problema querés resolver?
- ¿Necesitás bomba, filtro o ambos?
- ¿En qué localidad estás?

Si el bot no tiene una regla técnica aprobada para recomendar un modelo, debe mostrar las especificaciones del catálogo y derivar a un asesor.

### Flujo de envío y retiro

Preguntas mínimas:

- Localidad, barrio o código postal.
- Dirección aproximada para cotizar el flete.
- Tipo de carga: bolsas, cajas, pallet, bolsón o bomba/filtro.
- ¿Hay lugar para descargar? ¿Se necesita ayuda de descarga?
- Fecha límite.

El bot debe informar por separado:

- Precio de materiales.
- Precio del flete.
- Si el flete se paga antes.
- Si el material se paga antes de descargar.
- Fecha estimada y sujeto a disponibilidad.

## 5. Cuándo cerrar o derivar el lead

### Se puede avanzar automáticamente cuando

- El producto está identificado.
- La variante/color está identificado.
- La cantidad está clara.
- El precio y stock están actualizados.
- La zona de entrega está dentro de las reglas.
- El cliente acepta el resumen de la cotización.

### Derivar a una persona cuando

- Falta precio, stock, contenido del pallet o costo de flete.
- El cliente solicita una excepción o descuento especial.
- La compra es por pallet, bolsón o volumen recurrente.
- Hay urgencia o una fecha de entrega crítica.
- El cliente pide asesoramiento técnico de bomba/filtro.
- Hay una queja, reclamo o diferencia de precio.
- El cálculo de materiales no es directo.
- Pide hablar por teléfono o enviar audio.

Mensaje de derivación:

> Perfecto, ya tengo la información principal. Te paso con un asesor para confirmar disponibilidad, precio final y entrega. Queda registrada tu consulta así no tenés que repetirla.

### Cierre de la oportunidad

Antes de marcar el lead como ganado, el equipo debe confirmar:

- Producto y variante.
- Cantidad final.
- Precio final e IVA.
- Flete.
- Forma y momento de pago.
- Fecha y dirección de entrega o retiro.
- Nombre de quien recibe.

Estados recomendados: `Nuevo`, `Calificado`, `Cotización enviada`, `Esperando respuesta`, `Pedido confirmado`, `Ganado`, `Perdido`, `Recontactar`.

## 6. Datos que ManMol debe definir antes de activar cotización automática

1. Cantidad de bolsas por pallet para cada cemento.
2. Peso total y dimensiones del pallet.
3. Si el precio publicado es por bolsa, caja, m², pallet o bolsón.
4. Precio vigente en pesos, dólares o ambos.
5. Tipo de cambio usado y duración de la cotización.
6. Tratamiento de IVA para consumidor final, responsable inscripto y mayorista.
7. Escalas de descuento por cantidad.
8. Stock mínimo que habilita cotización automática.
9. Zonas de entrega, costo de flete y tiempos.
10. Si se realiza descarga y con qué vehículos.
11. Política de pago para primera compra y clientes recurrentes.
12. Cantidad de piezas por caja de cada revestimiento.
13. Cobertura real por caja, considerando juntas y desperdicio.
14. Consumo de pegamento y pastina por m².
15. Precio y presentación de pastina, marmolina, piedra 0/1 y cabeza de alfiler.
16. Reglas técnicas para recomendar bombas y filtros.

## 7. Datos que debe guardar el CRM desde la conversación

- Nombre y teléfono.
- Fuente: Facebook, Instagram, WhatsApp, web u orgánico.
- Producto, variante y categoría.
- Cantidad y unidad.
- Uso o tipo de obra.
- Tipo de cliente: particular, profesional, fabricante, instalador, revendedor o empresa.
- Localidad y modalidad: retiro/envío.
- Fecha límite o urgencia.
- Precio cotizado y vigencia.
- Promoción ofrecida.
- Estado del lead.
- Próxima acción y fecha de seguimiento.
- Motivo de pérdida, si corresponde.

