# Catálogo y precios ManMol

Tabla maestra de productos y reglas necesarias para que el bot pueda responder y cotizar. Los precios observados en los chats son históricos y no deben publicarse como vigentes hasta que el equipo los confirme.

## Regla de actualización

Un producto solo puede ser cotizado automáticamente si cumple todos estos requisitos:

- Precio cargado.
- Moneda definida.
- Unidad de venta definida.
- IVA definido.
- Stock o disponibilidad confirmada.
- Fecha de actualización vigente.
- Vigencia de la cotización definida.

Estados sugeridos: `Actualizado`, `Revisar`, `Falta actualizar`, `Sin stock`, `Solo asesor`.

## Productos y precios observados

| ID | Producto / alias | Categoría | Unidad y empaque | Precio observado en chats | IVA | Estado inicial | Datos críticos a completar |
|---|---|---|---|---:|---|---|---|
| CEM-SW-25 | Cemento blanco OYAK Super White / Superwhite | Cemento | Bolsa de 25 kg | USD 17; también aparece USD 20 y $30.000 | No confirmado | Revisar | Precio vigente, moneda oficial, IVA, stock, bolsas por pallet y descuento desde 20 bolsas |
| CEM-PW-25 | Cemento blanco Premium Pro White / Pro White | Cemento | Bolsa de 25 kg | No informado | No confirmado | Falta actualizar | Precio, stock, bolsas por pallet y diferencia frente a Super White |
| CEM-PAL | Pallet de cemento blanco | Cemento mayorista | Pallet | USD 896 + impuestos / $1.344.000 en julio; USD 950 / $1.453.500 en septiembre | No incluido en referencias | Revisar | Cantidad de bolsas por pallet, peso total, precio vigente, IVA y vigencia |
| CEM-BIG-15 | Bolsón de cemento OYAK | Cemento mayorista | Bolsón de 1,5 t | No informado | No confirmado | Falta actualizar | Precio, stock, peso neto, forma de carga y flete |
| REV-BALI | Símil piedra Bali / piedra Bali | Revestimientos | Placa; validar presentación | $26.700 por “metro” en un chat | No confirmado | Revisar | Confirmar si es m² o metro lineal, medidas, placas por caja, cobertura y colores |
| REV-MALAWI | Venecita / revestimiento Malawi | Revestimientos | Validar caja y cobertura | No informado | No confirmado | Falta actualizar | Precio, colores, m² por caja, peso, stock, pegamento y pastina |
| REV-VIS | Vis / La Vis | Revestimientos | Validar caja y cobertura | No informado | No confirmado | Falta actualizar | SKU exacto, colores, m² por caja, fecha de ingreso y diferencia frente a Malawi |
| VEN-AZUL-MIX | Venecita Azul Mixto | Venecitas | Caja de 2 m² · 16 kg según web | No informado | No confirmado | Falta actualizar | Precio por caja, precio por m², stock y desperdicio recomendado |
| VEN-TEAL | Venecita Teal | Venecitas | Caja de 2 m² · 16 kg según web | No informado | No confirmado | Falta actualizar | Precio, stock y color disponible |
| VEN-NEGRO | Venecita Negro Granito | Venecitas | Caja de 2 m² · 16 kg según web | No informado | No confirmado | Falta actualizar | Precio, stock y precio por caja |
| VEN-AZUL-OS | Venecita Azul Oscuro | Venecitas | Caja de 2 m² · 16 kg según web | No informado | No confirmado | Falta actualizar | Precio, stock y precio por caja |
| VEN-DORADO | Venecita Dorado | Venecitas | Caja de 2 m² · 16 kg según web | No informado | No confirmado | Falta actualizar | Precio, stock y precio por caja |
| VEN-AZUL-BR | Venecita Azul Brillante | Venecitas | Caja de 2 m² · 16 kg según web | No informado | No confirmado | Falta actualizar | Precio, stock y precio por caja |
| PEG-KALEKIM | Kalekim 1054 Technoflex | Pegamentos | Bolsa; validar peso | No informado | No confirmado | Falta actualizar | Precio, peso, rendimiento por m² y stock |
| PASTINA | Pastina | Complementos | Bolsa / unidad; definir presentación | No informado | No confirmado | Falta actualizar | Marca, colores, peso, rendimiento y precio |
| MAT-MARM-80 | Marmolina blanca #80 | Materiales | Bolsa / bolsón; definir presentación | No informado | No confirmado | Falta actualizar | Peso, granulometría, precio por unidad, stock y flete |
| MAT-MARM-N | Marmolina negra #80 | Materiales | Bolsa / bolsón; definir presentación | No informado | No confirmado | Falta actualizar | Peso, precio y stock |
| MAT-MARM-IMP | Marmolina impalpable | Materiales | Definir unidad | No informado | No confirmado | Falta actualizar | SKU, granulometría, peso y precio |
| MAT-P-01-B | Piedra blanca 0/1 | Materiales | Bolsa / bolsón; definir presentación | No informado | No confirmado | Falta actualizar | Peso, precio, stock y rendimiento |
| MAT-P-01-N | Piedra negra 0/1 | Materiales | Bolsa / bolsón; definir presentación | No informado | No confirmado | Falta actualizar | Peso, precio, stock y rendimiento |
| MAT-CABEZA | Piedra cabeza de alfiler | Materiales | Definir unidad | No informado | No confirmado | Falta actualizar | Confirmar producto, presentación y precio |
| FIL-MGI-V | Filtro Serie V · MGI Pool | Filtros | Unidad | No informado | No confirmado | Solo asesor hasta completar | Precio, diámetro, caudal, carga filtrante, stock y compatibilidad |
| BOM-ROWA-TEMPO | Rowa Tempo 5/1 STE | Bombas | Unidad | No informado | No confirmado | Solo asesor hasta completar | Precio, potencia, caudal, altura, tensión, stock y aplicación |
| BOM-ROWA-TANGO | Rowa Tango SFL 24 | Bombas | Unidad | No informado | No confirmado | Solo asesor hasta completar | Precio, potencia, caudal, profundidad, stock y aplicación |
| BOM-ROWA-MAX | Rowa Maxpress 26 E | Bombas | Unidad | No informado | No confirmado | Solo asesor hasta completar | Precio, potencia, caudal, presión, stock y aplicación |
| CLORO-GRAN | Cloro granulado | Mantenimiento de piscina | Definir kg/presentación | No informado | No confirmado | Falta actualizar | Marca, concentración, peso, precio y recomendaciones de uso |
| CLORO-PAST | Cloro en pastillas triple acción | Mantenimiento de piscina | Definir cantidad/presentación | No informado | No confirmado | Falta actualizar | Marca, peso, precio y stock |
| PINT-PILETA | Pintura al agua 5 en 1 para piscinas | Mantenimiento de piscina | Definir litro/presentación | No informado | No confirmado | Falta actualizar | Rendimiento, colores, litros, precio y stock |
| TRAV-RUST | Mármol travertino rústico | Piedra natural | Definir m²/caja | No informado | No confirmado | Falta actualizar | Medidas, espesor, precio, stock y flete |
| TRAV-TAP | Mármol travertino taponado | Piedra natural | Definir m²/caja | No informado | No confirmado | Falta actualizar | Medidas, espesor, precio, stock y flete |
| KINGMAX | Polímeros y celulósicos Kingmax | Industrial / B2B | Definir presentación | No informado | No confirmado | Solo asesor | Ficha técnica, mínimos, precio mayorista, stock y logística |

