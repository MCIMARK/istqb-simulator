const QUESTIONS = [
  {
    "id": 1,
    "category": "Fundamentos",
    "question": "¿Cuál es un objetivo típico de las pruebas de software?",
    "options": [
      {
        "key": "A",
        "text": "Demostrar que el producto no contiene defectos"
      },
      {
        "key": "B",
        "text": "Reducir el riesgo y proporcionar información para la toma de decisiones"
      },
      {
        "key": "C",
        "text": "Sustituir completamente las actividades de aseguramiento de la calidad"
      },
      {
        "key": "D",
        "text": "Garantizar que todos los defectos serán corregidos"
      }
    ],
    "answer": "B",
    "explanation": "Las pruebas aportan información sobre calidad y riesgo; no pueden demostrar ausencia total de defectos."
  },
  {
    "id": 2,
    "category": "Fundamentos",
    "question": "¿Cuál es la relación correcta entre error, defecto y fallo?",
    "options": [
      {
        "key": "A",
        "text": "Un error humano puede introducir un defecto que, al ejecutarse, puede causar un fallo"
      },
      {
        "key": "B",
        "text": "Un fallo siempre introduce un defecto"
      },
      {
        "key": "C",
        "text": "Todo defecto produce necesariamente un fallo"
      },
      {
        "key": "D",
        "text": "Un defecto solo puede existir en el código fuente"
      }
    ],
    "answer": "A",
    "explanation": "Un error es una acción humana, el defecto queda en un producto de trabajo y puede manifestarse como fallo."
  },
  {
    "id": 3,
    "category": "Fundamentos",
    "question": "¿Qué diferencia principal existe entre pruebas y depuración?",
    "options": [
      {
        "key": "A",
        "text": "Las pruebas localizan y corrigen la causa del defecto; la depuración solo reporta fallos"
      },
      {
        "key": "B",
        "text": "Las pruebas pueden revelar fallos; la depuración busca causas y corrige defectos"
      },
      {
        "key": "C",
        "text": "Son exactamente la misma actividad"
      },
      {
        "key": "D",
        "text": "La depuración solo se realiza antes de las pruebas"
      }
    ],
    "answer": "B",
    "explanation": "Testing detecta fallos/defectos; debugging investiga causas y aplica correcciones."
  },
  {
    "id": 4,
    "category": "Fundamentos",
    "question": "¿Qué principio indica que las pruebas pueden mostrar la presencia de defectos, pero no su ausencia?",
    "options": [
      {
        "key": "A",
        "text": "Pruebas dependientes del contexto"
      },
      {
        "key": "B",
        "text": "Las pruebas muestran la presencia, no la ausencia, de defectos"
      },
      {
        "key": "C",
        "text": "Agrupamiento de defectos"
      },
      {
        "key": "D",
        "text": "Paradoja del pesticida"
      }
    ],
    "answer": "B",
    "explanation": "Incluso muchas pruebas exitosas no prueban que el sistema esté libre de defectos."
  },
  {
    "id": 5,
    "category": "Fundamentos",
    "question": "¿Qué principio explica que probar todas las combinaciones de entradas y precondiciones sea impracticable en sistemas no triviales?",
    "options": [
      {
        "key": "A",
        "text": "Pruebas exhaustivas son imposibles"
      },
      {
        "key": "B",
        "text": "Ausencia de errores es una falacia"
      },
      {
        "key": "C",
        "text": "Pruebas tempranas"
      },
      {
        "key": "D",
        "text": "Agrupamiento de defectos"
      }
    ],
    "answer": "A",
    "explanation": "El espacio de combinaciones suele ser demasiado grande; se seleccionan pruebas mediante técnicas y riesgo."
  },
  {
    "id": 6,
    "category": "Fundamentos",
    "question": "¿Qué principio sugiere iniciar las actividades de prueba lo antes posible?",
    "options": [
      {
        "key": "A",
        "text": "Las pruebas dependen del contexto"
      },
      {
        "key": "B",
        "text": "Pruebas tempranas ahorran tiempo y dinero"
      },
      {
        "key": "C",
        "text": "Paradoja del pesticida"
      },
      {
        "key": "D",
        "text": "Agrupamiento de defectos"
      }
    ],
    "answer": "B",
    "explanation": "Detectar defectos temprano normalmente reduce el costo de corrección y evita propagación."
  },
  {
    "id": 7,
    "category": "Fundamentos",
    "question": "¿Qué principio describe que una pequeña cantidad de componentes suele contener una gran proporción de los defectos?",
    "options": [
      {
        "key": "A",
        "text": "Agrupamiento de defectos"
      },
      {
        "key": "B",
        "text": "Pruebas exhaustivas son imposibles"
      },
      {
        "key": "C",
        "text": "Ausencia de errores es una falacia"
      },
      {
        "key": "D",
        "text": "Las pruebas muestran presencia de defectos"
      }
    ],
    "answer": "A",
    "explanation": "Los defectos suelen concentrarse en determinadas áreas o componentes."
  },
  {
    "id": 8,
    "category": "Fundamentos",
    "question": "¿Qué significa la paradoja del pesticida?",
    "options": [
      {
        "key": "A",
        "text": "Los casos de prueba pierden efectividad si se repiten sin revisarse"
      },
      {
        "key": "B",
        "text": "Los defectos solo aparecen después del despliegue"
      },
      {
        "key": "C",
        "text": "Las pruebas automatizadas siempre superan a las manuales"
      },
      {
        "key": "D",
        "text": "Los defectos graves aparecen únicamente en módulos nuevos"
      }
    ],
    "answer": "A",
    "explanation": "Los mismos casos terminan encontrando menos defectos nuevos y deben revisarse o ampliarse."
  },
  {
    "id": 9,
    "category": "Fundamentos",
    "question": "¿Qué afirma la falacia de ausencia de errores?",
    "options": [
      {
        "key": "A",
        "text": "Un producto con pocos defectos siempre satisface al usuario"
      },
      {
        "key": "B",
        "text": "Encontrar y corregir muchos defectos no sirve si el sistema no satisface necesidades y expectativas"
      },
      {
        "key": "C",
        "text": "Las pruebas no deben basarse en requisitos"
      },
      {
        "key": "D",
        "text": "Un sistema sin fallos observados está listo para producción"
      }
    ],
    "answer": "B",
    "explanation": "La calidad depende también de que el producto resuelva la necesidad correcta."
  },
  {
    "id": 10,
    "category": "Fundamentos",
    "question": "¿Cuál de las siguientes es principalmente una actividad de análisis de pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Identificar condiciones de prueba a partir de la base de pruebas"
      },
      {
        "key": "B",
        "text": "Configurar físicamente el entorno productivo"
      },
      {
        "key": "C",
        "text": "Corregir el código defectuoso"
      },
      {
        "key": "D",
        "text": "Aprobar el presupuesto del proyecto"
      }
    ],
    "answer": "A",
    "explanation": "El análisis responde qué probar y deriva condiciones de prueba."
  },
  {
    "id": 11,
    "category": "Fundamentos",
    "question": "¿Cuál de las siguientes es principalmente una actividad de diseño de pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Transformar condiciones de prueba en casos y otros testware"
      },
      {
        "key": "B",
        "text": "Cerrar todos los defectos abiertos"
      },
      {
        "key": "C",
        "text": "Instalar el sistema en producción"
      },
      {
        "key": "D",
        "text": "Asignar salarios al equipo"
      }
    ],
    "answer": "A",
    "explanation": "El diseño define cómo probar las condiciones identificadas."
  },
  {
    "id": 12,
    "category": "Fundamentos",
    "question": "¿Qué actividad incluye preparar datos de prueba y organizar suites para su ejecución?",
    "options": [
      {
        "key": "A",
        "text": "Implementación de pruebas"
      },
      {
        "key": "B",
        "text": "Análisis de pruebas"
      },
      {
        "key": "C",
        "text": "Planificación de pruebas"
      },
      {
        "key": "D",
        "text": "Depuración"
      }
    ],
    "answer": "A",
    "explanation": "La implementación prepara el testware y el entorno necesarios para ejecutar."
  },
  {
    "id": 13,
    "category": "Fundamentos",
    "question": "¿Qué beneficio aporta la trazabilidad entre base de pruebas y testware?",
    "options": [
      {
        "key": "A",
        "text": "Permite evaluar cobertura y analizar impacto de cambios"
      },
      {
        "key": "B",
        "text": "Garantiza cero defectos"
      },
      {
        "key": "C",
        "text": "Elimina la necesidad de reportes"
      },
      {
        "key": "D",
        "text": "Impide cualquier cambio en requisitos"
      }
    ],
    "answer": "A",
    "explanation": "Relacionar requisitos, pruebas y resultados facilita cobertura, impacto y reporting."
  },
  {
    "id": 14,
    "category": "Fundamentos",
    "question": "¿Cuál es una habilidad especialmente importante para un tester?",
    "options": [
      {
        "key": "A",
        "text": "Pensamiento crítico y comunicación"
      },
      {
        "key": "B",
        "text": "Evitar hacer preguntas al equipo"
      },
      {
        "key": "C",
        "text": "Concentrarse solo en herramientas"
      },
      {
        "key": "D",
        "text": "Trabajar siempre de forma aislada"
      }
    ],
    "answer": "A",
    "explanation": "El testing requiere análisis, curiosidad, comunicación y comprensión del dominio."
  },
  {
    "id": 15,
    "category": "Fundamentos",
    "question": "¿Qué caracteriza al enfoque de equipo completo (whole-team approach)?",
    "options": [
      {
        "key": "A",
        "text": "La calidad es responsabilidad compartida del equipo"
      },
      {
        "key": "B",
        "text": "Solo el tester puede hablar de calidad"
      },
      {
        "key": "C",
        "text": "Los desarrolladores no participan en pruebas"
      },
      {
        "key": "D",
        "text": "El Product Owner ejecuta todas las pruebas"
      }
    ],
    "answer": "A",
    "explanation": "El equipo comparte responsabilidad por la calidad y colabora en actividades de prueba."
  },
  {
    "id": 16,
    "category": "Fundamentos",
    "question": "¿Cuál es una ventaja de cierto grado de independencia en las pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Puede aportar una perspectiva diferente y detectar defectos que el autor no ve"
      },
      {
        "key": "B",
        "text": "Garantiza que no habrá conflictos"
      },
      {
        "key": "C",
        "text": "Elimina la necesidad de conocimiento del dominio"
      },
      {
        "key": "D",
        "text": "Hace innecesaria la colaboración"
      }
    ],
    "answer": "A",
    "explanation": "Una perspectiva independiente reduce sesgos del autor, aunque demasiada separación puede afectar colaboración."
  },
  {
    "id": 17,
    "category": "Fundamentos",
    "question": "¿Cuál puede ser una desventaja de demasiada independencia entre testers y desarrolladores?",
    "options": [
      {
        "key": "A",
        "text": "Menor comunicación y sensación de que la calidad es responsabilidad de otros"
      },
      {
        "key": "B",
        "text": "Mayor objetividad"
      },
      {
        "key": "C",
        "text": "Mayor diversidad de perspectivas"
      },
      {
        "key": "D",
        "text": "Mayor capacidad para cuestionar supuestos"
      }
    ],
    "answer": "A",
    "explanation": "Una separación excesiva puede crear silos y transferir indebidamente la responsabilidad de calidad."
  },
  {
    "id": 18,
    "category": "Fundamentos",
    "question": "¿Cuál es un ejemplo de testware?",
    "options": [
      {
        "key": "A",
        "text": "Casos de prueba, datos de prueba y scripts de prueba"
      },
      {
        "key": "B",
        "text": "Únicamente el código fuente de producción"
      },
      {
        "key": "C",
        "text": "El organigrama de la empresa"
      },
      {
        "key": "D",
        "text": "La factura del proveedor"
      }
    ],
    "answer": "A",
    "explanation": "Testware incluye productos de trabajo generados para planear, diseñar, ejecutar y reportar pruebas."
  },
  {
    "id": 19,
    "category": "Ciclo de vida",
    "question": "¿Cómo influye el modelo de ciclo de vida de desarrollo en las pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Determina aspectos como momento, alcance y enfoque de las actividades de prueba"
      },
      {
        "key": "B",
        "text": "No tiene ningún impacto"
      },
      {
        "key": "C",
        "text": "Solo afecta al equipo de operaciones"
      },
      {
        "key": "D",
        "text": "Impide realizar pruebas tempranas"
      }
    ],
    "answer": "A",
    "explanation": "El SDLC condiciona cuándo y cómo se integran actividades, niveles y roles de prueba."
  },
  {
    "id": 20,
    "category": "Ciclo de vida",
    "question": "¿Cuál es una buena práctica aplicable a distintos modelos de ciclo de vida?",
    "options": [
      {
        "key": "A",
        "text": "Relacionar cada actividad de desarrollo con una actividad de prueba apropiada"
      },
      {
        "key": "B",
        "text": "Realizar todas las pruebas al final"
      },
      {
        "key": "C",
        "text": "Evitar revisar productos de trabajo intermedios"
      },
      {
        "key": "D",
        "text": "Separar completamente testers y negocio"
      }
    ],
    "answer": "A",
    "explanation": "La correspondencia entre desarrollo y pruebas favorece detección temprana y cobertura."
  },
  {
    "id": 21,
    "category": "Ciclo de vida",
    "question": "¿Qué caracteriza a Test-Driven Development (TDD)?",
    "options": [
      {
        "key": "A",
        "text": "Se escriben pruebas antes del código que debe satisfacerlas"
      },
      {
        "key": "B",
        "text": "Se prueba solo después de desplegar"
      },
      {
        "key": "C",
        "text": "Se eliminan las pruebas unitarias"
      },
      {
        "key": "D",
        "text": "Se basa únicamente en pruebas manuales"
      }
    ],
    "answer": "A",
    "explanation": "TDD usa ciclos cortos donde primero se expresa una prueba, luego se implementa y refactoriza."
  },
  {
    "id": 22,
    "category": "Ciclo de vida",
    "question": "¿Qué caracteriza a Acceptance Test-Driven Development (ATDD)?",
    "options": [
      {
        "key": "A",
        "text": "Se derivan pruebas de aceptación colaborativamente antes de implementar la funcionalidad"
      },
      {
        "key": "B",
        "text": "Se limita a pruebas de rendimiento"
      },
      {
        "key": "C",
        "text": "Solo participa el desarrollador"
      },
      {
        "key": "D",
        "text": "Se ejecuta exclusivamente en producción"
      }
    ],
    "answer": "A",
    "explanation": "ATDD usa criterios y ejemplos de aceptación compartidos para guiar el desarrollo."
  },
  {
    "id": 23,
    "category": "Ciclo de vida",
    "question": "¿Qué aporte suele hacer DevOps al testing?",
    "options": [
      {
        "key": "A",
        "text": "Favorecer automatización, retroalimentación rápida y colaboración entre desarrollo y operaciones"
      },
      {
        "key": "B",
        "text": "Eliminar la necesidad de pruebas"
      },
      {
        "key": "C",
        "text": "Reemplazar todos los testers por operadores"
      },
      {
        "key": "D",
        "text": "Prohibir pruebas manuales"
      }
    ],
    "answer": "A",
    "explanation": "DevOps promueve integración, entrega continua y feedback frecuente; testing sigue siendo necesario."
  },
  {
    "id": 24,
    "category": "Ciclo de vida",
    "question": "¿Qué busca el enfoque shift-left?",
    "options": [
      {
        "key": "A",
        "text": "Mover actividades de prueba y calidad hacia etapas más tempranas"
      },
      {
        "key": "B",
        "text": "Posponer todas las pruebas hasta producción"
      },
      {
        "key": "C",
        "text": "Eliminar revisiones"
      },
      {
        "key": "D",
        "text": "Reducir el número de interesados"
      }
    ],
    "answer": "A",
    "explanation": "Shift-left intenta detectar problemas antes y generar feedback más temprano."
  },
  {
    "id": 25,
    "category": "Ciclo de vida",
    "question": "¿Cuál es un objetivo de una retrospectiva?",
    "options": [
      {
        "key": "A",
        "text": "Identificar qué funcionó, qué no y cómo mejorar el proceso"
      },
      {
        "key": "B",
        "text": "Asignar culpables por defectos"
      },
      {
        "key": "C",
        "text": "Sustituir la planificación de pruebas"
      },
      {
        "key": "D",
        "text": "Aprobar el despliegue automáticamente"
      }
    ],
    "answer": "A",
    "explanation": "Las retrospectivas apoyan aprendizaje y mejora continua."
  },
  {
    "id": 26,
    "category": "Ciclo de vida",
    "question": "¿Cuál es el foco principal de las pruebas de componente?",
    "options": [
      {
        "key": "A",
        "text": "Componentes individuales"
      },
      {
        "key": "B",
        "text": "Procesos completos de negocio"
      },
      {
        "key": "C",
        "text": "Aceptación contractual"
      },
      {
        "key": "D",
        "text": "Interacción entre organizaciones"
      }
    ],
    "answer": "A",
    "explanation": "Se verifica el comportamiento de unidades/componentes aislados o con dependencias controladas."
  },
  {
    "id": 27,
    "category": "Ciclo de vida",
    "question": "¿Cuál es el foco principal de las pruebas de integración?",
    "options": [
      {
        "key": "A",
        "text": "Interfaces e interacciones entre componentes o sistemas"
      },
      {
        "key": "B",
        "text": "Únicamente requisitos no funcionales"
      },
      {
        "key": "C",
        "text": "Solo la interfaz gráfica"
      },
      {
        "key": "D",
        "text": "Únicamente pruebas de aceptación"
      }
    ],
    "answer": "A",
    "explanation": "Integration testing se concentra en comunicaciones e interfaces."
  },
  {
    "id": 28,
    "category": "Ciclo de vida",
    "question": "¿Cuál es el foco típico de las pruebas de sistema?",
    "options": [
      {
        "key": "A",
        "text": "El comportamiento del sistema completo frente a requisitos"
      },
      {
        "key": "B",
        "text": "Una sola función aislada del código"
      },
      {
        "key": "C",
        "text": "Solo la interacción entre dos clases"
      },
      {
        "key": "D",
        "text": "Solo el hardware"
      }
    ],
    "answer": "A",
    "explanation": "System testing evalúa el sistema integrado en su conjunto."
  },
  {
    "id": 29,
    "category": "Ciclo de vida",
    "question": "¿Cuál es el objetivo típico de las pruebas de aceptación?",
    "options": [
      {
        "key": "A",
        "text": "Evaluar si el sistema satisface necesidades, criterios de aceptación y preparación para uso"
      },
      {
        "key": "B",
        "text": "Comprobar únicamente cobertura de sentencias"
      },
      {
        "key": "C",
        "text": "Depurar componentes"
      },
      {
        "key": "D",
        "text": "Medir solo uso de CPU"
      }
    ],
    "answer": "A",
    "explanation": "Acceptance testing aporta confianza para decisiones de aceptación y uso."
  },
  {
    "id": 30,
    "category": "Ciclo de vida",
    "question": "Tras corregir un defecto se vuelve a ejecutar la prueba que falló. ¿Qué tipo de prueba es?",
    "options": [
      {
        "key": "A",
        "text": "Prueba de confirmación"
      },
      {
        "key": "B",
        "text": "Prueba de regresión"
      },
      {
        "key": "C",
        "text": "Prueba de humo exclusivamente"
      },
      {
        "key": "D",
        "text": "Prueba de usabilidad"
      }
    ],
    "answer": "A",
    "explanation": "La confirmación comprueba que el defecto específico fue corregido."
  },
  {
    "id": 31,
    "category": "Ciclo de vida",
    "question": "Después de una modificación se ejecutan pruebas sobre funciones previamente correctas para detectar efectos secundarios. ¿Qué es?",
    "options": [
      {
        "key": "A",
        "text": "Prueba de regresión"
      },
      {
        "key": "B",
        "text": "Prueba de confirmación"
      },
      {
        "key": "C",
        "text": "Revisión informal"
      },
      {
        "key": "D",
        "text": "Análisis estático"
      }
    ],
    "answer": "A",
    "explanation": "La regresión busca consecuencias no deseadas en áreas existentes."
  },
  {
    "id": 32,
    "category": "Pruebas estáticas",
    "question": "¿Qué distingue principalmente a las pruebas estáticas?",
    "options": [
      {
        "key": "A",
        "text": "Evalúan productos de trabajo sin ejecutar el software"
      },
      {
        "key": "B",
        "text": "Solo se aplican en producción"
      },
      {
        "key": "C",
        "text": "Siempre requieren automatización"
      },
      {
        "key": "D",
        "text": "No pueden aplicarse a requisitos"
      }
    ],
    "answer": "A",
    "explanation": "Incluyen revisiones y análisis estático sin ejecutar el objeto de prueba."
  },
  {
    "id": 33,
    "category": "Pruebas estáticas",
    "question": "¿Cuál de los siguientes productos de trabajo puede revisarse estáticamente?",
    "options": [
      {
        "key": "A",
        "text": "Requisitos, diseños, código y casos de prueba"
      },
      {
        "key": "B",
        "text": "Solo binarios ejecutables"
      },
      {
        "key": "C",
        "text": "Solo registros de producción"
      },
      {
        "key": "D",
        "text": "Únicamente contratos legales"
      }
    ],
    "answer": "A",
    "explanation": "Muchos productos de trabajo son revisables sin ejecución."
  },
  {
    "id": 34,
    "category": "Pruebas estáticas",
    "question": "¿Cuál es un beneficio de las pruebas estáticas tempranas?",
    "options": [
      {
        "key": "A",
        "text": "Detectar defectos antes de que se propaguen a productos posteriores"
      },
      {
        "key": "B",
        "text": "Garantizar cero fallos en producción"
      },
      {
        "key": "C",
        "text": "Eliminar las pruebas dinámicas"
      },
      {
        "key": "D",
        "text": "Evitar cualquier cambio"
      }
    ],
    "answer": "A",
    "explanation": "Encontrar problemas temprano reduce propagación y retrabajo."
  },
  {
    "id": 35,
    "category": "Pruebas estáticas",
    "question": "¿Cuál es una diferencia válida entre pruebas estáticas y dinámicas?",
    "options": [
      {
        "key": "A",
        "text": "Las dinámicas requieren ejecución del software; las estáticas no"
      },
      {
        "key": "B",
        "text": "Las estáticas solo encuentran fallos y las dinámicas defectos"
      },
      {
        "key": "C",
        "text": "Las dinámicas no usan casos de prueba"
      },
      {
        "key": "D",
        "text": "Las estáticas solo se realizan manualmente"
      }
    ],
    "answer": "A",
    "explanation": "La ejecución es la diferencia esencial."
  },
  {
    "id": 36,
    "category": "Pruebas estáticas",
    "question": "¿Cuál es una actividad típica del proceso de revisión?",
    "options": [
      {
        "key": "A",
        "text": "Comunicar y analizar anomalías encontradas"
      },
      {
        "key": "B",
        "text": "Ejecutar necesariamente el programa"
      },
      {
        "key": "C",
        "text": "Desplegar a producción"
      },
      {
        "key": "D",
        "text": "Eliminar el control de versiones"
      }
    ],
    "answer": "A",
    "explanation": "Las revisiones incluyen planificación, inicio, revisión individual, comunicación/análisis y corrección/reporte."
  },
  {
    "id": 37,
    "category": "Pruebas estáticas",
    "question": "En una revisión formal, ¿quién suele asegurar el desarrollo efectivo de la reunión de revisión?",
    "options": [
      {
        "key": "A",
        "text": "Moderador o facilitador"
      },
      {
        "key": "B",
        "text": "Autor exclusivamente"
      },
      {
        "key": "C",
        "text": "Usuario final necesariamente"
      },
      {
        "key": "D",
        "text": "Administrador de base de datos"
      }
    ],
    "answer": "A",
    "explanation": "El moderador facilita el proceso y ayuda a mantener objetividad y eficacia."
  },
  {
    "id": 38,
    "category": "Pruebas estáticas",
    "question": "¿Cuál de los siguientes tipos de revisión suele ser el más formal?",
    "options": [
      {
        "key": "A",
        "text": "Inspección"
      },
      {
        "key": "B",
        "text": "Revisión informal"
      },
      {
        "key": "C",
        "text": "Walkthrough"
      },
      {
        "key": "D",
        "text": "Revisión ad hoc"
      }
    ],
    "answer": "A",
    "explanation": "La inspección normalmente tiene proceso, roles y criterios definidos con mayor formalidad."
  },
  {
    "id": 39,
    "category": "Pruebas estáticas",
    "question": "¿Qué factor favorece el éxito de una revisión?",
    "options": [
      {
        "key": "A",
        "text": "Objetivos claros, participantes adecuados y tiempo suficiente"
      },
      {
        "key": "B",
        "text": "Usar la revisión para evaluar personas"
      },
      {
        "key": "C",
        "text": "Evitar preparación previa"
      },
      {
        "key": "D",
        "text": "Limitar toda comunicación entre participantes"
      }
    ],
    "answer": "A",
    "explanation": "Las revisiones funcionan mejor con objetivos, preparación, formación y cultura de colaboración."
  },
  {
    "id": 40,
    "category": "Análisis y diseño",
    "question": "¿Qué distingue a una técnica de caja negra?",
    "options": [
      {
        "key": "A",
        "text": "Deriva pruebas del comportamiento especificado sin basarse en la estructura interna"
      },
      {
        "key": "B",
        "text": "Se basa únicamente en sentencias del código"
      },
      {
        "key": "C",
        "text": "Solo puede usarse por desarrolladores"
      },
      {
        "key": "D",
        "text": "No usa requisitos"
      }
    ],
    "answer": "A",
    "explanation": "Las técnicas de caja negra se basan en especificaciones y comportamiento observable."
  },
  {
    "id": 41,
    "category": "Análisis y diseño",
    "question": "Un campo acepta enteros de 18 a 65 inclusive. ¿Cuál es una partición de equivalencia válida?",
    "options": [
      {
        "key": "A",
        "text": "18 a 65"
      },
      {
        "key": "B",
        "text": "Menores de 18"
      },
      {
        "key": "C",
        "text": "Mayores de 65"
      },
      {
        "key": "D",
        "text": "Valores no numéricos únicamente"
      }
    ],
    "answer": "A",
    "explanation": "Todos los enteros del rango aceptado forman una partición válida respecto a esa regla."
  },
  {
    "id": 42,
    "category": "Análisis y diseño",
    "question": "Para el campo de 18 a 65 inclusive, ¿qué valor representa una partición inválida inferior?",
    "options": [
      {
        "key": "A",
        "text": "17"
      },
      {
        "key": "B",
        "text": "18"
      },
      {
        "key": "C",
        "text": "40"
      },
      {
        "key": "D",
        "text": "65"
      }
    ],
    "answer": "A",
    "explanation": "17 está fuera del rango por debajo del límite inferior."
  },
  {
    "id": 43,
    "category": "Análisis y diseño",
    "question": "Un campo acepta enteros de 1 a 100 inclusive. En BVA de 2 valores, ¿qué conjunto prueba ambos límites?",
    "options": [
      {
        "key": "A",
        "text": "0, 1, 100, 101"
      },
      {
        "key": "B",
        "text": "1, 2, 99, 100"
      },
      {
        "key": "C",
        "text": "0, 50, 100, 150"
      },
      {
        "key": "D",
        "text": "1, 50, 51, 100"
      }
    ],
    "answer": "A",
    "explanation": "En BVA de 2 valores se usan el valor límite y el vecino inmediatamente fuera para cada frontera."
  },
  {
    "id": 44,
    "category": "Análisis y diseño",
    "question": "Para un rango válido 10..20 inclusive, ¿cuáles son los cuatro valores de BVA de 2 valores?",
    "options": [
      {
        "key": "A",
        "text": "9, 10, 20, 21"
      },
      {
        "key": "B",
        "text": "10, 11, 19, 20"
      },
      {
        "key": "C",
        "text": "8, 9, 21, 22"
      },
      {
        "key": "D",
        "text": "9, 11, 19, 21"
      }
    ],
    "answer": "A",
    "explanation": "Los límites son 10 y 20; sus vecinos externos inmediatos son 9 y 21."
  },
  {
    "id": 45,
    "category": "Análisis y diseño",
    "question": "¿Cuándo es especialmente útil una tabla de decisión?",
    "options": [
      {
        "key": "A",
        "text": "Cuando combinaciones de condiciones producen diferentes acciones"
      },
      {
        "key": "B",
        "text": "Cuando solo importa el orden temporal de estados"
      },
      {
        "key": "C",
        "text": "Cuando se mide cobertura de sentencias"
      },
      {
        "key": "D",
        "text": "Cuando no existen reglas de negocio"
      }
    ],
    "answer": "A",
    "explanation": "Las tablas representan reglas a partir de combinaciones de condiciones y acciones."
  },
  {
    "id": 46,
    "category": "Análisis y diseño",
    "question": "Una regla depende de dos condiciones booleanas independientes. ¿Cuántas combinaciones completas hay antes de simplificar reglas?",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "8"
      }
    ],
    "answer": "A",
    "explanation": "Cada condición tiene 2 valores: 2 x 2 = 4 combinaciones."
  },
  {
    "id": 47,
    "category": "Análisis y diseño",
    "question": "¿Cuándo es especialmente útil la prueba de transición de estados?",
    "options": [
      {
        "key": "A",
        "text": "Cuando la respuesta depende del estado actual y de eventos anteriores"
      },
      {
        "key": "B",
        "text": "Cuando cada entrada es totalmente independiente del historial"
      },
      {
        "key": "C",
        "text": "Solo para revisar documentos"
      },
      {
        "key": "D",
        "text": "Solo para pruebas de rendimiento"
      }
    ],
    "answer": "A",
    "explanation": "La técnica modela estados, eventos, transiciones y acciones."
  },
  {
    "id": 48,
    "category": "Análisis y diseño",
    "question": "Un cajero bloquea una tarjeta tras tres PIN incorrectos consecutivos. ¿Qué técnica se adapta mejor?",
    "options": [
      {
        "key": "A",
        "text": "Transición de estados"
      },
      {
        "key": "B",
        "text": "Partición de equivalencia exclusivamente"
      },
      {
        "key": "C",
        "text": "Cobertura de sentencias exclusivamente"
      },
      {
        "key": "D",
        "text": "Checklist sin modelo"
      }
    ],
    "answer": "A",
    "explanation": "El comportamiento depende de la secuencia y el estado acumulado."
  },
  {
    "id": 49,
    "category": "Análisis y diseño",
    "question": "¿Qué mide la cobertura de sentencias?",
    "options": [
      {
        "key": "A",
        "text": "Porcentaje de sentencias ejecutables ejecutadas por las pruebas"
      },
      {
        "key": "B",
        "text": "Porcentaje de requisitos aprobados por negocio"
      },
      {
        "key": "C",
        "text": "Número de defectos corregidos"
      },
      {
        "key": "D",
        "text": "Porcentaje de usuarios satisfechos"
      }
    ],
    "answer": "A",
    "explanation": "La cobertura de sentencias es una métrica estructural del código ejecutado."
  },
  {
    "id": 50,
    "category": "Análisis y diseño",
    "question": "¿Qué significa 100% de cobertura de sentencias?",
    "options": [
      {
        "key": "A",
        "text": "Cada sentencia ejecutable se ejecutó al menos una vez"
      },
      {
        "key": "B",
        "text": "Todas las ramas se ejecutaron necesariamente"
      },
      {
        "key": "C",
        "text": "Todos los caminos posibles se cubrieron"
      },
      {
        "key": "D",
        "text": "No quedan defectos"
      }
    ],
    "answer": "A",
    "explanation": "100% de sentencias no implica 100% de ramas ni ausencia de defectos."
  },
  {
    "id": 51,
    "category": "Análisis y diseño",
    "question": "¿Qué mide la cobertura de ramas?",
    "options": [
      {
        "key": "A",
        "text": "Porcentaje de ramas o resultados de decisión ejercitados"
      },
      {
        "key": "B",
        "text": "Número de líneas escritas"
      },
      {
        "key": "C",
        "text": "Porcentaje de requisitos documentados"
      },
      {
        "key": "D",
        "text": "Cantidad de casos automatizados"
      }
    ],
    "answer": "A",
    "explanation": "Branch coverage considera resultados posibles de decisiones en el flujo de control."
  },
  {
    "id": 52,
    "category": "Análisis y diseño",
    "question": "Si una decisión IF puede evaluar verdadero o falso, ¿cuántas ramas tiene asociadas normalmente?",
    "options": [
      {
        "key": "A",
        "text": "2"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "answer": "A",
    "explanation": "Los dos resultados posibles de la decisión generan dos ramas."
  },
  {
    "id": 53,
    "category": "Análisis y diseño",
    "question": "¿Cuál es una ventaja de las técnicas de caja blanca?",
    "options": [
      {
        "key": "A",
        "text": "Permiten medir cobertura estructural y detectar partes no ejercitadas"
      },
      {
        "key": "B",
        "text": "Garantizan que los requisitos son correctos"
      },
      {
        "key": "C",
        "text": "Eliminan la necesidad de caja negra"
      },
      {
        "key": "D",
        "text": "Solo requieren conocimiento del usuario"
      }
    ],
    "answer": "A",
    "explanation": "La visibilidad de la estructura permite evaluar qué código fue o no ejercitado."
  },
  {
    "id": 54,
    "category": "Análisis y diseño",
    "question": "¿Qué es error guessing?",
    "options": [
      {
        "key": "A",
        "text": "Diseñar pruebas basándose en experiencia sobre defectos probables"
      },
      {
        "key": "B",
        "text": "Generar entradas completamente al azar sin propósito"
      },
      {
        "key": "C",
        "text": "Medir ramas automáticamente"
      },
      {
        "key": "D",
        "text": "Revisar requisitos con checklist obligatoria"
      }
    ],
    "answer": "A",
    "explanation": "Usa conocimiento y experiencia para anticipar errores y zonas débiles."
  },
  {
    "id": 55,
    "category": "Análisis y diseño",
    "question": "¿Qué caracteriza a las pruebas exploratorias?",
    "options": [
      {
        "key": "A",
        "text": "Aprendizaje, diseño y ejecución ocurren de forma integrada"
      },
      {
        "key": "B",
        "text": "Todos los casos deben escribirse por completo antes de probar"
      },
      {
        "key": "C",
        "text": "No requieren habilidad del tester"
      },
      {
        "key": "D",
        "text": "Solo se usan sin requisitos"
      }
    ],
    "answer": "A",
    "explanation": "El tester adapta sus pruebas a medida que aprende del producto."
  },
  {
    "id": 56,
    "category": "Análisis y diseño",
    "question": "¿Qué es una sesión de pruebas exploratorias basada en charters?",
    "options": [
      {
        "key": "A",
        "text": "Una sesión guiada por una misión u objetivo de prueba"
      },
      {
        "key": "B",
        "text": "Una ejecución totalmente sin objetivo"
      },
      {
        "key": "C",
        "text": "Un sustituto de todos los criterios de aceptación"
      },
      {
        "key": "D",
        "text": "Una revisión formal de código"
      }
    ],
    "answer": "A",
    "explanation": "El charter enfoca la exploración sin prescribir cada paso."
  },
  {
    "id": 57,
    "category": "Análisis y diseño",
    "question": "¿Qué caracteriza al checklist-based testing?",
    "options": [
      {
        "key": "A",
        "text": "Las pruebas se apoyan en una lista de condiciones o aspectos a verificar"
      },
      {
        "key": "B",
        "text": "Solo usa cobertura de código"
      },
      {
        "key": "C",
        "text": "No permite experiencia del tester"
      },
      {
        "key": "D",
        "text": "Exige automatización"
      }
    ],
    "answer": "A",
    "explanation": "Las checklists ayudan a asegurar que aspectos relevantes sean considerados."
  },
  {
    "id": 58,
    "category": "Análisis y diseño",
    "question": "¿Cuál es una característica deseable de una buena historia de usuario?",
    "options": [
      {
        "key": "A",
        "text": "Expresa valor para un usuario o interesado y puede aclararse colaborativamente"
      },
      {
        "key": "B",
        "text": "Describe únicamente detalles internos de implementación"
      },
      {
        "key": "C",
        "text": "Nunca incluye criterios de aceptación"
      },
      {
        "key": "D",
        "text": "Debe ser escrita solo por testers"
      }
    ],
    "answer": "A",
    "explanation": "Las historias enfocan necesidad/valor y se enriquecen mediante conversación y criterios."
  },
  {
    "id": 59,
    "category": "Análisis y diseño",
    "question": "En el formato habitual de historia de usuario, ¿qué expresa “para poder ...”?",
    "options": [
      {
        "key": "A",
        "text": "El valor o beneficio esperado"
      },
      {
        "key": "B",
        "text": "El rol del usuario"
      },
      {
        "key": "C",
        "text": "La implementación técnica"
      },
      {
        "key": "D",
        "text": "La prioridad numérica"
      }
    ],
    "answer": "A",
    "explanation": "El tercer elemento expresa por qué se necesita la capacidad."
  },
  {
    "id": 60,
    "category": "Análisis y diseño",
    "question": "¿Cuál es una función de los criterios de aceptación?",
    "options": [
      {
        "key": "A",
        "text": "Definir condiciones que deben cumplirse para aceptar una historia o funcionalidad"
      },
      {
        "key": "B",
        "text": "Reemplazar completamente los requisitos"
      },
      {
        "key": "C",
        "text": "Definir salarios del equipo"
      },
      {
        "key": "D",
        "text": "Determinar el lenguaje de programación"
      }
    ],
    "answer": "A",
    "explanation": "Los criterios concretan el comportamiento esperado y apoyan pruebas de aceptación."
  },
  {
    "id": 61,
    "category": "Análisis y diseño",
    "question": "¿Qué forma puede adoptar un criterio de aceptación?",
    "options": [
      {
        "key": "A",
        "text": "Escenarios orientados a reglas o ejemplos, como Given/When/Then"
      },
      {
        "key": "B",
        "text": "Solo diagramas de clases"
      },
      {
        "key": "C",
        "text": "Solo métricas de CPU"
      },
      {
        "key": "D",
        "text": "Únicamente código fuente"
      }
    ],
    "answer": "A",
    "explanation": "Los criterios pueden expresarse como reglas o escenarios ejemplificados."
  },
  {
    "id": 62,
    "category": "Análisis y diseño",
    "question": "¿Cuál es un beneficio de escribir criterios de aceptación colaborativamente?",
    "options": [
      {
        "key": "A",
        "text": "Crear entendimiento compartido entre negocio, desarrollo y pruebas"
      },
      {
        "key": "B",
        "text": "Evitar participación del negocio"
      },
      {
        "key": "C",
        "text": "Garantizar que no habrá cambios"
      },
      {
        "key": "D",
        "text": "Eliminar la necesidad de conversar"
      }
    ],
    "answer": "A",
    "explanation": "La colaboración reduce ambigüedad y alinea expectativas."
  },
  {
    "id": 63,
    "category": "Análisis y diseño",
    "question": "¿Cuál describe mejor ATDD?",
    "options": [
      {
        "key": "A",
        "text": "Derivar ejemplos y pruebas de aceptación antes de implementar, de forma colaborativa"
      },
      {
        "key": "B",
        "text": "Ejecutar solo pruebas unitarias después del código"
      },
      {
        "key": "C",
        "text": "Diseñar exclusivamente pruebas de carga"
      },
      {
        "key": "D",
        "text": "Realizar únicamente revisiones estáticas"
      }
    ],
    "answer": "A",
    "explanation": "ATDD usa ejemplos de aceptación para guiar el desarrollo."
  },
  {
    "id": 64,
    "category": "Análisis y diseño",
    "question": "¿Cuál técnica sería más adecuada para probar descuentos dependientes de “cliente premium” y “compra superior a $1000”?",
    "options": [
      {
        "key": "A",
        "text": "Tabla de decisión"
      },
      {
        "key": "B",
        "text": "Transición de estados"
      },
      {
        "key": "C",
        "text": "Cobertura de sentencias exclusivamente"
      },
      {
        "key": "D",
        "text": "Prueba aleatoria sin reglas"
      }
    ],
    "answer": "A",
    "explanation": "Son condiciones combinatorias que producen acciones distintas."
  },
  {
    "id": 65,
    "category": "Análisis y diseño",
    "question": "Una contraseña válida debe tener longitud entre 8 y 20 caracteres. ¿Qué conjunto representa particiones principales por longitud?",
    "options": [
      {
        "key": "A",
        "text": "0-7, 8-20, 21 o más"
      },
      {
        "key": "B",
        "text": "8, 20 únicamente"
      },
      {
        "key": "C",
        "text": "0-20 y 21 o más"
      },
      {
        "key": "D",
        "text": "1-8 y 9-20"
      }
    ],
    "answer": "A",
    "explanation": "Hay una clase inválida inferior, una válida y una inválida superior."
  },
  {
    "id": 66,
    "category": "Análisis y diseño",
    "question": "Para una regla “temperatura válida de 15 a 30 inclusive”, ¿qué valor está justo por encima del límite superior?",
    "options": [
      {
        "key": "A",
        "text": "31"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "29"
      },
      {
        "key": "D",
        "text": "15"
      }
    ],
    "answer": "A",
    "explanation": "31 es el entero adyacente inmediatamente superior a 30."
  },
  {
    "id": 67,
    "category": "Análisis y diseño",
    "question": "¿Qué afirmación sobre cobertura es correcta?",
    "options": [
      {
        "key": "A",
        "text": "Una cobertura alta aporta información, pero no demuestra ausencia de defectos"
      },
      {
        "key": "B",
        "text": "100% de sentencias garantiza 100% de ramas"
      },
      {
        "key": "C",
        "text": "100% de ramas garantiza todos los caminos posibles"
      },
      {
        "key": "D",
        "text": "La cobertura solo puede medirse manualmente"
      }
    ],
    "answer": "A",
    "explanation": "La cobertura ayuda a medir alcance, pero no prueba corrección total."
  },
  {
    "id": 68,
    "category": "Análisis y diseño",
    "question": "¿Qué combinación de técnicas ofrece perspectivas complementarias?",
    "options": [
      {
        "key": "A",
        "text": "Caja negra, caja blanca y técnicas basadas en experiencia"
      },
      {
        "key": "B",
        "text": "Solo una técnica repetida siempre"
      },
      {
        "key": "C",
        "text": "Únicamente pruebas exploratorias"
      },
      {
        "key": "D",
        "text": "Solo cobertura estructural"
      }
    ],
    "answer": "A",
    "explanation": "Diferentes familias encuentran distintos tipos de problemas y se complementan."
  },
  {
    "id": 69,
    "category": "Gestión de pruebas",
    "question": "¿Cuál es un propósito del plan de pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Documentar objetivos, recursos, enfoque, calendario y criterios relevantes"
      },
      {
        "key": "B",
        "text": "Sustituir todos los casos de prueba"
      },
      {
        "key": "C",
        "text": "Eliminar riesgos de proyecto"
      },
      {
        "key": "D",
        "text": "Definir únicamente herramientas"
      }
    ],
    "answer": "A",
    "explanation": "El plan orienta y comunica cómo se organizará el esfuerzo de prueba."
  },
  {
    "id": 70,
    "category": "Gestión de pruebas",
    "question": "¿Cuál es una contribución del tester a la planificación de una iteración?",
    "options": [
      {
        "key": "A",
        "text": "Aportar estimaciones, riesgos, tareas y criterios de prueba"
      },
      {
        "key": "B",
        "text": "Decidir unilateralmente el alcance del producto"
      },
      {
        "key": "C",
        "text": "Aprobar presupuestos corporativos"
      },
      {
        "key": "D",
        "text": "Excluir defectos del backlog"
      }
    ],
    "answer": "A",
    "explanation": "Testers ayudan a estimar esfuerzo y preparar tareas de calidad/prueba."
  },
  {
    "id": 71,
    "category": "Gestión de pruebas",
    "question": "¿Qué son criterios de entrada?",
    "options": [
      {
        "key": "A",
        "text": "Condiciones que deberían cumplirse para iniciar una actividad de prueba"
      },
      {
        "key": "B",
        "text": "Condiciones para cerrar la empresa"
      },
      {
        "key": "C",
        "text": "Defectos que deben ignorarse"
      },
      {
        "key": "D",
        "text": "Métricas usadas solo al final"
      }
    ],
    "answer": "A",
    "explanation": "Entry criteria establecen precondiciones para comenzar de forma efectiva."
  },
  {
    "id": 72,
    "category": "Gestión de pruebas",
    "question": "¿Qué son criterios de salida?",
    "options": [
      {
        "key": "A",
        "text": "Condiciones para considerar completada una actividad o nivel de prueba"
      },
      {
        "key": "B",
        "text": "Condiciones para contratar personal"
      },
      {
        "key": "C",
        "text": "Reglas de codificación"
      },
      {
        "key": "D",
        "text": "Criterios para crear una rama Git"
      }
    ],
    "answer": "A",
    "explanation": "Exit criteria apoyan la decisión de finalizar basándose en objetivos y evidencias."
  },
  {
    "id": 73,
    "category": "Gestión de pruebas",
    "question": "¿Qué técnica de estimación utiliza experiencia y juicio de expertos?",
    "options": [
      {
        "key": "A",
        "text": "Estimación basada en expertos"
      },
      {
        "key": "B",
        "text": "Solo métricas de cobertura"
      },
      {
        "key": "C",
        "text": "Transición de estados"
      },
      {
        "key": "D",
        "text": "Partición de equivalencia"
      }
    ],
    "answer": "A",
    "explanation": "Los expertos usan experiencia de trabajos similares para estimar."
  },
  {
    "id": 74,
    "category": "Gestión de pruebas",
    "question": "¿Qué caracteriza a una estimación basada en ratios?",
    "options": [
      {
        "key": "A",
        "text": "Usa relaciones históricas entre esfuerzo de prueba y otras medidas"
      },
      {
        "key": "B",
        "text": "No utiliza datos previos"
      },
      {
        "key": "C",
        "text": "Siempre produce un valor exacto"
      },
      {
        "key": "D",
        "text": "Solo aplica a pruebas manuales"
      }
    ],
    "answer": "A",
    "explanation": "Se extrapolan proporciones obtenidas de proyectos o actividades comparables."
  },
  {
    "id": 75,
    "category": "Gestión de pruebas",
    "question": "¿Qué busca la priorización de casos de prueba?",
    "options": [
      {
        "key": "A",
        "text": "Ejecutar antes las pruebas que aportan mayor valor según criterios definidos"
      },
      {
        "key": "B",
        "text": "Eliminar casos difíciles"
      },
      {
        "key": "C",
        "text": "Asegurar orden alfabético"
      },
      {
        "key": "D",
        "text": "Evitar pruebas de alto riesgo"
      }
    ],
    "answer": "A",
    "explanation": "La priorización maximiza feedback temprano, cobertura o reducción de riesgo."
  },
  {
    "id": 76,
    "category": "Gestión de pruebas",
    "question": "¿Qué criterio puede usarse para priorizar pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Riesgo, cobertura, dependencias o probabilidad de fallo"
      },
      {
        "key": "B",
        "text": "Solo longitud del nombre del caso"
      },
      {
        "key": "C",
        "text": "Color de la interfaz"
      },
      {
        "key": "D",
        "text": "Antigüedad del tester"
      }
    ],
    "answer": "A",
    "explanation": "La prioridad debe responder a criterios relevantes para valor y riesgo."
  },
  {
    "id": 77,
    "category": "Gestión de pruebas",
    "question": "¿Qué representa la pirámide de pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Una distribución con muchas pruebas de bajo nivel y menos pruebas de extremo a extremo"
      },
      {
        "key": "B",
        "text": "Una obligación de automatizar todo"
      },
      {
        "key": "C",
        "text": "Una secuencia fija de defectos"
      },
      {
        "key": "D",
        "text": "Una jerarquía de testers"
      }
    ],
    "answer": "A",
    "explanation": "La pirámide promueve una base amplia de pruebas rápidas y focalizadas."
  },
  {
    "id": 78,
    "category": "Gestión de pruebas",
    "question": "¿Cuál es una razón para tener más pruebas de componente que end-to-end?",
    "options": [
      {
        "key": "A",
        "text": "Suelen ser más rápidas, aisladas y baratas de ejecutar y mantener"
      },
      {
        "key": "B",
        "text": "Las end-to-end nunca aportan valor"
      },
      {
        "key": "C",
        "text": "Las pruebas de componente cubren siempre todos los riesgos"
      },
      {
        "key": "D",
        "text": "ISTQB prohíbe las pruebas de sistema"
      }
    ],
    "answer": "A",
    "explanation": "El feedback rápido y el aislamiento favorecen una base grande de pruebas de bajo nivel."
  },
  {
    "id": 79,
    "category": "Gestión de pruebas",
    "question": "¿Para qué sirven los cuadrantes de testing?",
    "options": [
      {
        "key": "A",
        "text": "Ayudan a relacionar tipos de prueba con objetivos de apoyo al equipo o crítica del producto"
      },
      {
        "key": "B",
        "text": "Sustituyen todos los niveles de prueba"
      },
      {
        "key": "C",
        "text": "Miden únicamente cobertura de código"
      },
      {
        "key": "D",
        "text": "Definen roles jerárquicos"
      }
    ],
    "answer": "A",
    "explanation": "Los cuadrantes son un modelo para pensar en propósitos y tipos de pruebas."
  },
  {
    "id": 80,
    "category": "Gestión de pruebas",
    "question": "¿Qué es un riesgo?",
    "options": [
      {
        "key": "A",
        "text": "Un posible evento o condición con efecto negativo, caracterizado por probabilidad e impacto"
      },
      {
        "key": "B",
        "text": "Un defecto confirmado únicamente"
      },
      {
        "key": "C",
        "text": "Una prueba fallida siempre"
      },
      {
        "key": "D",
        "text": "Un requisito obligatorio"
      }
    ],
    "answer": "A",
    "explanation": "El riesgo combina incertidumbre con consecuencias potenciales."
  },
  {
    "id": 81,
    "category": "Gestión de pruebas",
    "question": "¿Cómo se determina normalmente el nivel de riesgo?",
    "options": [
      {
        "key": "A",
        "text": "Combinando probabilidad e impacto"
      },
      {
        "key": "B",
        "text": "Contando líneas de código solamente"
      },
      {
        "key": "C",
        "text": "Midiendo número de testers"
      },
      {
        "key": "D",
        "text": "Usando únicamente prioridad de negocio"
      }
    ],
    "answer": "A",
    "explanation": "La exposición o nivel de riesgo depende de la probabilidad y del impacto."
  },
  {
    "id": 82,
    "category": "Gestión de pruebas",
    "question": "¿Cuál es un ejemplo de riesgo de proyecto?",
    "options": [
      {
        "key": "A",
        "text": "Falta de personal con habilidades necesarias"
      },
      {
        "key": "B",
        "text": "Cálculo incorrecto de impuestos en el producto"
      },
      {
        "key": "C",
        "text": "Pérdida de datos por una función defectuosa"
      },
      {
        "key": "D",
        "text": "Respuesta demasiado lenta al usuario"
      }
    ],
    "answer": "A",
    "explanation": "El riesgo de proyecto afecta capacidad de entregar; los otros son riesgos del producto."
  },
  {
    "id": 83,
    "category": "Gestión de pruebas",
    "question": "¿Cuál es un ejemplo de riesgo de producto?",
    "options": [
      {
        "key": "A",
        "text": "El sistema calcula incorrectamente el total de una factura"
      },
      {
        "key": "B",
        "text": "Un proveedor entrega tarde un entorno"
      },
      {
        "key": "C",
        "text": "El presupuesto de pruebas se reduce"
      },
      {
        "key": "D",
        "text": "Un tester clave deja el proyecto"
      }
    ],
    "answer": "A",
    "explanation": "Un comportamiento incorrecto del producto es un riesgo de calidad del producto."
  },
  {
    "id": 84,
    "category": "Gestión de pruebas",
    "question": "¿Qué persigue el análisis de riesgo de producto?",
    "options": [
      {
        "key": "A",
        "text": "Identificar y evaluar riesgos para orientar el alcance e intensidad de las pruebas"
      },
      {
        "key": "B",
        "text": "Eliminar toda incertidumbre"
      },
      {
        "key": "C",
        "text": "Definir salarios"
      },
      {
        "key": "D",
        "text": "Elegir el lenguaje de programación"
      }
    ],
    "answer": "A",
    "explanation": "Los riesgos ayudan a focalizar esfuerzo donde las consecuencias potenciales son mayores."
  },
  {
    "id": 85,
    "category": "Gestión de pruebas",
    "question": "¿Cómo puede el testing contribuir al control del riesgo de producto?",
    "options": [
      {
        "key": "A",
        "text": "Reduciendo incertidumbre mediante pruebas y proporcionando información sobre riesgo residual"
      },
      {
        "key": "B",
        "text": "Garantizando que el riesgo llegue a cero"
      },
      {
        "key": "C",
        "text": "Ignorando funciones de alto riesgo"
      },
      {
        "key": "D",
        "text": "Eliminando la necesidad de mitigación"
      }
    ],
    "answer": "A",
    "explanation": "Las pruebas aportan evidencia para reducir y reevaluar riesgos, no garantizan riesgo cero."
  },
  {
    "id": 86,
    "category": "Gestión de pruebas",
    "question": "¿Cuál es una métrica útil para monitorear el progreso de pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Casos ejecutados, pasados/fallidos y cobertura lograda"
      },
      {
        "key": "B",
        "text": "Número de correos enviados por el equipo"
      },
      {
        "key": "C",
        "text": "Edad promedio de los testers"
      },
      {
        "key": "D",
        "text": "Cantidad de reuniones sin relación"
      }
    ],
    "answer": "A",
    "explanation": "Las métricas deben reflejar progreso, calidad, cobertura, defectos y recursos."
  },
  {
    "id": 87,
    "category": "Gestión de pruebas",
    "question": "¿Cuál es un propósito de un informe de progreso de pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Comunicar estado actual, desviaciones, riesgos y próximos pasos"
      },
      {
        "key": "B",
        "text": "Reemplazar el plan de pruebas"
      },
      {
        "key": "C",
        "text": "Ocultar defectos abiertos"
      },
      {
        "key": "D",
        "text": "Eliminar criterios de salida"
      }
    ],
    "answer": "A",
    "explanation": "El reporte ayuda a interesados a entender estado y tomar decisiones."
  },
  {
    "id": 88,
    "category": "Gestión de pruebas",
    "question": "¿Qué debe adaptarse según la audiencia de un reporte de pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Nivel de detalle, formato y énfasis de la información"
      },
      {
        "key": "B",
        "text": "Los resultados reales"
      },
      {
        "key": "C",
        "text": "Los defectos encontrados"
      },
      {
        "key": "D",
        "text": "La evidencia disponible"
      }
    ],
    "answer": "A",
    "explanation": "La información debe ser veraz, pero la presentación puede ajustarse a las necesidades de cada audiencia."
  },
  {
    "id": 89,
    "category": "Gestión de pruebas",
    "question": "¿Qué es control de pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Tomar acciones correctivas basadas en información de monitoreo"
      },
      {
        "key": "B",
        "text": "Crear únicamente casos nuevos"
      },
      {
        "key": "C",
        "text": "Cerrar automáticamente todos los defectos"
      },
      {
        "key": "D",
        "text": "Ejecutar solo regresión"
      }
    ],
    "answer": "A",
    "explanation": "Monitoring observa; control ajusta el plan o actividades cuando hace falta."
  },
  {
    "id": 90,
    "category": "Gestión de pruebas",
    "question": "¿Cuál es una actividad típica de finalización de pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Archivar testware útil y resumir resultados y lecciones aprendidas"
      },
      {
        "key": "B",
        "text": "Eliminar toda evidencia"
      },
      {
        "key": "C",
        "text": "Abrir todos los defectos cerrados"
      },
      {
        "key": "D",
        "text": "Borrar métricas"
      }
    ],
    "answer": "A",
    "explanation": "El cierre conserva activos reutilizables y documenta el resultado de las pruebas."
  },
  {
    "id": 91,
    "category": "Gestión de pruebas",
    "question": "¿Cuál es el objetivo de la gestión de configuración en testing?",
    "options": [
      {
        "key": "A",
        "text": "Mantener identificados y controlados versiones de testware, objetos de prueba y elementos relacionados"
      },
      {
        "key": "B",
        "text": "Aumentar cobertura automáticamente"
      },
      {
        "key": "C",
        "text": "Corregir defectos de código"
      },
      {
        "key": "D",
        "text": "Reemplazar control de versiones"
      }
    ],
    "answer": "A",
    "explanation": "CM asegura reproducibilidad y coherencia entre versiones."
  },
  {
    "id": 92,
    "category": "Gestión de pruebas",
    "question": "¿Por qué es importante conocer la versión exacta del objeto de prueba?",
    "options": [
      {
        "key": "A",
        "text": "Para reproducir resultados y relacionarlos con la configuración probada"
      },
      {
        "key": "B",
        "text": "Para evitar documentar defectos"
      },
      {
        "key": "C",
        "text": "Para eliminar datos de prueba"
      },
      {
        "key": "D",
        "text": "Para impedir regresiones"
      }
    ],
    "answer": "A",
    "explanation": "Sin configuración identificada, resultados y defectos pueden no ser reproducibles."
  },
  {
    "id": 93,
    "category": "Gestión de pruebas",
    "question": "¿Cuál es un objetivo del reporte de defectos?",
    "options": [
      {
        "key": "A",
        "text": "Proporcionar información suficiente para entender, reproducir y gestionar el defecto"
      },
      {
        "key": "B",
        "text": "Culpar al autor del código"
      },
      {
        "key": "C",
        "text": "Ocultar condiciones de reproducción"
      },
      {
        "key": "D",
        "text": "Reducir el número de pruebas"
      }
    ],
    "answer": "A",
    "explanation": "Un buen reporte facilita análisis, priorización, corrección y seguimiento."
  },
  {
    "id": 94,
    "category": "Gestión de pruebas",
    "question": "¿Qué información es especialmente útil en un reporte de defecto?",
    "options": [
      {
        "key": "A",
        "text": "Pasos para reproducir, resultado esperado y resultado observado"
      },
      {
        "key": "B",
        "text": "Solo el nombre del tester"
      },
      {
        "key": "C",
        "text": "Únicamente una captura sin contexto"
      },
      {
        "key": "D",
        "text": "La opinión sobre quién tuvo la culpa"
      }
    ],
    "answer": "A",
    "explanation": "La reproducibilidad requiere contexto, pasos, datos, entorno y resultados."
  },
  {
    "id": 95,
    "category": "Gestión de pruebas",
    "question": "¿Qué diferencia existe entre severidad y prioridad de un defecto?",
    "options": [
      {
        "key": "A",
        "text": "Severidad refleja impacto; prioridad refleja urgencia de atención"
      },
      {
        "key": "B",
        "text": "Son siempre sinónimos"
      },
      {
        "key": "C",
        "text": "Severidad es quién lo reporta y prioridad es dónde ocurre"
      },
      {
        "key": "D",
        "text": "Prioridad solo aplica a pruebas automatizadas"
      }
    ],
    "answer": "A",
    "explanation": "Un defecto puede tener alto impacto pero distinta urgencia según contexto de negocio."
  },
  {
    "id": 96,
    "category": "Gestión de pruebas",
    "question": "Un defecto cosmético menor en la página principal antes de una gran campaña puede tener:",
    "options": [
      {
        "key": "A",
        "text": "Baja severidad pero alta prioridad"
      },
      {
        "key": "B",
        "text": "Alta severidad y necesariamente baja prioridad"
      },
      {
        "key": "C",
        "text": "Severidad y prioridad siempre iguales"
      },
      {
        "key": "D",
        "text": "Ninguna prioridad"
      }
    ],
    "answer": "A",
    "explanation": "El impacto funcional puede ser bajo, pero la urgencia de corregirlo puede ser alta."
  },
  {
    "id": 97,
    "category": "Gestión de pruebas",
    "question": "¿Qué práctica ayuda a comunicar el estado de pruebas de forma eficaz?",
    "options": [
      {
        "key": "A",
        "text": "Usar información objetiva y adaptar el mensaje a interesados"
      },
      {
        "key": "B",
        "text": "Reportar solo buenas noticias"
      },
      {
        "key": "C",
        "text": "Omitir incertidumbre"
      },
      {
        "key": "D",
        "text": "Usar el mismo nivel técnico para todas las audiencias"
      }
    ],
    "answer": "A",
    "explanation": "La comunicación debe ser clara, objetiva y apropiada para la audiencia."
  },
  {
    "id": 98,
    "category": "Gestión de pruebas",
    "question": "¿Qué relación existe entre monitoreo y criterios de salida?",
    "options": [
      {
        "key": "A",
        "text": "Las métricas de monitoreo pueden mostrar si se están alcanzando los criterios de salida"
      },
      {
        "key": "B",
        "text": "No tienen relación"
      },
      {
        "key": "C",
        "text": "Los criterios de salida solo se fijan después de terminar"
      },
      {
        "key": "D",
        "text": "El monitoreo reemplaza los criterios"
      }
    ],
    "answer": "A",
    "explanation": "El seguimiento aporta evidencia para decidir si las condiciones de finalización se cumplen."
  },
  {
    "id": 99,
    "category": "Herramientas",
    "question": "¿Cuál es un beneficio potencial de las herramientas de prueba?",
    "options": [
      {
        "key": "A",
        "text": "Aumentar repetibilidad, velocidad y consistencia en tareas adecuadas"
      },
      {
        "key": "B",
        "text": "Eliminar la necesidad de diseño de pruebas"
      },
      {
        "key": "C",
        "text": "Garantizar cero defectos"
      },
      {
        "key": "D",
        "text": "Sustituir toda experiencia humana"
      }
    ],
    "answer": "A",
    "explanation": "Las herramientas pueden automatizar tareas repetitivas y aportar consistencia, pero no reemplazan el juicio humano."
  },
  {
    "id": 100,
    "category": "Herramientas",
    "question": "¿Cuál es un riesgo de la automatización de pruebas?",
    "options": [
      {
        "key": "A",
        "text": "Expectativas irreales y costos de mantenimiento de scripts y datos"
      },
      {
        "key": "B",
        "text": "Que las pruebas se ejecuten de forma repetible"
      },
      {
        "key": "C",
        "text": "Que se obtenga feedback más rápido"
      },
      {
        "key": "D",
        "text": "Que puedan reutilizarse activos"
      }
    ],
    "answer": "A",
    "explanation": "La automatización requiere inversión, mantenimiento, habilidades y selección adecuada de casos."
  }
];
