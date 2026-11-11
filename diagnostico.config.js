/**
 * Diagnóstico AMASFAC 2027 — Configuración
 * ------------------------------------------------------------
 * TODO el contenido editable vive aquí: preguntas, beneficios,
 * secciones, delegaciones, correos de contacto, textos del cierre.
 * En 2027 sólo hay que actualizar este archivo; la lógica no cambia.
 * ------------------------------------------------------------
 */
window.DIAGNOSTICO = {
  meta: {
    titulo: "Diagnóstico AMASFAC",
    lema: "Por todo lo que nos une",
    uneteCorreo: "unete@amasfac.org",
    uneteTel: "(55) 5514 2090",
    privacidadUrl: null, // PENDIENTE: liga de aviso de privacidad
    oficinaTel: "(55) 5514 2090",
  },

  entrada: {
    titulo: "¿Cuánto de AMASFAC estás aprovechando?",
    subtitulo:
      "Contesta 10 preguntas y descubre los beneficios hechos para ti. Toma menos de 3 minutos.",
    preguntaAfiliacion: "¿Ya eres asociado?",
    opcionSi: "Sí, soy asociado",
    opcionNo: "Aún no",
    preguntaSeccionAsociado: "¿De qué Sección eres?",
    preguntaSeccionNoAsociado: "¿En qué ciudad trabajas?",
    seccionOtra: "Otra",
    botonEmpezar: "Empezar",
  },

  // Fuente: PDF "Ser AMASFAC" · Lámina "Secciones"
  secciones: [
    "Acapulco",
    "Aguascalientes",
    "Cancún",
    "Celaya",
    "Cd. de México",
    "Cd. Juárez",
    "Cd. Obregón",
    "Chihuahua",
    "Culiacán",
    "Durango",
    "Ensenada",
    "Guadalajara",
    "Hermosillo",
    "Laguna",
    "León",
    "Los Mochis",
    "Matamoros",
    "Mazatlán",
    "Mérida",
    "Mexicali",
    "Monclova",
    "Monterrey",
    "Morelia",
    "Nuevo Laredo",
    "Oaxaca",
    "Puebla",
    "Puerto Vallarta",
    "Querétaro",
    "Reynosa",
    "Saltillo",
    "San Luis Potosí",
    "Tabasco",
    "Tampico",
    "Tijuana",
    "Toluca",
    "Tuxtla Gutiérrez",
  ],
  delegaciones: ["Morelos", "Veracruz", "Xalapa", "Campeche", "Colima"],

  // ---------------------------------------------------------------
  // PREGUNTAS
  //   type: "single" | "multi"
  //   dependsOn: { questionId, includesOptionId }
  //   frase: cadena por defecto; si la opción define `frase`, usa esa
  //   options[].scores: { beneficioId: puntos }
  //   options[].razon: razón (se usa como "Por qué:" si esta opción
  //                    fue la que más puntos aportó a ese beneficio)
  //   options[].exclusive: true → desmarca al resto en multi
  // ---------------------------------------------------------------
  preguntas: [
    {
      id: "p1",
      type: "single",
      texto: "¿Tu cédula vence en los próximos 12 meses?",
      frase:
        "¿Sabías que te ayudamos a mantenerte al día con tus trámites ante la Comisión Nacional de Seguros y Fianzas? Gestionamos el refrendo de tu cédula y te apoyamos a programar tus exámenes ante el CEI.",
      options: [
        {
          id: "si",
          texto: "Sí",
          scores: { cedula: 3 },
          razon: "Tu cédula vence en los próximos 12 meses",
        },
        {
          id: "no",
          texto: "No",
          scores: { cedula: 1 },
          razon:
            "Para que ningún cambio de la CNSF te tome por sorpresa",
        },
        {
          id: "nose",
          texto: "No sé cuándo vence",
          scores: { cedula: 3 },
          razon: "No tienes ubicada la fecha de vencimiento de tu cédula",
        },
      ],
    },

    {
      id: "p2",
      type: "multi",
      texto: "¿Qué ramos trabajas?",
      min: 1,
      frase:
        "¿Sabías que AMASFAC tiene comités por ramo (Automóviles, Daños, Fianzas, Salud y Vida) y foros especializados como el Seminario de Daños o el Foro de Fianzas y RC?",
      options: [
        {
          id: "vida",
          texto: "Vida",
          scores: { trofeo: 1, comites: 1, eventos: 1 },
          razon: "Trabajas Vida",
        },
        {
          id: "gmm",
          texto: "Gastos Médicos Mayores",
          scores: { hospitales: 2, trofeo: 1, comites: 1, eventos: 1 },
          razon: "Trabajas GMM",
        },
        {
          id: "autos",
          texto: "Autos",
          scores: { trofeo: 1, comites: 1, eventos: 1 },
          razon: "Trabajas Autos",
        },
        {
          id: "danos",
          texto: "Daños",
          scores: { eventos: 2, comites: 1 },
          razon: "Trabajas Daños",
        },
        {
          id: "fianzas",
          texto: "Fianzas",
          scores: { eventos: 2, comites: 1 },
          razon: "Trabajas Fianzas",
        },
      ],
    },

    {
      id: "p3",
      type: "single",
      dependsOn: { questionId: "p2", includesOptionId: "gmm" },
      texto:
        "En el último año, ¿te tocó pelear un dictamen o un rechazo de GMM?",
      frase:
        "¿Sabías que la membresía AMASFAC incluye una revisión de pre-dictamen al mes y una revisión de caso de dictamen rechazado al año con Dictamed?",
      options: [
        {
          id: "mas1",
          texto: "Sí, más de una vez",
          scores: { dictamed: 3, hospitales: 1 },
          razon: "Has tenido que pelear dictámenes de GMM",
        },
        {
          id: "uno",
          texto: "Una vez",
          scores: { dictamed: 3 },
          razon: "Has tenido que pelear dictámenes de GMM",
        },
        {
          id: "no",
          texto: "No, por suerte",
          scores: { dictamed: 1 },
          razon: "Para cuando un dictamen se complique",
        },
      ],
    },

    {
      id: "p4",
      type: "single",
      texto: "¿Tienes póliza de Responsabilidad Civil profesional?",
      frase:
        "¿Sabías que AMASFAC te da descuentos y mejores condiciones en tu póliza de RC con GMX y GNP?",
      options: [
        {
          id: "vigente",
          texto: "Sí, vigente",
          scores: { rc: 1 },
          razon: "Para tu próxima renovación",
        },
        {
          id: "pronto",
          texto: "Se me vence pronto",
          scores: { rc: 3 },
          razon: "Tu póliza de RC vence pronto",
        },
        {
          id: "no",
          texto: "No tengo",
          scores: { rc: 3 },
          razon: "Aún no tienes póliza de RC profesional",
        },
      ],
    },

    {
      id: "p5",
      type: "single",
      texto:
        "¿Tu capacitación en Prevención de Lavado de Dinero está al día?",
      frase:
        "¿Sabías que AMASFAC te da gratis el curso en línea de Prevención de Lavado de Dinero? Solo lo solicitas por correo.",
      options: [
        {
          id: "si",
          texto: "Sí",
          scores: { pld: 1 },
          razon: "Para cuando la necesites de nuevo",
        },
        {
          id: "aun",
          texto: "Aún no",
          scores: { pld: 3 },
          razon: "Tu capacitación en PLD está pendiente",
        },
        {
          id: "nose",
          texto: "No sé si me aplica",
          scores: { pld: 3 },
          razon: "La CNSF también evalúa el cumplimiento en PLD de los agentes",
        },
      ],
    },

    {
      id: "p6",
      type: "single",
      texto: "¿Cuántos años llevas como agente?",
      options: [
        {
          id: "lt3",
          texto: "Menos de 3",
          scores: { jovenes: 3, cursos: 2, cedula: 1 },
          razon: "Vas empezando tu carrera",
          frase:
            "Vas empezando tu carrera — ¿Sabías que AMASFAC tiene un Comité de Jóvenes con seminario propio?",
          etapa: "en despegue",
        },
        {
          id: "3a9",
          texto: "De 3 a 9",
          scores: { cursos: 1, eventos: 1, jovenes: 1 },
          razon: "Estás en plena etapa de crecimiento",
          frase:
            "Estás en plena etapa de crecimiento — ¿Sabías que AMASFAC tiene 17 comités donde tu experiencia puede sumar?",
          etapa: "en crecimiento",
        },
        {
          id: "10a20",
          texto: "De 10 a 20",
          scores: { comites: 2, trofeo: 1 },
          razon: "Tu experiencia suma en los comités",
          frase:
            "Tu experiencia suma en los comités — ¿Sabías que AMASFAC tiene 17 comités donde tu experiencia puede sumar?",
          etapa: "con experiencia",
        },
        {
          id: "gt20",
          texto: "Más de 20",
          scores: { comites: 2, merito: 3, trofeo: 1 },
          razon: "Tu trayectoria merece reconocimiento",
          frase:
            "Tu trayectoria merece reconocimiento — ¿Sabías que la Cancillería de la Orden al Mérito reconoce a quienes han tenido una actuación meritoria en la Asociación o en el sector?",
          etapa: "con trayectoria",
        },
      ],
    },

    {
      id: "p7",
      type: "single",
      texto: "¿Cómo trabajas?",
      options: [
        {
          id: "cuenta",
          texto: "Por mi cuenta",
          scores: { sala: 2, proveedores: 1 },
          razon: "Trabajas por tu cuenta",
          frase:
            "Trabajas por tu cuenta — ¿Sabías que, si visitas la CDMX, puedes usar la sala de juntas de la Oficina Nacional para atender a tus asegurados o fiados?",
        },
        {
          id: "despacho",
          texto: "Con despacho y equipo",
          scores: { proveedores: 2, medida: 2, sala: 1 },
          razon: "Tienes un equipo que administrar",
          frase:
            "Tienes un equipo que administrar — ¿Sabías que tienes descuentos con proveedores como SICAS Online, Ormuz y ODIN?",
        },
        {
          id: "promotoria",
          texto: "Soy promotoría",
          scores: { medida: 3, proveedores: 2 },
          razon: "Diriges una promotoría",
          frase:
            "Diriges una promotoría — ¿Sabías que AMASFAC organiza sesiones especiales de capacitación para promotorías y grupos, con objetivos a tu medida?",
        },
      ],
    },

    {
      id: "p8",
      type: "multi",
      texto: "¿Cómo te gusta crecer?",
      min: 1,
      options: [
        {
          id: "cursos",
          texto: "Cursos y diplomados",
          scores: { cursos: 3 },
          razon: "Quieres seguir capacitándote",
          frase:
            "Quieres seguir capacitándote — Precio preferencial en cursos, seminarios y diplomados con IMESFAC, ITAM Posgrados y el CEI.",
        },
        {
          id: "estudiar",
          texto: "Seguir estudiando (licenciatura o posgrado)",
          scores: { universidades: 3, cursos: 1 },
          razon: "Quieres seguir estudiando",
          frase:
            "Quieres seguir estudiando — Convenios educativos con Universidad Tecmilenio y Universidad Xochicalco.",
        },
        {
          id: "foros",
          texto: "Foros y seminarios",
          scores: { eventos: 3, brisas: 1 },
          razon: "Te gustan los foros y seminarios",
          frase:
            "Te gustan los foros y seminarios — Foros y seminarios en todo el país, y tarifa preferencial en hoteles Brisas cuando viajes.",
        },
        {
          id: "network",
          texto: "Networking y convivencia",
          scores: { eventos: 3, brisas: 1 },
          razon: "Te gusta convivir con el gremio",
          frase:
            "Te gusta convivir con el gremio — Torneos de golf, AMASFACTON y Día del Agente, entre otros.",
        },
        {
          id: "competir",
          texto: "Competir y que reconozcan mi trabajo",
          scores: { trofeo: 3 },
          razon: "Te gusta competir",
          frase:
            "Te gusta competir — El Trofeo AMASFAC reconoce a los mejores agentes del país en Vida, GMM y Autos.",
        },
      ],
    },

    {
      id: "p9",
      type: "multi",
      texto: "¿Quiénes forman tu círculo más cercano?",
      min: 1,
      frase:
        "¿Sabías que AMASFAC incluye asistencia funeraria ANEMEX para cada agente, extensiva a cónyuge, papás, hijos… y también a tu mascota?",
      options: [
        {
          id: "pareja",
          texto: "Mi pareja",
          scores: { anemex: 2 },
          razon: "Para proteger a tu círculo más cercano",
        },
        {
          id: "hijos",
          texto: "Mis hijos",
          scores: { anemex: 2 },
          razon: "Para proteger a tu círculo más cercano",
        },
        {
          id: "papas",
          texto: "Mis papás",
          scores: { anemex: 2 },
          razon: "Para proteger a tu círculo más cercano",
        },
        {
          id: "solo",
          texto: "Solo yo",
          exclusive: true,
          scores: { anemex: 2 },
          razon: "Para proteger a tu círculo más cercano",
        },
        {
          id: "mascota",
          texto: "Mi mascota 🐾",
          scores: { anemex: 3 },
          razon: "Incluye también a tu mascota",
        },
      ],
    },

    {
      id: "p10",
      type: "single",
      texto: "¿Cuándo fue tu última limpieza dental? 😅",
      frase:
        "¿Sabías que con Dentalia tienes 2 limpiezas ultrasónicas, revisión y diagnóstico gratis, y hasta 50% de descuento en estudios y tratamientos?",
      options: [
        {
          id: "menos6",
          texto: "Hace menos de 6 meses",
          scores: { dentalia: 1 },
          razon: "Para tu siguiente limpieza",
        },
        {
          id: "mas6",
          texto: "Hace más de 6 meses",
          scores: { dentalia: 3 },
          razon: "Ya te toca una limpieza",
        },
        {
          id: "nime",
          texto: "Ya ni me acuerdo",
          scores: { dentalia: 3 },
          razon: "Ya te toca una limpieza 😉",
        },
      ],
    },
  ],

  // ---------------------------------------------------------------
  // CATÁLOGO DE BENEFICIOS
  //   Cada entrada:
  //     nombre, descCorta, detalle, email, extra (teléfonos/web),
  //     ctaAsociado, ctaNoAsociado  (texto del botón; si no se da,
  //       usa "Activar" / "Lo quiero")
  //     noButton: true → no mostrar botón (p. ej. "merito")
  // ---------------------------------------------------------------
  catalogo: {
    cedula: {
      nombre: "Trámites CNSF al día",
      descCorta:
        "Apoyo y orientación en tus trámites ante la CNSF: te avisamos de cambios, gestionamos tu refrendo y te apoyamos con los exámenes del CEI.",
      detalle:
        "Apoyo y orientación en trámites ante la CNSF. Te informamos de los cambios y te ayudamos a prever problemas. Gestión del refrendo de las cédulas con las que cuentes. Orientación y programación de exámenes ante el CEI.",
      email: "beneficios@amasfac.org", // PENDIENTE: el PDF no trae correo específico
      extra: "Oficina Nacional (55) 5514 2090",
      pendiente:
        "PDF no especifica correo para trámites de cédula; se usa el genérico.",
    },
    rc: {
      nombre: "Póliza de RC con descuento",
      descCorta:
        "Descuentos y mejores condiciones en tu póliza de Responsabilidad Civil con GMX y GNP.",
      detalle:
        "Descuentos y mejores condiciones en póliza de Responsabilidad Civil con GMX y GNP.",
      email: "polizarc@amasfac.org",
    },
    dictamed: {
      nombre: "Apoyo en dictámenes GMM",
      descCorta:
        "1 revisión de pre-dictamen al mes y 1 revisión de caso de dictamen rechazado al año, incluidas en tu membresía.",
      detalle:
        "Incluido en la membresía: 1 revisión de pre-dictamen al mes y 1 revisión de caso de dictamen rechazado al año (respuesta 72 horas después de la entrega de la documentación). Combo AMASFAC con Dictamed (persona física): $5,000 + IVA, contra $7,380 + IVA de lista; incluye Membresía Emprendedor, Dictamed de Rechazo Prepago y Dictamed al Momento por un año.",
      email: "beneficios@amasfac.org",
    },
    hospitales: {
      nombre: "Convenios con hospitales para tus asegurados",
      descCorta:
        "Red de hospitales con convenio para tus asegurados en todo el país.",
      detalle:
        "Hospital Aqua, Hospital Azura Satélite, Hospital Bité Médica, Chopo, MAC Hospitales, IDOC Instituto de Oftalmología, Sportkines, Hospital Regional del Río y HMN Hospital de la Mujer y el Niño.",
      email: "beneficios@amasfac.org",
      pendiente:
        "El PDF muestra un logo 'HA' sin nombre legible; no se nombra aquí.",
    },
    pld: {
      nombre: "Curso PLD en línea, gratis",
      descCorta:
        "Curso en línea de Prevención de Lavado de Dinero sin costo; se solicita con tus datos generales.",
      detalle:
        "Curso en línea de prevención de lavado de dinero sin costo. Se solicita por correo con tus datos generales.",
      email: "beneficios@amasfac.org",
      pendiente: "PDF no especifica correo; se usa el genérico.",
    },
    anemex: {
      nombre: "Asistencia funeraria ANEMEX",
      descCorta:
        "Para cada agente, extensiva a cónyuge, papás, hijos y mascotas. Cobertura completa y asesoría.",
      detalle:
        "Para cada agente, extensiva a cónyuges, padres, hijos y mascotas. Incluye recolección, arreglo estético, ataúd metálico, sala de velación (también a domicilio sin costo adicional), gestión de trámites, asesoría jurídica testamentaria por teléfono y tanatología (presencial en zona metropolitana; en el interior, sujeta a disponibilidad). Opción de cremación o inhumación.",
      email: "beneficios@amasfac.org",
      extra: "Centro de Atención Funeraria 55 5212 0629 opc. 2 · www.anemex.net",
    },
    dentalia: {
      nombre: "Servicio dental Dentalia",
      descCorta:
        "2 limpiezas, revisión y diagnóstico gratis. Hasta 50% de descuento en tratamientos.",
      detalle:
        "Gratis: 2 limpiezas ultrasónicas, revisión y diagnóstico. 50% en radiografías, resinas, amalgamas, reconstrucción con resina y sellados. 10% en extracciones, endodoncia, coronas, prótesis, brackets y alineadores invisibles, blanqueamiento Zoom y otros tratamientos.",
      email: "beneficios@amasfac.org",
      extra:
        "Citas: Clínicas Dentalia 55 1192 2634 · Red Dentalia 55 2905 9879",
    },
    cursos: {
      nombre: "Cursos, seminarios y diplomados a precio preferencial",
      descCorta:
        "Precio preferencial en IMESFAC, ITAM Posgrados y el Centro de Evaluación para Intermediarios (CEI).",
      detalle:
        "Cursos, seminarios y diplomados a precio preferencial con IMESFAC, ITAM Posgrados y el Centro de Evaluación para Intermediarios (CEI).",
      email: "beneficios@amasfac.org",
      pendiente: "Correo PENDIENTE confirmar.",
    },
    universidades: {
      nombre: "Convenios educativos",
      descCorta:
        "Convenios con Universidad Tecmilenio y Universidad Xochicalco para licenciatura y posgrado.",
      detalle:
        "Pueden tener acceso a nuevas opciones de estudio y ofrecerlas a nivel nacional gracias a nuestra presencia en diferentes partes de la República Mexicana. Universidad Tecmilenio y Universidad Xochicalco.",
      email: "beneficios@amasfac.org",
    },
    medida: {
      nombre: "Capacitación a la medida",
      descCorta:
        "Sesiones especiales con aseguradoras, corredores, promotorías y grupos, con objetivos propios.",
      detalle:
        "Sesiones especiales con aseguradoras, corredores, promotorías y grupos especiales. Objetivos específicos de formación y desarrollo. Eventos de integración y convivencia.",
      email: "formacion@amasfac.org",
      pendiente: "Correo PENDIENTE confirmar.",
    },
    eventos: {
      nombre: "Eventos y foros en todo el país",
      descCorta:
        "Congreso Nacional, AMASFAC Day, Seminario de Daños, Foro de Fianzas y RC, Día del Agente y más.",
      detalle:
        "Congreso Nacional, AMASFAC Day, Seminario de Alto Nivel de Seguros y GMM, Seminario de Daños, Foro de Fianzas y RC, Foro de Siniestros, Seminario Multiramo, Semana Nacional de la Previsión y Responsabilidad, torneos de golf, Día del Agente y AMASFACTON, entre otros.",
      email: "eventos@amasfac.org",
    },
    trofeo: {
      nombre: "Trofeo AMASFAC",
      descCorta:
        "Reconocimiento a los mejores agentes del país en Vida, GMM y Automóviles.",
      detalle:
        "El Trofeo AMASFAC reconoce a los mejores agentes a nivel nacional en los ramos de Vida, GMM y Automóviles.",
      email: "eventos@amasfac.org",
      pendiente: "Correo PENDIENTE confirmar.",
    },
    comites: {
      nombre: "Comités AMASFAC",
      descCorta:
        "17 comités para aportar tu experiencia según el ramo que trabajas.",
      detalle:
        "AMASFAC cuenta con 17 comités. Según los ramos que trabajas: Salud y Vida (Vida o GMM), Automóviles, Daños, Fianzas, entre otros.",
      email: "beneficios@amasfac.org",
      emailsPorRamo: {
        vida: "comitesaludyvida@amasfac.org",
        gmm: "comitesaludyvida@amasfac.org",
        autos: "comiteautomoviles@amasfac.org",
        danos: "comitedanos@amasfac.org",
        fianzas: "comitedefianzas@amasfac.org",
      },
    },
    jovenes: {
      nombre: "Comité de Jóvenes",
      descCorta: "Comité con seminario propio para agentes jóvenes.",
      detalle:
        "Comité de Jóvenes con seminario propio para agentes que van empezando o están en etapa temprana de su carrera.",
      email: "comitedejovenes@amasfac.org",
    },
    brisas: {
      nombre: "Tarifa preferencial en hoteles Brisas",
      descCorta:
        "Tarifa preferencial en toda la cadena de hoteles Brisas cuando viajes.",
      detalle:
        "Contamos con el servicio de tarifa preferencial en toda la cadena de hoteles Brisas.",
      email: "beneficios@amasfac.org",
    },
    sala: {
      nombre: "Sala de juntas en la Oficina Nacional",
      descCorta:
        "Sala disponible para asociados de visita en CDMX que necesiten atender a sus asegurados o fiados.",
      detalle:
        "Sala de juntas de la Oficina Nacional disponible para asociados que visiten la CDMX y necesiten atender a sus asegurados o fiados. Florencia No. 18, int. 101 y 102, Col. Juárez, C.P. 06600, CDMX. Al agendar, indica el tiempo y los recursos que ocuparás (proyector, internet, etc.).",
      email: "beneficios@amasfac.org",
      extra: "Agenda con Eimy López, 55 2677 8317",
    },
    proveedores: {
      nombre: "Descuentos con proveedores",
      descCorta:
        "Descuentos con Ormuz, SICAS Online, ODIN, Joana Díaz, CEI e IMESFAC.",
      detalle:
        "Descuentos y convenios especiales con proveedores como Ormuz, SICAS Online, ODIN, Joana Díaz, CEI e IMESFAC.",
      email: "beneficios@amasfac.org",
    },
    merito: {
      nombre: "Orden al Mérito",
      descCorta:
        "La Cancillería de la Orden al Mérito reconoce a quienes han tenido una actuación meritoria en la Asociación o el sector.",
      detalle:
        "La Cancillería de la Orden al Mérito reconoce a quienes, dentro o fuera de AMASFAC, han tenido una actuación meritoria en la Asociación o en el sector asegurador o afianzador.",
      noButton: true,
    },
  },

  // Siempre contigo (no suman puntos, sin botón)
  siempreContigo: [
    {
      id: "representacion",
      nombre: "Te representamos",
      descCorta:
        "Relación con autoridades y asociaciones afines como CNSF, CONDUSEF, SHCP, AMIS, COPARMEX y CCE.",
      detalle:
        "Mantenemos relaciones con autoridades y asociaciones afines (CNSF, CONDUSEF, SHCP, AMIS, COPARMEX, CCE) para aportar al desarrollo del sector. Gracias a la gestión de AMASFAC, se autorizó a todo el sector a operar como actividad esencial durante la pandemia.",
    },
    {
      id: "publicaciones",
      nombre: "Siempre informado",
      descCorta:
        "El Asegurador cada quincena y Yo Agente cada mes, en tu correo.",
      detalle:
        "El Asegurador cada quincena y Yo Agente cada mes, en tu correo.",
    },
    {
      id: "internacional",
      nombre: "Presencia internacional",
      descCorta: "Integrantes de COPAPROSE y WFII.",
      detalle:
        "Integrantes de las organizaciones internacionales de la industria: COPAPROSE y WFII.",
    },
    {
      id: "guia_ebc",
      nombre: "Guía EBC",
      descCorta:
        "Consulta la Guía EBC solicitando acceso a Coordinación de Sistemas.",
      detalle:
        "Usuario y contraseña con la Coordinación de Sistemas: Omar Rosas 55 3694 8093 · Ángel Romero 55 2722 2086.",
      pendiente: "Confirmar vigencia 2027.",
    },
  ],

  // ---------------------------------------------------------------
  // Textos de UI
  // ---------------------------------------------------------------
  ui: {
    volver: "Regresar",
    siguiente: "Siguiente",
    progresoFmt: "Pregunta {n} de {total}",
    sabiasQue: "¿Sabías que…?",
    etiquetaAsociado: "Ya es tuyo",
    etiquetaNoAsociado: "Exclusivo para asociados",
    resultadoTitulo: "Tu diagnóstico AMASFAC",
    resultadoSub: "Encontramos {n} beneficios hechos para ti",
    hechosParaTi: "Hechos para ti",
    tambienTienes: "También tienes",
    siempreContigo: "Siempre contigo",
    porQue: "Por qué:",
    activar: "Activar",
    loQuiero: "Lo quiero",
    verDetalle: "Ver detalle",
    ocultarDetalle: "Ocultar detalle",
    uneteTitulo: "Únete a AMASFAC",
    uneteSub:
      "Escríbenos a {correo} o llámanos al {tel}. Te damos la bienvenida.",
    calificacionAsociado: "¿Qué tanto valor te da AMASFAC hoy?",
    calificacionNoAsociado: "¿Qué tanto te interesa unirte?",
    contactoTitulo: "Déjanos tus datos (opcional)",
    contactoNombre: "Tu nombre",
    contactoCorreo: "Correo",
    contactoCelular: "Celular",
    contactoAviso:
      "Acepto el aviso de privacidad de AMASFAC.",
    contactoBoton: "Recibe información específica de estos beneficios",
    comparteTitulo: "Compártelo con un colega",
    comparteTexto:
      "Descubre en menos de 3 minutos qué beneficios de AMASFAC son para ti: {link}",
    comparteBoton: "Compartir por WhatsApp",
    reiniciar: "Volver a empezar",
    volverPresentacion: "Volver a la presentación",
    gracias: "¡Gracias por responder!",
  },

  // Helper textos del perfil
  perfil: {
    especialistaEn: "Especialista en {ramo}",
    deYDe: "Agente de {a} y {b}",
    multirramo: "Agente multirramo",
    sep: " ",
  },
};