## Variantes de venecitas y guardas

### Variantes mencionadas en web y catálogo

- Venecita Azul Oscuro.
- Venecita Azul Mixto.
- Venecita Negro Granito.
- Venecita Dorado.
- Venecita Azul Brillante.
- Venecita Teal.
- Venecita Verde Mixto.
- Venecita Azul Medio.
- Venecita Blanca.

### Guardas del catálogo

- Guarda Romana.
- Guarda Griega.
- Guarda Inca.
- Guarda Cadena.

Para cada variante se debe guardar: SKU, foto, color, medidas, piezas por caja, m² por caja, peso, precio por caja, precio por m², stock y fecha de actualización.

## Datos de empaque y cálculos que deben quedar confirmados

| Producto | Dato disponible | Dato que falta validar |
|---|---|---|
| Cemento blanco | Bolsa de 25 kg | Bolsas por pallet, peso del pallet y precio mayorista vigente |
| Bolsón de cemento | 1,5 toneladas | Precio, stock, modalidad de carga y flete |
| Venecitas | Caja de 2 m² y 16 kg según fichas de la web | Confirmar si todos los colores tienen la misma caja y cobertura útil |
| Símil Bali | Placa de 30 × 40 cm; 15 placas por caja según una conversación | Confirmar cobertura real, juntas, desperdicio y precio por caja/m² |
| Símil Bali para franja | Un cliente indicó 30 metros lineales y tres placas hacia abajo | No calcular sin confirmar longitud, altura, filas y orientación |
| Pegamento | Kalekim 1054 Technoflex | Peso, rendimiento por m² y proporción recomendada |
| Pastina | Se pide junto con cajas de revestimiento | Marca, color, peso y consumo por m² |
| Filtros | Serie V MGI Pool, hasta 43 °C, 2,5 bar, válvula de 6 posiciones | Modelo exacto, diámetro, caudal, carga y precio |
| Rowa Tempo 5/1 STE | 0,5 HP, 40 L/min, 35 m | Precio, stock, tensión y criterio de recomendación |
| Rowa Tango SFL 24 | 1 HP, 60 L/min, 50 m de profundidad | Precio, stock, tensión y criterio de recomendación |
| Rowa Maxpress 26 E | 0,75 HP, 45 L/min, 4 bar | Precio, stock, tensión y criterio de recomendación |

