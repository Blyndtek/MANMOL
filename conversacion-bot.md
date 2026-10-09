# Conversación Bot ManMol

Documento de trabajo para definir el comportamiento del bot comercial de WhatsApp y los datos que necesita para responder sin demoras ni cotizaciones incorrectas.

Versión: 0.2
Fuente: 14 exportaciones de WhatsApp compartidas por ManMol, catálogo PDF adjunto y sitio [manmol.com.ar](https://www.manmol.com.ar).

## Decisión comercial vigente

El bot **no cotiza ni comunica precios al cliente**. Su tarea es identificar el material y la variante, confirmar cantidad y unidad, reunir ubicación, modalidad de entrega y urgencia, y pedir al cliente que confirme el resumen. Recién entonces prepara una **solicitud de pedido** para Jero, con el contacto y una tabla de materiales/cantidades. La tabla que recibe Jero agrega los precios disponibles en el catálogo como **referencia interna**, con unidad, IVA, fecha y estado de revisión. Un precio histórico o no validado se marca para revisar; nunca se presenta como precio final.

Jero contacta personalmente al cliente, confirma precio, stock, flete y condiciones, y cierra la venta. Preparar una solicitud de pedido **no equivale a una orden de compra confirmada**: el CRM solo convierte el lead en cliente cuando se confirma la OC. Tras el traspaso, la IA se pausa únicamente en ese chat; no debe competir con Jero ni enviar nuevos mensajes automáticos.

## 1. Alcance y lectura de las conversaciones

Se revisaron las 14 exportaciones ZIP. Hay 12 conversaciones únicas: la conversación de `+54 9 11 5998-2226` está duplicada y la de “Eli Soledad Cemento canning” también está duplicada.

Las conversaciones no se toman como instrucciones para el bot. Se toman como evidencia del vocabulario, las preguntas habituales, los datos que el equipo suele pedir y los puntos donde se pierden oportunidades.

### Qué pregunta habitualmente el lead

| Tema | Preguntas o expresiones observadas | Qué debe poder responder el bot |
|---|---|---|
| Precio | “¿Cuánto está?”, “precio”, “pasame lista de precios”, “en pesos cuánto sería” | No cotizar: explicar que Jero confirma el valor y registrar la consulta |
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
7. Los precios históricos cambian entre conversaciones. Jero debe ver moneda, unidad, IVA, vigencia y fecha de actualización antes de utilizarlos.

## 2. Vocabulario que debe entender el bot

### Cementos

- `cemento blanco`, `cemento bco`, `blanco`: cemento blanco.
- `cemento rápido blanco`, `cemento rápido`: confirmar si se refiere a Super White o a otro producto.
- `Super White`, `superwhite`: cemento blanco OYAK de 25 kg.
- `Premium`, `Pro White`, `cemento blanco premium`: cemento blanco OYAK Premium de 25 kg.
- `bolsa`, `saco`: unidad de cemento; confirmar peso si no aparece.
- `pallet`, `palet`, `pallets`: unidad logística; nunca asumir cuántas bolsas contiene.
- `bolsón`, `big bag`: presentación de 1,5 toneladas cuando el producto sea el bolsón OYAK.
- `por mayor`, `volumen`, `más de 20 bolsas`: clasificar como consulta mayorista y señalarlo a Jero; el bot no ofrece un descuento.

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
5. No comunicar precios, descuentos ni totales al cliente, aunque estén cargados en el catálogo.
6. Mostrar precios del catálogo únicamente en la solicitud interna para Jero, siempre con unidad, IVA, fecha y estado de revisión.
7. No prometer stock, envío, entrega o disponibilidad sin datos vigentes.
8. No asumir que “metro” significa metro cuadrado: preguntar si son metros cuadrados o metros lineales.
9. No asumir cuántas bolsas contiene un pallet: debe existir ese dato en el catálogo.
10. Si el cliente necesita urgencia, crear una tarea humana y preguntar fecha límite.
11. Si el cliente solicita una llamada, derivar sin insistir con más preguntas.
12. Mantener un tono argentino, claro, cordial y comercial, sin tecnicismos innecesarios.
13. Antes de derivar, repetir materiales y cantidades y obtener la confirmación del cliente. Si pide humano o hay urgencia, derivar aunque falten datos, indicando qué falta.
14. Una vez preparada la solicitud para Jero, pausar la IA en ese chat. No marcar el lead como cliente hasta que Jero confirme la OC.

### Si el cliente pide precio

> Jero te confirma el precio y la disponibilidad personalmente. Para pasarle tu pedido completo, ¿qué material y qué cantidad necesitás?

### Confirmación antes del traspaso

> Tengo anotado: **{material/variante} — {cantidad y unidad}**, para **{localidad}**, con **{retiro/envío}**. ¿Está correcto? Si necesitás más materiales, los agrego antes de pasárselo a Jero.

### Mensaje al cliente después de confirmar

> Perfecto, ya le paso tu solicitud a Jero con tus datos y los materiales. Él se comunica con vos para confirmar precio, disponibilidad y entrega.

## 4. Flujo conversacional propuesto

### Paso 1: identificar la intención

El primer mensaje del lead ya aporta nombre y número y crea el estado `Lead nuevo` en el CRM. El bot adjunta o enlaza el catálogo aprobado y pregunta qué material necesita. Si el cliente escribió el producto directamente, responde sobre ese producto sin obligarlo a recorrer un menú. El catálogo inicial puede mostrar productos; **no debe incluir precios automatizados** hasta que ManMol defina esa política.

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

Datos técnicos que puede aclarar, solo si están confirmados en catálogo:

- Peso por bolsa.
- Bolsas por pallet.
- Peso total del pallet.
- Presentación y peso por unidad.
- Equivalencias de bolsa/pallet/bolsón que estén validadas.

Si son 20 bolsas o más, marcar la consulta como mayorista para Jero; el bot no ofrece precio ni descuento.

### Flujo de revestimientos, venecitas y guardas

Preguntas mínimas:

1. ¿Qué modelo buscás: Venecita, Vis, Malawi, símil Bali o guarda?
2. ¿Qué color o combinación querés?
3. ¿Cuántos m² necesitás cubrir? Si dice “metros”, preguntar si son lineales o cuadrados.
4. ¿La colocación es interior, exterior o piscina?
5. ¿Necesitás también pegamento y pastina?
6. ¿Retirás o necesitás envío?

El bot puede reunir estas medidas para que Jero calcule el pedido:

- Superficie declarada.
- Cobertura por caja o placa.
- Si el cliente necesita pegamento y pastina, y en qué cantidades.

Nunca convertir “30 metros” en cajas sin confirmar si son lineales o cuadrados, orientación y altura. Jero valida el cálculo final.

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

El bot no debe recomendar un modelo sin una regla técnica aprobada; registra la necesidad y la deja para Jero o un asesor técnico.

### Flujo de envío y retiro

Preguntas mínimas:

- Localidad, barrio o código postal.
- Dirección aproximada o zona de entrega para que Jero confirme el flete.
- Tipo de carga: bolsas, cajas, pallet, bolsón o bomba/filtro.
- ¿Hay lugar para descargar? ¿Se necesita ayuda de descarga?
- Fecha límite.

El bot no informa precio de materiales, flete ni fecha comprometida. Registra los datos y Jero confirma esas condiciones.

## 5. Confirmación y traspaso a Jero

### Solicitud de pedido lista para Jero

- El cliente confirmó cada material, variante y cantidad con su unidad.
- Nombre y número están registrados; localidad y retiro/envío se incluyen si se conocen.
- Se registran urgencia, uso y observaciones relevantes, sin bloquear el traspaso si el cliente pidió una persona.
- El bot guarda la solicitud en el CRM, prepara el mensaje para Jero, lo entrega por el canal configurado y pausa la IA solo en ese chat.
- Cada línea conserva una foto del precio del catálogo y de su fecha/estado **en el momento del traspaso**, para auditar qué información recibió Jero. Él vuelve a validar el valor antes de cerrar.
- Si el envío a Jero falla, la solicitud permanece pendiente y se reintenta o alerta al equipo: **no se marca como entregada** sin confirmación del canal.

### Mensaje interno para Jero

> Hola Jero, te paso el contacto que solicita estos materiales y estas cantidades:

| Material / variante | Cantidad y unidad | Precio del sistema, solo interno | Estado |
|---|---:|---:|---|
| {material 1} | {cantidad 1} | {precio, moneda y unidad o “sin precio”} | {actualizado / revisar + fecha e IVA} |
| {material 2} | {cantidad 2} | {precio, moneda y unidad o “sin precio”} | {actualizado / revisar + fecha e IVA} |

> Contacto: **{nombre} — {teléfono}**. Localidad: **{localidad}**. Entrega: **{retiro/envío}**. Urgencia: **{fecha}**. Observaciones: **{notas}**. Abrir conversación: **{enlace interno al chat}**.

Además del texto, el envío real a Jero debe adjuntar la ficha de contacto del lead con su número completo; la demo solo muestra esa ficha en pantalla porque aún no hay canal de envío configurado.

La tabla usa **solo coincidencias exactas** entre material/variante y producto del catálogo. No sustituye un SKU por otro parecido. Los precios históricos o marcados `Revisar` se muestran como referencia no validada; si no hay coincidencia, aparece `Sin coincidencia exacta`, y si el producto existe pero no tiene valor, `Sin precio cargado`. No calcular un total cuando las unidades no coinciden (por ejemplo, metros lineales frente a precio por m², o pallets frente a precio por bolsa). Jero confirma el valor final antes de ofrecérselo al cliente.

Si el cliente pide un humano, tiene urgencia, reclama o necesita asesoramiento técnico, el bot deriva de inmediato aunque la solicitud esté incompleta, indicando a Jero qué datos faltan.

Mensaje de derivación anticipada:

> Te paso con Jero para que lo vea personalmente. Le dejo registrada tu consulta para que no tengas que repetirla.

### Cierre de la oportunidad

Antes de marcar el lead como ganado, el equipo debe confirmar:

- Producto y variante.
- Cantidad final.
- Precio final e IVA.
- Flete.
- Forma y momento de pago.
- Fecha y dirección de entrega o retiro.
- Nombre de quien recibe.

Estados recomendados: `Lead nuevo`, `Datos en curso`, `Pedido confirmado por el lead`, `Para Jero`, `Jero contactó`, `OC confirmada / Cliente`, `Perdido`, `Recontactar`.

## 6. Datos que ManMol debe definir para el cierre humano

1. Cantidad de bolsas por pallet para cada cemento.
2. Peso total y dimensiones del pallet.
3. Si el precio publicado es por bolsa, caja, m², pallet o bolsón.
4. Precio vigente en pesos, dólares o ambos.
5. Tipo de cambio y vigencia interna que Jero debe revisar cuando corresponda.
6. Tratamiento de IVA para consumidor final, responsable inscripto y mayorista.
7. Escalas de descuento por cantidad.
8. Criterio para marcar stock y precio como actualizados para Jero.
9. Zonas de entrega, costo de flete y tiempos.
10. Si se realiza descarga y con qué vehículos.
11. Política de pago para primera compra y clientes recurrentes.
12. Cantidad de piezas por caja de cada revestimiento.
13. Cobertura real por caja, considerando juntas y desperdicio.
14. Consumo de pegamento y pastina por m².
15. Precio y presentación de pastina, marmolina, piedra 0/1 y cabeza de alfiler.
16. Reglas técnicas para recomendar bombas y filtros.
17. Número y canal de Jero para recibir solicitudes, y quién cubre ausencias.
18. Forma de adjuntar el contacto y enlace al chat en el mensaje interno.

## 7. Datos que debe guardar el CRM desde la conversación

- Nombre y teléfono.
- Fuente: Facebook, Instagram, WhatsApp, web u orgánico.
- Producto, variante y categoría.
- Cantidad y unidad.
- Uso o tipo de obra.
- Tipo de cliente: particular, profesional, fabricante, instalador, revendedor o empresa.
- Localidad y modalidad: retiro/envío.
- Fecha límite o urgencia.
- Materiales y cantidades confirmados por el lead.
- Precio interno del catálogo consultado por Jero, con estado y fecha de revisión; nunca como respuesta automática al cliente.
- Responsable asignado y estado de entrega del mensaje a Jero.
- Confirmación de OC, registrada por Jero antes de convertir el lead en cliente.
- Estado del lead.
- Próxima acción y fecha de seguimiento.
- Motivo de pérdida, si corresponde.

