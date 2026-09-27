window.LIBRO_DATA = {
  "metadata": {
    "titulo": "Libro Blanco de Ingeniería",
    "proyecto": "INSTE-BOT X",
    "subtitulo": "Plataforma autónoma de inspección y mantenimiento de líneas energizadas basada en inteligencia artificial",
    "autor": "Alejandro Ochoa",
    "direccion": "Dirección de Ingeniería Conceptual · Equipo INSTE-BOT",
    "version": "1.0",
    "clasificacion": "Investigación y Desarrollo (I+D)",
    "fecha": "2026",
    "estado": "Concepto de Ingeniería"
  },
  "tomos": [
    {
      "id": "tomo-1",
      "numero": "I",
      "titulo": "Visión y Estrategia",
      "resumen": "Fundamentos del proyecto: problemática mundial, misión, visión 2040, principios de diseño, ecosistema, alcance funcional y riesgos.",
      "icono": "Compass",
      "capitulos": [
        {
          "id": "t1-c1",
          "numero": 1,
          "titulo": "Introducción",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La demanda mundial de energía eléctrica continúa creciendo debido al desarrollo urbano, la electrificación industrial y la transición energética global. Las redes modernas operan cada vez más cerca de sus límites térmicos y mecánicos, mientras su infraestructura envejece."
            },
            {
              "tipo": "subtitulo",
              "texto": "Desafíos de las redes actuales"
            },
            {
              "tipo": "lista",
              "items": [
                "Incremento sostenido de la carga y de la complejidad operativa.",
                "Envejecimiento de activos y pérdida de trazabilidad técnica.",
                "Riesgos elevados para el personal técnico en trabajos energizados.",
                "Necesidad creciente de mantenimiento predictivo en lugar de correctivo."
              ]
            },
            {
              "tipo": "parrafo",
              "texto": "La mayoría de las compañías eléctricas todavía depende de inspecciones visuales manuales, técnicos en altura, helicópteros, vehículos especializados y drones de apoyo. Estas metodologías presentan limitaciones en seguridad, frecuencia de inspección y precisión diagnóstica."
            },
            {
              "tipo": "destacado",
              "titulo": "Nuevo paradigma",
              "texto": "INSTE-BOT X propone la robotización permanente de la red eléctrica: plataformas autónomas que inspeccionan, diagnostican y actúan antes de que la falla ocurra."
            }
          ]
        },
        {
          "id": "t1-c2",
          "numero": 2,
          "titulo": "Problema Global",
          "bloques": [
            {
              "tipo": "subtitulo",
              "texto": "Seguridad humana"
            },
            {
              "tipo": "lista",
              "items": [
                "Descargas eléctricas y arcos eléctricos.",
                "Caídas desde altura y trabajos en suspensión.",
                "Exposición a condiciones climáticas extremas.",
                "Procedimientos complejos con ventanas operativas reducidas."
              ]
            },
            {
              "tipo": "subtitulo",
              "texto": "Costos de operación"
            },
            {
              "tipo": "lista",
              "items": [
                "Transporte y logística de cuadrillas.",
                "Personal especializado y certificado.",
                "Equipos de seguridad y aislamiento.",
                "Vehículos de apoyo y tiempos de desplazamiento."
              ]
            },
            {
              "tipo": "subtitulo",
              "texto": "Fallas no detectadas"
            },
            {
              "tipo": "lista",
              "items": [
                "Corrosión y oxidación de herrajes.",
                "Aflojamiento de conexiones.",
                "Fatiga mecánica de conductores.",
                "Descargas parciales.",
                "Sobrecalentamientos localizados."
              ]
            },
            {
              "tipo": "parrafo",
              "texto": "Cuando los síntomas finalmente aparecen, el daño suele ser mucho más costoso y el riesgo de interrupción, considerablemente mayor."
            }
          ]
        },
        {
          "id": "t1-c3",
          "numero": 3,
          "titulo": "Misión",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Desarrollar una plataforma robótica capaz de operar sobre infraestructura eléctrica energizada para ejecutar actividades de monitoreo, diagnóstico y mantenimiento con mínima intervención humana."
            },
            {
              "tipo": "destacado",
              "titulo": "Declaración de misión",
              "texto": "Automatizar la vigilancia y el cuidado de la red eléctrica para proteger a las personas, aumentar la disponibilidad del servicio y prolongar la vida útil de los activos."
            }
          ]
        },
        {
          "id": "t1-c4",
          "numero": 4,
          "titulo": "Visión 2040",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Para el año 2040 se proyecta un escenario en el que:"
            },
            {
              "tipo": "lista",
              "items": [
                "Miles de robots patrullen líneas eléctricas de forma permanente.",
                "Todas las redes relevantes dispongan de un gemelo digital.",
                "La IA supervise en continuo la condición de los activos.",
                "Las interrupciones disminuyan de forma significativa.",
                "El mantenimiento correctivo sea reemplazado por mantenimiento predictivo."
              ]
            },
            {
              "tipo": "parrafo",
              "texto": "INSTE-BOT X busca convertirse en una pieza fundamental de esa transformación."
            }
          ]
        },
        {
          "id": "t1-c5",
          "numero": 5,
          "titulo": "Principios de Diseño",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Todo el proyecto se fundamenta en siete principios rectores que orientan cada decisión de ingeniería."
            },
            {
              "tipo": "columnas",
              "items": [
                {
                  "titulo": "Seguridad",
                  "texto": "La protección de las personas tiene prioridad absoluta sobre cualquier objetivo operativo."
                },
                {
                  "titulo": "Autonomía",
                  "texto": "Capacidad de operación con mínima supervisión humana."
                },
                {
                  "titulo": "Modularidad",
                  "texto": "Todos los componentes principales pueden reemplazarse individualmente."
                },
                {
                  "titulo": "Escalabilidad",
                  "texto": "La arquitectura debe permitir la expansión funcional futura."
                },
                {
                  "titulo": "Inteligencia",
                  "texto": "Cada nueva inspección mejora el conocimiento global del sistema."
                },
                {
                  "titulo": "Resiliencia",
                  "texto": "Capacidad de continuar operando después de fallas parciales."
                },
                {
                  "titulo": "Interoperabilidad",
                  "texto": "Compatibilidad con SCADA, GIS y sistemas empresariales."
                }
              ]
            }
          ]
        },
        {
          "id": "t1-c6",
          "numero": 6,
          "titulo": "Ecosistema INSTE-BOT",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "INSTE-BOT X no se concibe como un robot individual, sino como un ecosistema de unidades cooperativas gobernadas por una inteligencia central."
            },
            {
              "tipo": "diagrama",
              "titulo": "Ecosistema INSTE-BOT",
              "lineas": [
                "              INSTE-CLOUD",
                "                   ▲",
                "                   │",
                "          INTELIGENCIA GLOBAL",
                "                   ▲",
                "                   │",
                "      ┌────────────┼────────────┐",
                "      │            │            │",
                "   Robot 01     Robot 02     Robot 03",
                "      │            │            │",
                "      └────────────┼────────────┘",
                "                   │",
                "             RED ELÉCTRICA"
              ]
            },
            {
              "tipo": "parrafo",
              "texto": "Cada robot alimenta con datos a la inteligencia global; la inteligencia global mejora los modelos que operan en cada unidad, creando un ciclo de mejora continua."
            }
          ]
        },
        {
          "id": "t1-c7",
          "numero": 7,
          "titulo": "Alcance Funcional",
          "bloques": [
            {
              "tipo": "columnas",
              "items": [
                {
                  "titulo": "Inspeccionar",
                  "texto": "Conductores, herrajes, aisladores, conectores, postes y torres."
                },
                {
                  "titulo": "Detectar",
                  "texto": "Corrosión, fisuras, sobrecalentamientos, descargas parciales y vibraciones anómalas."
                },
                {
                  "titulo": "Actuar",
                  "texto": "Limpiar, ajustar, aplicar recubrimientos e instalar sensores."
                },
                {
                  "titulo": "Reportar",
                  "texto": "Estado, riesgo, historial y recomendaciones de intervención."
                }
              ]
            }
          ]
        },
        {
          "id": "t1-c8",
          "numero": 8,
          "titulo": "Casos de Uso",
          "bloques": [
            {
              "tipo": "columnas",
              "items": [
                {
                  "titulo": "Caso 1 · Patrullaje autónomo",
                  "texto": "El robot recorre una línea de distribución durante la noche y genera fotografías, modelos 3D y mapas térmicos."
                },
                {
                  "titulo": "Caso 2 · Detección de anomalía",
                  "texto": "La cámara térmica identifica un conector caliente y la IA clasifica prioridad ALTA, riesgo de falla inminente y acción de intervención inmediata."
                },
                {
                  "titulo": "Caso 3 · Mantenimiento preventivo",
                  "texto": "El brazo robótico aplica protección anticorrosiva sin necesidad de una cuadrilla de trabajo."
                },
                {
                  "titulo": "Caso 4 · Instalación de sensores IoT",
                  "texto": "Los brazos instalan nodos de monitoreo y la información se envía al centro de control."
                }
              ]
            }
          ]
        },
        {
          "id": "t1-c9",
          "numero": 9,
          "titulo": "Beneficios Esperados",
          "bloques": [
            {
              "tipo": "columnas",
              "items": [
                {
                  "titulo": "Seguridad",
                  "texto": "Reducción drástica de la exposición humana a trabajos en altura y en tensión."
                },
                {
                  "titulo": "Disponibilidad",
                  "texto": "Menos interrupciones gracias a la detección temprana de defectos."
                },
                {
                  "titulo": "Economía",
                  "texto": "Menores costos operativos por inspección y desplazamiento."
                },
                {
                  "titulo": "Trazabilidad",
                  "texto": "Historial completo y auditable de cada activo de la red."
                },
                {
                  "titulo": "Sostenibilidad",
                  "texto": "Optimización de recursos y extensión de la vida útil de los activos."
                }
              ]
            }
          ]
        },
        {
          "id": "t1-c10",
          "numero": 10,
          "titulo": "Arquitectura Conceptual",
          "bloques": [
            {
              "tipo": "diagrama",
              "titulo": "Arquitectura conceptual del sistema",
              "lineas": [
                "┌──────────────────────────────────────┐",
                "│             INSTE-CLOUD              │",
                "└──────────────────────────────────────┘",
                "              ▲          ▼",
                "┌──────────────────────────────────────┐",
                "│       IA COLABORATIVA GLOBAL         │",
                "└──────────────────────────────────────┘",
                "              ▲          ▼",
                "┌──────────────────────────────────────┐",
                "│             INSTE-BOT X              │",
                "│  Cámaras · LiDAR · Radar · IA        │",
                "│  Brazos robóticos · Comunicaciones   │",
                "└──────────────────────────────────────┘",
                "              ▲",
                "┌──────────────────────────────────────┐",
                "│          RED ELÉCTRICA REAL          │",
                "└──────────────────────────────────────┘"
              ]
            }
          ]
        },
        {
          "id": "t1-c11",
          "numero": 11,
          "titulo": "Riesgos del Proyecto",
          "bloques": [
            {
              "tipo": "subtitulo",
              "texto": "Riesgos técnicos"
            },
            {
              "tipo": "lista",
              "items": [
                "Interferencias electromagnéticas sobre la electrónica embarcada.",
                "Condiciones climáticas adversas (viento, lluvia, hielo).",
                "Limitaciones energéticas y de autonomía."
              ]
            },
            {
              "tipo": "subtitulo",
              "texto": "Riesgos económicos"
            },
            {
              "tipo": "lista",
              "items": [
                "Costos de desarrollo e industrialización.",
                "Procesos de certificación y homologación.",
                "Escalamiento de la producción."
              ]
            },
            {
              "tipo": "subtitulo",
              "texto": "Riesgos operacionales"
            },
            {
              "tipo": "lista",
              "items": [
                "Aceptación por parte de los operadores de red.",
                "Integración con procesos y normativas existentes."
              ]
            }
          ]
        },
        {
          "id": "t1-c12",
          "numero": 12,
          "titulo": "Roadmap Inicial",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Fase",
                "Duración",
                "Objetivo"
              ],
              "filas": [
                [
                  "Fase A",
                  "12 meses",
                  "Investigación y estado del arte"
                ],
                [
                  "Fase B",
                  "12 meses",
                  "Prototipo Alfa de laboratorio"
                ],
                [
                  "Fase C",
                  "12 meses",
                  "Prototipo Beta en campo"
                ],
                [
                  "Fase D",
                  "12 meses",
                  "Piloto industrial"
                ],
                [
                  "Fase E",
                  "12 meses",
                  "Despliegue comercial"
                ]
              ]
            },
            {
              "tipo": "destacado",
              "titulo": "Conclusión del Tomo I",
              "texto": "INSTE-BOT X representa una propuesta para transformar la gestión de infraestructura eléctrica mediante la convergencia de robótica avanzada, inteligencia artificial, computación en el borde y gemelos digitales."
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-2",
      "numero": "II",
      "titulo": "Estado del Arte Mundial",
      "resumen": "Análisis de los sistemas de inspección robótica de líneas eléctricas en el mundo, benchmark comparativo y matriz de oportunidad (GAP).",
      "icono": "Globe2",
      "capitulos": [
        {
          "id": "t2-c1",
          "numero": 1,
          "titulo": "Panorama Mundial",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La robótica aplicada a la inspección de líneas eléctricas ha evolucionado desde los años ochenta, impulsada por centros de investigación de servicios públicos, fabricantes de equipos eléctricos y programas estatales de infraestructura."
            },
            {
              "tipo": "parrafo",
              "texto": "El campo se organiza en dos grandes familias: robots que se desplazan sobre el conductor (líneas de transmisión y distribución aéreas) y plataformas que operan a distancia (drones, vehículos y robots trepadores de poste)."
            },
            {
              "tipo": "destacado",
              "titulo": "Nota metodológica",
              "texto": "Este tomo presenta un análisis cualitativo del estado del arte. Las cifras específicas de desempeño de cada sistema deben validarse contra las fuentes primarias listadas en el capítulo 6 antes de cualquier uso contractual o de inversión."
            }
          ]
        },
        {
          "id": "t2-c2",
          "numero": 2,
          "titulo": "Líneas de Transmisión · Referentes Internacionales",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Los principales desarrollos documentados en el ámbito de la transmisión provienen de los siguientes organismos y empresas:"
            },
            {
              "tipo": "lista",
              "items": [
                "EPRI (Electric Power Research Institute, EE. UU.): programas de robótica de inspección y mantenimiento de líneas de transmisión.",
                "IREQ / Hydro-Québec (Canadá): líneas de investigación en teleoperación de líneas energizadas.",
                "State Grid Corporation of China: desarrollo de robots de inspección sobre conductor a gran escala.",
                "Hitachi Energy: sistemas de monitoreo y automatización de activos de red.",
                "TEPCO (Tokyo Electric Power Company, Japón): robótica de inspección de infraestructura crítica.",
                "Mitsubishi Electric: plataformas de inspección y diagnóstico de líneas.",
                "Consorcios europeos (p. ej. programas de redes inteligentes y transmisión): robots de inspección y mantenimiento."
              ]
            }
          ]
        },
        {
          "id": "t2-c3",
          "numero": 3,
          "titulo": "Líneas de Distribución",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "En distribución, el estado del arte se concentra en robots ligeros que circulan sobre conductores desnudos o aislados, y en plataformas de poste."
            },
            {
              "tipo": "lista",
              "items": [
                "Robots monocuerpo de desplazamiento por conductor.",
                "Robots trepadores de poste para inspección vertical.",
                "Drones de inspección con cámaras térmicas y visible.",
                "Vehículos terrestres con brazo para maniobras puntuales."
              ]
            }
          ]
        },
        {
          "id": "t2-c4",
          "numero": 4,
          "titulo": "Benchmark Comparativo",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Referente",
                "Ámbito",
                "Desplazamiento",
                "Manipulación",
                "IA embarcada",
                "Autonomía"
              ],
              "filas": [
                [
                  "EPRI (EE. UU.)",
                  "Transmisión",
                  "Sobre conductor",
                  "Limitada",
                  "Parcial",
                  "Teleoperada"
                ],
                [
                  "IREQ / Hydro-Québec",
                  "Transmisión",
                  "Sobre conductor",
                  "Sí (teleop.)",
                  "Parcial",
                  "Teleoperada"
                ],
                [
                  "State Grid (China)",
                  "Transmisión",
                  "Sobre conductor",
                  "Sí",
                  "Parcial",
                  "Semiautónoma"
                ],
                [
                  "Hitachi Energy",
                  "Activos de red",
                  "Fijo / sensórica",
                  "No",
                  "Sí (analítica)",
                  "N/A"
                ],
                [
                  "TEPCO (Japón)",
                  "Transmisión",
                  "Sobre conductor",
                  "Limitada",
                  "Parcial",
                  "Teleoperada"
                ],
                [
                  "Mitsubishi Electric",
                  "Transmisión",
                  "Sobre conductor",
                  "Limitada",
                  "Parcial",
                  "Semiautónoma"
                ],
                [
                  "INSTE-BOT X",
                  "Transmisión y distribución",
                  "Híbrida adaptable",
                  "Doble brazo",
                  "NVIDIA Jetson",
                  "Autónoma cooperativa"
                ]
              ]
            },
            {
              "tipo": "parrafo",
              "texto": "El benchmark evidencia que la mayoría de los sistemas actuales priorizan la inspección sobre la actuación, y que la autonomía plena y la coordinación de flota permanecen como campos poco explorados."
            }
          ]
        },
        {
          "id": "t2-c5",
          "numero": 5,
          "titulo": "Matriz GAP · Oportunidad INSTE-BOT X",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Capacidad",
                "Estado del arte",
                "INSTE-BOT X"
              ],
              "filas": [
                [
                  "Inspección visual",
                  "Madura",
                  "Integrada 8K"
                ],
                [
                  "Inspección térmica",
                  "Frecuente",
                  "Radiométrica embarcada"
                ],
                [
                  "Detección de corona / UV",
                  "Escasa",
                  "Cámara UV dedicada"
                ],
                [
                  "Manipulación sobre línea",
                  "Limitada",
                  "Doble brazo 7 GDL"
                ],
                [
                  "Cambio automático de herramienta",
                  "Inexistente en campo",
                  "Tool changer industrial"
                ],
                [
                  "Diagnóstico con IA en el borde",
                  "Parcial",
                  "Edge AI (Jetson)"
                ],
                [
                  "Mantenimiento predictivo",
                  "Parcial",
                  "Modelo integrado"
                ],
                [
                  "Gemelo digital de la red",
                  "Poco integrado",
                  "Núcleo del sistema"
                ],
                [
                  "Coordinación de flota",
                  "Inexistente",
                  "Arquitectura cooperativa"
                ],
                [
                  "Captación energética del entorno",
                  "Experimental",
                  "Línea de investigación"
                ]
              ]
            }
          ]
        },
        {
          "id": "t2-c6",
          "numero": 6,
          "titulo": "Fuentes y Verificación",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Para convertir este análisis en un documento citable se recomienda consultar y referenciar las siguientes fuentes primarias:"
            },
            {
              "tipo": "lista",
              "items": [
                "Publicaciones técnicas e informes anuales de EPRI.",
                "Documentación técnica del Institut de recherche d’Hydro-Québec (IREQ).",
                "Literatura técnica de State Grid Corporation of China.",
                "Informes de Hitachi Energy sobre digitalización de activos de red.",
                "Documentación técnica de TEPCO y Mitsubishi Electric.",
                "Normas IEC 61936, IEC 60815 e IEEE 1793 (trabajos en líneas energizadas).",
                "Artículos indexados en IEEE Xplore sobre robótica de inspección de líneas."
              ]
            },
            {
              "tipo": "destacado",
              "titulo": "Trazabilidad",
              "texto": "Toda afirmación cuantitativa de este tomo debe acompañarse de su referencia bibliográfica completa antes de la publicación de la versión 1.1 del libro blanco."
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-3",
      "numero": "III",
      "titulo": "Arquitectura del Sistema",
      "resumen": "Arquitectura funcional, mecánica, electrónica, de comunicaciones, de software, de inteligencia artificial y cloud.",
      "icono": "Network",
      "capitulos": [
        {
          "id": "t3-c1",
          "numero": 1,
          "titulo": "Arquitectura Funcional",
          "bloques": [
            {
              "tipo": "diagrama",
              "titulo": "Cadena funcional del robot",
              "lineas": [
                "PERCEPCIÓN → FUSIÓN → COGNICIÓN → PLANIFICACIÓN → ACCIÓN",
                "     │           │          │             │           │",
                "  Sensores    Estado      IA / ML      Trayectoria   Brazos",
                "  Cámaras     del mundo   Predicción   Seguridad     Locomoción",
                "  LiDAR                                 Energía"
              ]
            },
            {
              "tipo": "parrafo",
              "texto": "La arquitectura funcional organiza el sistema en cinco etapas encadenadas: percepción sensorial, fusión del estado del mundo, cognición mediante IA, planificación de trayectorias y ejecución física."
            }
          ]
        },
        {
          "id": "t3-c2",
          "numero": 2,
          "titulo": "Arquitectura Mecánica",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La arquitectura mecánica se organiza en subsistemas intercambiables sobre un chasis central."
            },
            {
              "tipo": "especificaciones",
              "items": [
                {
                  "label": "Subsistemas",
                  "valor": "Chasis, tren de rodadura, brazos, mástil sensorial, baterías"
                },
                {
                  "label": "Tipo de unión",
                  "valor": "Modular con conectores mecánicos y eléctricos rápidos"
                },
                {
                  "label": "Grado de protección",
                  "valor": "IP66 (objetivo)"
                },
                {
                  "label": "Rango de temperatura",
                  "valor": "-10 °C a +55 °C"
                }
              ]
            }
          ]
        },
        {
          "id": "t3-c3",
          "numero": 3,
          "titulo": "Arquitectura Electrónica",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Computadora embarcada principal para IA (NVIDIA Jetson).",
                "Controlador de movimiento en tiempo real para tren de rodadura y brazos.",
                "Tarjeta de adquisición sensorial y sincronización temporal.",
                "Gestión de batería (BMS) y distribución de potencia.",
                "Módulos de comunicación redundantes (5G / LoRa / satelital).",
                "Aislamiento galvánico y protección contra sobretensiones."
              ]
            }
          ]
        },
        {
          "id": "t3-c4",
          "numero": 4,
          "titulo": "Arquitectura de Comunicaciones",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Medio",
                "Uso principal",
                "Alcance",
                "Ancho de banda"
              ],
              "filas": [
                [
                  "5G / LTE",
                  "Telemetría y video en vivo",
                  "Regional",
                  "Alto"
                ],
                [
                  "Wi-Fi Mesh",
                  "Operación local y patio",
                  "Corto",
                  "Alto"
                ],
                [
                  "LoRa",
                  "Telemetría de baja tasa",
                  "Largo",
                  "Muy bajo"
                ],
                [
                  "Satelital",
                  "Zonas remotas",
                  "Global",
                  "Medio"
                ],
                [
                  "Enlace redundante",
                  "Respaldo ante pérdida",
                  "—",
                  "—"
                ]
              ]
            }
          ]
        },
        {
          "id": "t3-c5",
          "numero": 5,
          "titulo": "Arquitectura de Software",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Sistema operativo embarcado en tiempo real (RTOS / Linux).",
                "Middleware de mensajería para comunicación entre procesos.",
                "Servicios de percepción, planificación y control.",
                "Cliente de sincronización con INSTE-CLOUD.",
                "Gestión de actualizaciones OTA y versionado de modelos."
              ]
            }
          ]
        },
        {
          "id": "t3-c6",
          "numero": 6,
          "titulo": "Arquitectura de Inteligencia Artificial",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La inteligencia artificial se distribuye en dos capas: inferencia en el borde, para decisiones en tiempo real, y aprendizaje en la nube, para el reentrenamiento continuo de modelos."
            },
            {
              "tipo": "lista",
              "items": [
                "Modelos de visión para detección de defectos.",
                "Modelos térmicos para clasificación de puntos calientes.",
                "Modelos predictivos de vida útil y riesgo.",
                "Modelos de navegación y evitación de obstáculos."
              ]
            }
          ]
        },
        {
          "id": "t3-c7",
          "numero": 7,
          "titulo": "Arquitectura Cloud",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "INSTE-CLOUD centraliza la operación, el almacenamiento histórico y la analítica. Se apoya en servicios de bases de datos relacionales, almacenamiento de objetos y colas de mensajería."
            },
            {
              "tipo": "lista",
              "items": [
                "API REST para integración con sistemas externos.",
                "Almacenamiento de series temporales de telemetría.",
                "Servicio de gemelo digital y simulación.",
                "Autenticación y control de acceso basados en roles."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-4",
      "numero": "IV",
      "titulo": "Diseño Mecánico Avanzado",
      "resumen": "Chasis, materiales, tren de rodadura, cruce automático de obstáculos, protección ambiental y cálculos estructurales.",
      "icono": "Cog",
      "capitulos": [
        {
          "id": "t4-c1",
          "numero": 1,
          "titulo": "Chasis Principal",
          "bloques": [
            {
              "tipo": "especificaciones",
              "items": [
                {
                  "label": "Peso objetivo",
                  "valor": "Menor a 150 kg"
                },
                {
                  "label": "Configuración",
                  "valor": "Monocuerpo modular con dos módulos laterales"
                },
                {
                  "label": "Rigidez",
                  "valor": "Estructura de fibra de carbono con refuerzos metálicos"
                },
                {
                  "label": "Centro de gravedad",
                  "valor": "Bajo, centrado sobre el conductor"
                }
              ]
            }
          ]
        },
        {
          "id": "t4-c2",
          "numero": 2,
          "titulo": "Materiales",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Material",
                "Aplicación",
                "Ventaja"
              ],
              "filas": [
                [
                  "Titanio Grado 5 (Ti-6Al-4V)",
                  "Elementos de alta carga y ejes",
                  "Alta resistencia / peso"
                ],
                [
                  "Aluminio aeronáutico 7075",
                  "Estructura secundaria y carcasas",
                  "Ligereza y maquinabilidad"
                ],
                [
                  "Fibra de carbono",
                  "Paneles estructurales",
                  "Rigidez y bajo peso"
                ],
                [
                  "Polímeros de ingeniería",
                  "Aisladores y cubiertas",
                  "Aislamiento eléctrico"
                ]
              ]
            }
          ]
        },
        {
          "id": "t4-c3",
          "numero": 3,
          "titulo": "Sistema de Locomoción",
          "bloques": [
            {
              "tipo": "diagrama",
              "titulo": "Configuración de rodadura adaptable",
              "lineas": [
                "   [Rueda]══════════════════[Rueda]",
                "        │      conductor      │",
                "        │                     │",
                "   [Rueda]══════════════════[Rueda]"
              ]
            },
            {
              "tipo": "especificaciones",
              "items": [
                {
                  "label": "Configuración",
                  "valor": "Cuatro puntos de contacto adaptables"
                },
                {
                  "label": "Accionamiento",
                  "valor": "Motores independientes por rueda"
                },
                {
                  "label": "Control",
                  "valor": "Tracción y frenado electrónico"
                },
                {
                  "label": "Adaptabilidad",
                  "valor": "Suspensión activa para cambios de diámetro"
                }
              ]
            }
          ]
        },
        {
          "id": "t4-c4",
          "numero": 4,
          "titulo": "Cruce Automático de Obstáculos",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "El robot debe superar de forma autónoma los obstáculos típicos de una línea aérea:"
            },
            {
              "tipo": "lista",
              "items": [
                "Grapas de suspensión.",
                "Empalmes y manguitos.",
                "Separadores y amortiguadores.",
                "Aisladores de suspensión.",
                "Puntos de anclaje y derivaciones."
              ]
            }
          ]
        },
        {
          "id": "t4-c5",
          "numero": 5,
          "titulo": "Estabilización y Centro de Gravedad",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La estabilidad es crítica bajo viento lateral y en maniobras con los brazos desplegados. El diseño prioriza un centro de gravedad bajo y un sistema de contrapesos dinámico que compensa el momento generado por los brazos."
            }
          ]
        },
        {
          "id": "t4-c6",
          "numero": 6,
          "titulo": "Protección Ambiental y Electromagnética",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Sellado IP66 contra polvo y agua.",
                "Apantallamiento contra campos eléctricos y magnéticos.",
                "Aislamiento galvánico de la electrónica sensible.",
                "Protección contra sobretensiones y descargas atmosféricas."
              ]
            }
          ]
        },
        {
          "id": "t4-c7",
          "numero": 7,
          "titulo": "Cálculos Estructurales",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "El dimensionamiento estructural se valida mediante análisis por elementos finitos (FEA) considerando las cargas combinadas de peso propio, viento, vibración y esfuerzo de los brazos."
            },
            {
              "tipo": "lista",
              "items": [
                "Análisis de cargas estáticas y dinámicas.",
                "Cálculo del centro de gravedad y momentos.",
                "Análisis modal de vibraciones.",
                "Coeficientes de seguridad estructural."
              ]
            },
            {
              "tipo": "destacado",
              "titulo": "Criterio de diseño",
              "texto": "Todos los elementos estructurales críticos deben cumplir un coeficiente de seguridad mínimo antes de la fabricación del prototipo Beta."
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-5",
      "numero": "V",
      "titulo": "Sistema Sensorial",
      "resumen": "Cámaras visible, térmica y UV, LiDAR, radar, ultrasonido, posicionamiento GNSS RTK, IMU y sensores ambientales.",
      "icono": "Camera",
      "capitulos": [
        {
          "id": "t5-c1",
          "numero": 1,
          "titulo": "Arquitectura Sensorial",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Sensor",
                "Función",
                "Tecnología"
              ],
              "filas": [
                [
                  "Cámara visible",
                  "Inspección detallada",
                  "8K con zoom 40X"
                ],
                [
                  "Cámara térmica",
                  "Detección de puntos calientes",
                  "Radiométrica ±2 °C"
                ],
                [
                  "Cámara UV",
                  "Corona y descargas parciales",
                  "Ultravioleta solar-blind"
                ],
                [
                  "LiDAR",
                  "Mapeo 3D y navegación",
                  "Tiempo de vuelo"
                ],
                [
                  "Radar",
                  "Operación en lluvia y niebla",
                  "Ondas milimétricas"
                ],
                [
                  "Ultrasonido",
                  "Detección de fallas internas",
                  "Ultrasonido industrial"
                ],
                [
                  "Espectrómetro",
                  "Evaluación de corrosión",
                  "Reflectancia superficial"
                ]
              ]
            }
          ]
        },
        {
          "id": "t5-c2",
          "numero": 2,
          "titulo": "Visión Visible",
          "bloques": [
            {
              "tipo": "especificaciones",
              "items": [
                {
                  "label": "Resolución",
                  "valor": "8K"
                },
                {
                  "label": "Zoom óptico",
                  "valor": "40X"
                },
                {
                  "label": "Estabilización",
                  "valor": "Gimbal de 3 ejes"
                },
                {
                  "label": "Iluminación",
                  "valor": "LED auxiliar para operación nocturna"
                }
              ]
            }
          ]
        },
        {
          "id": "t5-c3",
          "numero": 3,
          "titulo": "Visión Térmica Radiométrica",
          "bloques": [
            {
              "tipo": "especificaciones",
              "items": [
                {
                  "label": "Tipo",
                  "valor": "Radiométrica"
                },
                {
                  "label": "Precisión",
                  "valor": "±2 °C"
                },
                {
                  "label": "Aplicación",
                  "valor": "Conexiones calientes y sobrecargas"
                },
                {
                  "label": "Salida",
                  "valor": "Mapa térmico georreferenciado"
                }
              ]
            }
          ]
        },
        {
          "id": "t5-c4",
          "numero": 4,
          "titulo": "Visión Ultravioleta (Corona y Descargas Parciales)",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La cámara UV detecta la radiación ultravioleta emitida por efecto corona y descargas parciales, fenómenos que anticipan fallas de aislamiento y pérdidas energéticas."
            },
            {
              "tipo": "especificaciones",
              "items": [
                {
                  "label": "Detección",
                  "valor": "Corona y descargas parciales"
                },
                {
                  "label": "Tecnología",
                  "valor": "UV solar-blind"
                },
                {
                  "label": "Uso",
                  "valor": "Diagnóstico de aislamiento"
                }
              ]
            }
          ]
        },
        {
          "id": "t5-c5",
          "numero": 5,
          "titulo": "LiDAR 3D",
          "bloques": [
            {
              "tipo": "especificaciones",
              "items": [
                {
                  "label": "Función",
                  "valor": "Mapeo 3D del entorno y de la línea"
                },
                {
                  "label": "Uso",
                  "valor": "Navegación, SLAM y detección de obstáculos"
                },
                {
                  "label": "Salida",
                  "valor": "Nube de puntos georreferenciada"
                }
              ]
            }
          ]
        },
        {
          "id": "t5-c6",
          "numero": 6,
          "titulo": "Radar y Ultrasonido",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "El radar permite operar con visibilidad reducida por lluvia o niebla, mientras el ultrasonido aporta detección de defectos internos no visibles."
            },
            {
              "tipo": "lista",
              "items": [
                "Radar de ondas milimétricas para distancia y detección.",
                "Ultrasonido para inspección interna de herrajes y conectores.",
                "Fusión de datos con LiDAR y visión para robustez."
              ]
            }
          ]
        },
        {
          "id": "t5-c7",
          "numero": 7,
          "titulo": "Posicionamiento GNSS RTK e IMU",
          "bloques": [
            {
              "tipo": "especificaciones",
              "items": [
                {
                  "label": "GNSS",
                  "valor": "RTK centimétrico"
                },
                {
                  "label": "IMU",
                  "valor": "6 ejes de alta precisión"
                },
                {
                  "label": "Fusión",
                  "valor": "Con LiDAR y odometría"
                },
                {
                  "label": "Uso",
                  "valor": "Georreferenciación de hallazgos"
                }
              ]
            }
          ]
        },
        {
          "id": "t5-c8",
          "numero": 8,
          "titulo": "Sensores Ambientales y de Campo",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Sensor",
                "Variable medida",
                "Uso"
              ],
              "filas": [
                [
                  "Humedad",
                  "Humedad relativa",
                  "Correlación con corrosión"
                ],
                [
                  "Viento",
                  "Velocidad y dirección",
                  "Seguridad de operación"
                ],
                [
                  "Vibración",
                  "Aceleración",
                  "Detección de fatiga mecánica"
                ],
                [
                  "Campo eléctrico",
                  "Intensidad de campo",
                  "Seguridad y proximidad"
                ],
                [
                  "Campo magnético",
                  "Densidad de flujo",
                  "Diagnóstico y captación energética"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-6",
      "numero": "VI",
      "titulo": "Brazos Robóticos",
      "resumen": "Cinemática, grados de libertad, control de movimiento, herramientas intercambiables y gemelo virtual del brazo.",
      "icono": "Bot",
      "capitulos": [
        {
          "id": "t6-c1",
          "numero": 1,
          "titulo": "Cinemática y Grados de Libertad",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Cada brazo se diseña con siete grados de libertad, configuración redundante que permite alcanzar poses complejas alrededor del conductor evitando singularidades cinemáticas."
            },
            {
              "tipo": "especificaciones",
              "items": [
                {
                  "label": "Grados de libertad",
                  "valor": "7 por brazo"
                },
                {
                  "label": "Alcance",
                  "valor": "2.5 m"
                },
                {
                  "label": "Fuerza de trabajo",
                  "valor": "50 kg por brazo"
                },
                {
                  "label": "Repetibilidad",
                  "valor": "Alta precisión para tareas de torque"
                }
              ]
            }
          ]
        },
        {
          "id": "t6-c2",
          "numero": 2,
          "titulo": "Especificación de los Brazos",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Parámetro",
                "Valor objetivo"
              ],
              "filas": [
                [
                  "Número de brazos",
                  "2"
                ],
                [
                  "Grados de libertad",
                  "7 por brazo"
                ],
                [
                  "Alcance",
                  "2.5 m"
                ],
                [
                  "Carga útil",
                  "50 kg"
                ],
                [
                  "Actuadores",
                  "Servomotores con control de par"
                ],
                [
                  "Seguridad",
                  "Limitación de fuerza y parada ante colisión"
                ]
              ]
            }
          ]
        },
        {
          "id": "t6-c3",
          "numero": 3,
          "titulo": "Control de Movimiento",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Control cinemático directo e inverso.",
                "Control de impedancia para contacto seguro con la línea.",
                "Planificación de trayectorias con evitación de colisiones.",
                "Sincronización cooperativa entre ambos brazos."
              ]
            }
          ]
        },
        {
          "id": "t6-c4",
          "numero": 4,
          "titulo": "Herramientas Intercambiables",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Herramienta",
                "Función"
              ],
              "filas": [
                [
                  "Llave de torque",
                  "Ajuste controlado de conexiones"
                ],
                [
                  "Cepillo",
                  "Limpieza de superficies y herrajes"
                ],
                [
                  "Pulverizador",
                  "Aplicación de recubrimiento anticorrosivo"
                ],
                [
                  "Cámara secundaria",
                  "Inspección de proximidad"
                ],
                [
                  "Pinza servoaccionada",
                  "Sujeción e instalación de componentes"
                ],
                [
                  "Nodo sensor IoT",
                  "Instalación de sensores de monitoreo"
                ]
              ]
            }
          ]
        },
        {
          "id": "t6-c5",
          "numero": 5,
          "titulo": "Sistema de Cambio Automático",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Un sistema de acople tipo tool changer industrial permite intercambiar herramientas en campo sin intervención humana, con acoplamiento mecánico, eléctrico y de datos en una sola operación."
            }
          ]
        },
        {
          "id": "t6-c6",
          "numero": 6,
          "titulo": "Gemelo Virtual del Brazo",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Cada brazo dispone de un gemelo virtual que replica su cinemática y dinámica. Se utiliza para planificar maniobras, validar trayectorias antes de ejecutarlas y detectar desviaciones respecto al comportamiento real."
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-7",
      "numero": "VII",
      "titulo": "Inteligencia Artificial",
      "resumen": "Visión artificial, detección térmica y de defectos, IA predictiva, edge AI con NVIDIA Jetson y aprendizaje continuo.",
      "icono": "Brain",
      "capitulos": [
        {
          "id": "t7-c1",
          "numero": 1,
          "titulo": "Arquitectura de IA",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La inteligencia artificial de INSTE-BOT X se estructura en dos capas complementarias: inferencia en el borde, para decisiones en tiempo real a bordo del robot, y aprendizaje en la nube, para el reentrenamiento continuo con datos de toda la flota."
            }
          ]
        },
        {
          "id": "t7-c2",
          "numero": 2,
          "titulo": "Hardware Embarcado",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La plataforma de cómputo de borde se basa en NVIDIA Jetson AGX Thor o la plataforma equivalente de última generación disponible al momento del desarrollo."
            },
            {
              "tipo": "tabla",
              "encabezados": [
                "Componente",
                "Función"
              ],
              "filas": [
                [
                  "Módulo Jetson",
                  "Inferencia de modelos de visión y navegación"
                ],
                [
                  "Acelerador GPU",
                  "Procesamiento paralelo en tiempo real"
                ],
                [
                  "Almacenamiento local",
                  "Buffer de datos para sincronización diferida"
                ],
                [
                  "Controlador RT",
                  "Tiempo real para control de movimiento"
                ]
              ]
            }
          ]
        },
        {
          "id": "t7-c3",
          "numero": 3,
          "titulo": "Visión Artificial",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Los modelos de visión detectan defectos estructurales y superficiales sobre la línea."
            },
            {
              "tipo": "lista",
              "items": [
                "Corrosión y oxidación.",
                "Grietas y fisuras.",
                "Aisladores dañados.",
                "Deformaciones y desgaste de herrajes.",
                "Presencia de objetos extraños."
              ]
            }
          ]
        },
        {
          "id": "t7-c4",
          "numero": 4,
          "titulo": "IA Térmica",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Detección de conexiones calientes.",
                "Identificación de sobrecargas.",
                "Clasificación de severidad térmica.",
                "Correlación con condiciones de carga."
              ]
            }
          ]
        },
        {
          "id": "t7-c5",
          "numero": 5,
          "titulo": "IA Predictiva",
          "bloques": [
            {
              "tipo": "destacado",
              "titulo": "Salida del modelo predictivo",
              "texto": "Probabilidad de falla · Tiempo esperado hasta la falla · Nivel de riesgo"
            },
            {
              "tipo": "parrafo",
              "texto": "El modelo predictivo combina el historial del activo, las mediciones térmicas y eléctricas y las condiciones ambientales para estimar el riesgo de falla y priorizar las intervenciones."
            }
          ]
        },
        {
          "id": "t7-c6",
          "numero": 6,
          "titulo": "Aprendizaje Continuo",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Recolección y etiquetado de datos en campo.",
                "Reentrenamiento periódico de modelos en la nube.",
                "Validación y despliegue OTA de nuevas versiones.",
                "Monitoreo de deriva y degradación del modelo."
              ]
            }
          ]
        },
        {
          "id": "t7-c7",
          "numero": 7,
          "titulo": "Asistente Técnico Especializado",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Un modelo de lenguaje especializado en normativa eléctrica y procedimientos de mantenimiento asiste al operador en la interpretación de hallazgos, la redacción de informes y la consulta de protocolos."
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-8",
      "numero": "VIII",
      "titulo": "Navegación Autónoma",
      "resumen": "Modos de operación, posicionamiento, SLAM, planeación de trayectorias, evitación de obstáculos y gestión de flota.",
      "icono": "Navigation",
      "capitulos": [
        {
          "id": "t8-c1",
          "numero": 1,
          "titulo": "Modos de Operación",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Modo",
                "Descripción"
              ],
              "filas": [
                [
                  "Manual",
                  "Control directo por el operador"
                ],
                [
                  "Semiautónomo",
                  "El robot asiste y el operador supervisa"
                ],
                [
                  "Autónomo",
                  "Ejecución completa sin intervención"
                ],
                [
                  "Cooperativo",
                  "Múltiples robots trabajando de forma coordinada"
                ]
              ]
            }
          ]
        },
        {
          "id": "t8-c2",
          "numero": 2,
          "titulo": "Posicionamiento y SLAM",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "GNSS RTK para posición absoluta centimétrica.",
                "LiDAR para mapeo y localización simultánea (SLAM).",
                "IMU para estimación de orientación.",
                "Odometría de ruedas y fusión multisensor."
              ]
            }
          ]
        },
        {
          "id": "t8-c3",
          "numero": 3,
          "titulo": "Planeación de Trayectorias",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "El planificador calcula rutas sobre la topología de la red, considerando obstáculos, puntos de inspección y restricciones energéticas. Las trayectorias se validan en el gemelo digital antes de ejecutarse."
            }
          ]
        },
        {
          "id": "t8-c4",
          "numero": 4,
          "titulo": "Evitación de Obstáculos",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Detección en tiempo real con LiDAR y radar.",
                "Replanificación dinámica de ruta.",
                "Cruce autónomo de grapas, empalmes y separadores.",
                "Parada segura ante situaciones no resueltas."
              ]
            }
          ]
        },
        {
          "id": "t8-c5",
          "numero": 5,
          "titulo": "Gestión de Flota",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La gestión de flota coordina varias unidades sobre un mismo tramo, reparte tareas, evita colisiones y consolida los hallazgos en una vista única del estado de la red."
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-9",
      "numero": "IX",
      "titulo": "Sistema Energético",
      "resumen": "Baterías, gestión energética, recuperación de energía, captación del campo electromagnético y autonomía objetivo.",
      "icono": "BatteryCharging",
      "capitulos": [
        {
          "id": "t9-c1",
          "numero": 1,
          "titulo": "Baterías",
          "bloques": [
            {
              "tipo": "especificaciones",
              "items": [
                {
                  "label": "Química",
                  "valor": "LiFePO4 industrial"
                },
                {
                  "label": "Ventajas",
                  "valor": "Alta seguridad, larga vida útil, estabilidad térmica"
                },
                {
                  "label": "Configuración",
                  "valor": "Módulos intercambiables en caliente"
                },
                {
                  "label": "Carga",
                  "valor": "Estación en torre o poste / intercambio rápido"
                }
              ]
            }
          ]
        },
        {
          "id": "t9-c2",
          "numero": 2,
          "titulo": "Gestión Energética",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "BMS con monitoreo de celdas y balanceo.",
                "Estimación de estado de carga y de salud.",
                "Gestión térmica activa.",
                "Modos de ahorro energético por misión."
              ]
            }
          ]
        },
        {
          "id": "t9-c3",
          "numero": 3,
          "titulo": "Recuperación Energética",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Durante los descensos y el frenado sobre tramos inclinados, el sistema recupera energía mediante frenado regenerativo, extendiendo la autonomía de la misión."
            }
          ]
        },
        {
          "id": "t9-c4",
          "numero": 4,
          "titulo": "Captación desde el Campo Electromagnético",
          "bloques": [
            {
              "tipo": "destacado",
              "titulo": "Línea de investigación experimental",
              "texto": "Se estudia la captación de energía del campo electromagnético circundante al conductor energizado. Esta capacidad es experimental y no forma parte del rendimiento garantizado del sistema."
            },
            {
              "tipo": "parrafo",
              "texto": "El objetivo a largo plazo es la operación continua superior a 24 horas sin recarga, combinando la captación ambiental con la recuperación energética y una gestión eficiente del consumo."
            }
          ]
        },
        {
          "id": "t9-c5",
          "numero": 5,
          "titulo": "Autonomía Objetivo",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Escenario",
                "Autonomía objetivo"
              ],
              "filas": [
                [
                  "Inspección básica",
                  "8 horas"
                ],
                [
                  "Inspección con IA completa",
                  "6 horas"
                ],
                [
                  "Con recuperación energética",
                  "12 horas"
                ],
                [
                  "Captación electromagnética (meta)",
                  "Superior a 24 horas"
                ]
              ]
            },
            {
              "tipo": "parrafo",
              "texto": "Los valores son objetivos de diseño sujetos a validación experimental durante las fases de prototipo."
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-10",
      "numero": "X",
      "titulo": "INSTE-CLOUD",
      "resumen": "Plataforma central, dashboards ejecutivo y técnico, GIS, gestión de activos, reportes, analítica predictiva e integración ERP.",
      "icono": "Cloud",
      "capitulos": [
        {
          "id": "t10-c1",
          "numero": 1,
          "titulo": "Plataforma Central",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "INSTE-CLOUD es el cerebro del ecosistema. Centraliza la telemetría de la flota, el historial de los activos, los modelos de IA y la operación de la red desde una única plataforma."
            }
          ]
        },
        {
          "id": "t10-c2",
          "numero": 2,
          "titulo": "Dashboards",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Dashboard ejecutivo: indicadores de disponibilidad, riesgo y costo.",
                "Dashboard técnico: estado de la flota y de las misiones.",
                "Dashboard de activos: historial y vida útil por componente.",
                "Dashboard de analítica: tendencias y alertas predictivas."
              ]
            }
          ]
        },
        {
          "id": "t10-c3",
          "numero": 3,
          "titulo": "GIS y Gestión de Activos",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La capa GIS georreferencia cada hallazgo sobre el mapa de la red, permitiendo navegar desde la vista general hasta el componente específico con todo su historial."
            }
          ]
        },
        {
          "id": "t10-c4",
          "numero": 4,
          "titulo": "Reportes y Analítica",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Reportes automáticos por misión y por tramo.",
                "Analítica predictiva de fallas.",
                "Trazabilidad completa y auditable.",
                "Exportación a formatos empresariales."
              ]
            }
          ]
        },
        {
          "id": "t10-c5",
          "numero": 5,
          "titulo": "API e Integración Empresarial",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "API REST documentada para integraciones.",
                "Conectores con sistemas ERP y de mantenimiento (EAM).",
                "Integración con SCADA para datos operativos.",
                "Autenticación y control de acceso por roles."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-11",
      "numero": "XI",
      "titulo": "Gemelo Digital",
      "resumen": "Modelo digital de la red y del robot, historial de activos, mantenimiento predictivo, simulación y capacitación virtual.",
      "icono": "Boxes",
      "capitulos": [
        {
          "id": "t11-c1",
          "numero": 1,
          "titulo": "Concepto",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "El gemelo digital es la representación virtual viva de la red eléctrica. Cada elemento real tiene un equivalente digital que refleja su estado, su historial y su comportamiento previsto."
            }
          ]
        },
        {
          "id": "t11-c2",
          "numero": 2,
          "titulo": "Modelo Digital de la Red",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Conductores.",
                "Aisladores.",
                "Transformadores.",
                "Torres y postes.",
                "Herrajes y conectores."
              ]
            },
            {
              "tipo": "parrafo",
              "texto": "Cada elemento digital almacena su estado, temperatura, historial, nivel de riesgo y vida útil estimada."
            }
          ]
        },
        {
          "id": "t11-c3",
          "numero": 3,
          "titulo": "Modelo Digital del Robot",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Además de la red, cada robot dispone de un gemelo que replica su estado mecánico, energético y de calibración, permitiendo mantenimiento predictivo de la propia flota."
            }
          ]
        },
        {
          "id": "t11-c4",
          "numero": 4,
          "titulo": "Mantenimiento Predictivo",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La combinación del gemelo digital con los modelos de IA permite anticipar fallas, programar intervenciones y simular el impacto de distintas estrategias de mantenimiento antes de aplicarlas en la red real."
            }
          ]
        },
        {
          "id": "t11-c5",
          "numero": 5,
          "titulo": "Simulación y Capacitación",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Simulación de maniobras y misiones.",
                "Validación de trayectorias antes de ejecutar.",
                "Capacitación virtual de operadores.",
                "Análisis de escenarios de falla."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-12",
      "numero": "XII",
      "titulo": "Ciberseguridad",
      "resumen": "Seguridad OT e IT, comunicaciones cifradas, gestión de identidades y arquitectura Zero Trust.",
      "icono": "ShieldCheck",
      "capitulos": [
        {
          "id": "t12-c1",
          "numero": 1,
          "titulo": "Modelo de Seguridad",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Al operar sobre infraestructura crítica, INSTE-BOT X requiere un modelo de seguridad que proteja tanto la tecnología operativa (OT) como los sistemas de información (IT), bajo un enfoque de defensa en profundidad."
            }
          ]
        },
        {
          "id": "t12-c2",
          "numero": 2,
          "titulo": "Seguridad OT",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Segmentación de redes operativas.",
                "Firmware firmado y arranque seguro.",
                "Control de acceso físico y lógico al robot.",
                "Monitoreo continuo de integridad."
              ]
            }
          ]
        },
        {
          "id": "t12-c3",
          "numero": 3,
          "titulo": "Seguridad IT",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Cifrado de datos en tránsito y en reposo.",
                "Gestión de identidades y accesos por roles.",
                "Registro y auditoría de eventos.",
                "Actualizaciones OTA firmadas."
              ]
            }
          ]
        },
        {
          "id": "t12-c4",
          "numero": 4,
          "titulo": "Arquitectura Zero Trust",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "El principio de confianza cero rige el acceso: ninguna entidad, dentro o fuera de la red, se considera confiable por defecto. Cada acceso se autentica, autoriza y verifica de forma continua."
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-13",
      "numero": "XIII",
      "titulo": "Patentes y Propiedad Intelectual",
      "resumen": "Estrategia de propiedad intelectual, reivindicaciones patentables, libertad de operación y ruta de patentamiento PCT.",
      "icono": "ScrollText",
      "capitulos": [
        {
          "id": "t13-c1",
          "numero": 1,
          "titulo": "Estrategia de Propiedad Intelectual",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La protección del proyecto combina el secreto industrial sobre los modelos de IA con la protección por patente de los elementos mecánicos y de sistema que aportan novedad técnica."
            }
          ]
        },
        {
          "id": "t13-c2",
          "numero": 2,
          "titulo": "Reivindicaciones Patentables",
          "bloques": [
            {
              "tipo": "listaNumerada",
              "items": [
                "Sistema de desplazamiento adaptable sobre conductor con cruce automático de obstáculos.",
                "Sistema híbrido de sensores (visible, térmico, UV y LiDAR) fusionados para diagnóstico.",
                "Sistema de diagnóstico y mantenimiento predictivo basado en IA embarcada.",
                "Gemelo digital integrado con flota robótica para la gestión de activos de red.",
                "Robot colaborativo para mantenimiento de líneas energizadas con doble brazo y tool changer."
              ]
            }
          ]
        },
        {
          "id": "t13-c3",
          "numero": 3,
          "titulo": "Libertad de Operación",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Antes de presentar cualquier solicitud se realiza un estudio de libertad de operación (freedom to operate) para verificar que el diseño no infringe patentes vigentes de terceros."
            }
          ]
        },
        {
          "id": "t13-c4",
          "numero": 4,
          "titulo": "Ruta de Patentamiento",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Redacción de solicitud prioritaria.",
                "Búsqueda de anterioridad.",
                "Presentación de solicitud PCT.",
                "Entrada en fases nacionales de interés.",
                "Gestión de mantenimiento de derechos."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-14",
      "numero": "XIV",
      "titulo": "Modelo de Negocio",
      "resumen": "Propuesta de valor, líneas de ingreso, segmentos de mercado y estrategia de entrada.",
      "icono": "Briefcase",
      "capitulos": [
        {
          "id": "t14-c1",
          "numero": 1,
          "titulo": "Propuesta de Valor",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "INSTE-BOT X transforma el mantenimiento de la red eléctrica de una actividad reactiva y de alto riesgo en un servicio continuo, autónomo y basado en datos."
            }
          ]
        },
        {
          "id": "t14-c2",
          "numero": 2,
          "titulo": "Líneas de Ingreso",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Línea",
                "Modelo"
              ],
              "filas": [
                [
                  "Venta de robot",
                  "CAPEX por unidad"
                ],
                [
                  "Robot como Servicio (RaaS)",
                  "Suscripción mensual"
                ],
                [
                  "Software como Servicio (SaaS)",
                  "Licencia por suscripción"
                ],
                [
                  "IA como Servicio",
                  "Consumo de analítica"
                ],
                [
                  "Mantenimiento",
                  "Contrato de soporte"
                ],
                [
                  "Consultoría",
                  "Proyectos de integración"
                ]
              ]
            }
          ]
        },
        {
          "id": "t14-c3",
          "numero": 3,
          "titulo": "Segmentos de Mercado",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Operadores de transmisión y distribución.",
                "Empresas de servicios públicos y cooperativas eléctricas.",
                "Operadores de infraestructura crítica.",
                "Empresas de mantenimiento de redes."
              ]
            }
          ]
        },
        {
          "id": "t14-c4",
          "numero": 4,
          "titulo": "Estrategia de Entrada",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "La entrada al mercado se plantea en tres olas: pilotos con operadores estratégicos, escalamiento comercial en el mercado nacional y expansión internacional mediante alianzas."
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-15",
      "numero": "XV",
      "titulo": "Estudio Económico",
      "resumen": "Fases del proyecto, CAPEX, OPEX, indicadores financieros (VAN, TIR, ROI) y análisis de escenarios.",
      "icono": "TrendingUp",
      "capitulos": [
        {
          "id": "t15-c1",
          "numero": 1,
          "titulo": "Estructura de Fases",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Fase",
                "Contenido"
              ],
              "filas": [
                [
                  "Fase 1",
                  "Investigación"
                ],
                [
                  "Fase 2",
                  "Prototipo"
                ],
                [
                  "Fase 3",
                  "Piloto"
                ],
                [
                  "Fase 4",
                  "Industrialización"
                ],
                [
                  "Fase 5",
                  "Comercialización"
                ]
              ]
            }
          ]
        },
        {
          "id": "t15-c2",
          "numero": 2,
          "titulo": "CAPEX Estimado",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Concepto",
                "Participación"
              ],
              "filas": [
                [
                  "Investigación y desarrollo",
                  "Mayor"
                ],
                [
                  "Prototipos y componentes",
                  "Alto"
                ],
                [
                  "Equipos de prueba y laboratorio",
                  "Medio"
                ],
                [
                  "Certificaciones",
                  "Medio"
                ],
                [
                  "Infraestructura de software",
                  "Medio"
                ]
              ]
            }
          ]
        },
        {
          "id": "t15-c3",
          "numero": 3,
          "titulo": "OPEX",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Operación y mantenimiento de la flota.",
                "Infraestructura cloud y cómputo.",
                "Personal técnico y de soporte.",
                "Seguros y cumplimiento normativo."
              ]
            }
          ]
        },
        {
          "id": "t15-c4",
          "numero": 4,
          "titulo": "Indicadores Financieros",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Indicador",
                "Descripción"
              ],
              "filas": [
                [
                  "VAN",
                  "Valor Actual Neto del proyecto"
                ],
                [
                  "TIR",
                  "Tasa Interna de Retorno"
                ],
                [
                  "ROI",
                  "Retorno sobre la inversión"
                ],
                [
                  "Payback",
                  "Periodo de recuperación"
                ]
              ]
            }
          ]
        },
        {
          "id": "t15-c5",
          "numero": 5,
          "titulo": "Análisis de Escenarios",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Escenario",
                "Supuesto"
              ],
              "filas": [
                [
                  "Conservador",
                  "Adopción lenta y alcance reducido"
                ],
                [
                  "Intermedio",
                  "Adopción moderada en mercado nacional"
                ],
                [
                  "Agresivo",
                  "Expansión internacional acelerada"
                ]
              ]
            }
          ]
        },
        {
          "id": "t15-c6",
          "numero": 6,
          "titulo": "Supuestos y Limitaciones",
          "bloques": [
            {
              "tipo": "destacado",
              "titulo": "Aviso",
              "texto": "Las cifras de este tomo son estimaciones ilustrativas de orden de magnitud. Deben sustituirse por un modelo financiero detallado y auditado antes de cualquier decisión de inversión."
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-16",
      "numero": "XVI",
      "titulo": "Roadmap Tecnológico a 5 Años",
      "resumen": "Fases de desarrollo, hitos por año, recursos y riesgos del roadmap.",
      "icono": "CalendarClock",
      "capitulos": [
        {
          "id": "t16-c1",
          "numero": 1,
          "titulo": "Fases de Desarrollo",
          "bloques": [
            {
              "tipo": "tabla",
              "encabezados": [
                "Año",
                "Hito"
              ],
              "filas": [
                [
                  "Año 1",
                  "Prototipo de laboratorio"
                ],
                [
                  "Año 2",
                  "Prototipo Alpha · pruebas en líneas desenergizadas"
                ],
                [
                  "Año 3",
                  "Prototipo Beta · pruebas en líneas energizadas"
                ],
                [
                  "Año 4",
                  "Pilotos comerciales"
                ],
                [
                  "Año 5",
                  "Flota operativa y comercialización internacional"
                ]
              ]
            }
          ]
        },
        {
          "id": "t16-c2",
          "numero": 2,
          "titulo": "Hitos por Año",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Año 1: arquitectura, simulaciones y banco de pruebas.",
                "Año 2: integración mecánica y electrónica del primer prototipo.",
                "Año 3: validación de IA, sensórica y maniobras en tensión.",
                "Año 4: pilotos con operadores y certificaciones.",
                "Año 5: producción en serie y despliegue de flota."
              ]
            }
          ]
        },
        {
          "id": "t16-c3",
          "numero": 3,
          "titulo": "Recursos y Equipo",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Ingeniería mecánica y estructural.",
                "Electrónica y sistemas embarcados.",
                "Software, IA y visión por computador.",
                "Energía y alta tensión.",
                "Gestión de proyecto y propiedad intelectual."
              ]
            }
          ]
        },
        {
          "id": "t16-c4",
          "numero": 4,
          "titulo": "Riesgos del Roadmap",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Los principales riesgos del cronograma son la disponibilidad de componentes críticos, la obtención de certificaciones y la ventana operativa para pruebas en líneas energizadas."
            }
          ]
        }
      ]
    },
    {
      "id": "tomo-17",
      "numero": "XVII",
      "titulo": "Renders Conceptuales",
      "resumen": "Vistas conceptuales del robot, del sistema sensorial y del ecosistema INSTE-BOT en operación.",
      "icono": "Images",
      "capitulos": [
        {
          "id": "t17-c1",
          "numero": 1,
          "titulo": "Concepto Visual",
          "bloques": [
            {
              "tipo": "parrafo",
              "texto": "Este tomo reúne las vistas conceptuales del sistema. Los esquemas técnicos vectoriales describen la geometría, los subsistemas y la disposición de sensores del INSTE-BOT X."
            }
          ]
        },
        {
          "id": "t17-c2",
          "numero": 2,
          "titulo": "Vistas del Robot",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Vista frontal.",
                "Vista lateral.",
                "Vista superior.",
                "Vista isométrica.",
                "Brazos desplegados.",
                "Sistema de sensores."
              ]
            }
          ]
        },
        {
          "id": "t17-c3",
          "numero": 3,
          "titulo": "Ecosistema y Operación",
          "bloques": [
            {
              "tipo": "lista",
              "items": [
                "Operación en una torre de transmisión.",
                "Operación en red de distribución.",
                "Centro de control INSTE-CLOUD.",
                "Gemelo digital de la red."
              ]
            },
            {
              "tipo": "parrafo",
              "texto": "Las vistas conceptuales están disponibles en la galería de renders del libro blanco."
            }
          ]
        }
      ]
    }
  ]
};