## Historial de precios detectado

Estos datos sirven para detectar variaciones, no para cotizar automáticamente.

| Producto | Fecha aproximada | Valor observado | Observación |
|---|---|---:|---|
| Cemento blanco / Super White | 01/09/2026 | USD 20 por bolsa | Se mencionó USD 17 desde 20 bolsas y también $30.000 |
| Cemento blanco / Super White | 22-23/09/2026 | USD 17 por bolsa | No se aclaró IVA; bolsa de 25 kg en una conversación |
| Símil Bali | 23/09/2026 | $26.700 por “metro” | La unidad es ambigua; confirmar m² o metro lineal |
| Pallet de cemento blanco | 22/07/2026 | USD 896 + impuestos / $1.344.000 | No se informó cantidad de bolsas por pallet |
| Pallet de cemento blanco | 06/09/2026 | USD 950 / $1.453.500 | Se aclaró que no incluía IVA; precio distinto al de julio |
| Envío a Canning | 22/07/2026 | Aproximadamente $240.000 | Debe calcularse por zona, carga y fecha |

## Promociones y reglas comerciales

| ID | Promoción | Condición | Beneficio observado/propuesto | Datos faltantes |
|---|---|---|---|---|
| PROM-CEM-20 | Descuento cemento blanco por volumen | Desde 20 bolsas | USD 17 por bolsa frente a USD 20 de referencia | Precio vigente, moneda, IVA, fecha de vigencia y si aplica a todas las marcas |
| PROM-PISCINA | Pack inicio de piscina | Venecita + adhesivo + 2 pastinas | Precio fijo a definir | Productos exactos, cantidades, precio real, vigencia y stock conjunto |
| PROM-LOS-AT | Pack fabricante de losetas | Cemento + piedra 0/1 + marmolina | Precio mayorista a cotizar | Fórmula de cantidades, precio por bolsón/pallet, mínimo y frecuencia |
| PROM-RECURRENTE | Cliente recurrente | Segunda compra o consumo periódico | Precio/flete preferencial | Cantidad mínima, plazo y autorización comercial |

Cada promoción debe tener: productos incluidos, condición, precio de lista, beneficio, precio final, moneda, IVA, fecha de inicio, fecha de fin, stock mínimo, si es acumulable y mensaje que el bot debe enviar.

## Logística y pago

| Dato | Referencia encontrada | Debe definirse |
|---|---|---|
| Centro | María Luisa Anido 2255, Local 11, Zelaya, Pilar | Confirmar si es depósito, showroom o ambos |
| Horario | Lunes a viernes, 8:00 a 18:00 | Confirmar horarios de retiro y carga |
| Cobertura web | La web comunica envíos a todo el país | Zonas reales, transportistas, mínimos y excepciones |
| CABA | Un chat histórico informó que no se hacían envíos a CABA | Política vigente y cálculo por barrio/código postal |
| Canning | Se cotizó un flete aproximado de $240.000 | Tabla vigente por carga, zona y fecha |
| Primer envío | En un chat se indicó que el flete debía pagarse antes | Confirmar política actual para producto y flete |
| Descarga | Se mencionó pago antes de descargar | Confirmar si el servicio incluye descarga y qué vehículo se requiere |

## Estructura mínima de cada registro de catálogo

```yaml
id: CEM-SW-25
nombre: Cemento blanco OYAK Super White
aliases: [cemento blanco, superwhite, cemento rápido blanco]
categoria: cemento
marca: OYAK
unidad_venta: bolsa
contenido: 25 kg
precio: 0
moneda: ARS
iva: no_incluido
stock: 0
stock_status: consultar
minimo_compra: 1
escalas:
  - desde: 20
    precio: 0
    tipo: unidad
promociones: []
vigencia_desde: null
vigencia_hasta: null
actualizado_en: null
estado_bot: falta_actualizar
requiere_asesor: false
ficha_tecnica: null
imagenes: []
```

## Criterio para habilitar el bot

Un producto pasa de `Revisar` a `Actualizado` solo cuando una persona confirma precio, unidad, IVA, stock y vigencia. Hasta ese momento el bot puede identificar el producto, registrar el lead y ofrecer un asesor, pero no debe inventar ni reutilizar un precio histórico.

