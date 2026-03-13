import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { LucideAngularModule, FileText, Building2, Car, Store, KeyRound, Wallet, CalculatorIcon, Skull, Gavel, ShoppingCart, HardHat, Server, Folder, FileSignature, IdCard, Droplets, Lightbulb, Zap } from 'lucide-angular';

@Component({
  selector: 'app-modulo-detalle',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './modulo-detalle.component.html',
  styleUrl: './modulo-detalle.component.css'
})
export class ModuloDetalleComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;
  imagenSeleccionada: string | null = null;
  slideActual = 0;
  private intervaloCarrusel: any;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // Icons
  FileText = FileText;
  Building2 = Building2;
  Car = Car;
  Store = Store;
  Wallet = Wallet;
  CalculatorIcon = CalculatorIcon;
  Skull = Skull;
  Gavel = Gavel;
  ShoppingCart = ShoppingCart;
  HardHat = HardHat;
  Server = Server;
  Folder = Folder;
  FileSignature = FileSignature;
  IdCard = IdCard;
  Droplets = Droplets;
  Lightbulb = Lightbulb;
  Zap = Zap;

  // Datos de todos los módulos
  modulosData: { [key: string]: any } = {
    'catastro': {
      nombre: 'Catastro',
      subtitulo: 'Sistema integral de gestión catastral para administración de propiedades y propietarios (contribuyentes)',
      icon: 'Building2',
      imagenes: [
        { archivo: 'catastro-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'catastro-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'catastro-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Gestión completa de expedientes de propietarios (contribuyentes)',
        'Mantenimiento de propiedades con datos catastrales detallados (adremas, dimensiones, ubicaciones)',
        'Administración de propietarios (contribuyentes) con información personal y documentos asociados',
        'Gestión de calles y directorio catastral del municipio',
        'Control de manzanas y parcelas con nomenclatura catastral',
        'Gestión de títulos y su historial de transferencias',
        'Emisión de legajos catastrales y completos de contribuyentes',
        'Carga y seguimiento de relaciones de pedido afectadas a órdenes de compra desde el módulo Compras',
        'Auditoría completa de cambios en registros con seguimiento de usuarios',
        'Sistema de búsquedas avanzadas con filtros personalizados'
      ],
      beneficios: [
        {
          titulo: 'Centralización de Información Catastral',
          descripcion: 'Almacena todos los datos de propiedades y propietarios (contribuyentes) en un sistema integrado que facilita el acceso y consulta de información.'
        },
        {
          titulo: 'Optimización de Procesos Administrativos',
          descripcion: 'Permite crear, modificar y consultar expedientes de forma rápida, reduciendo tiempos de gestión y mejorando la eficiencia operativa.'
        },
        {
          titulo: 'Actualización Permanente del Padrón',
          descripcion: 'Mantiene la información de propiedades y propietarios (contribuyentes) siempre actualizada con historial completo de modificaciones y transferencias de títulos.'
        },
        {
          titulo: 'Mejora en la Recaudación',
          descripcion: 'Facilita la identificación de contribuyentes y sus propiedades para mejorar la gestión tributaria y la recaudación municipal.'
        },
        {
          titulo: 'Transparencia y Control',
          descripcion: 'Ofrece auditoría completa de todas las acciones realizadas, permitiendo seguimiento de quién creó o modificó cada registro y cuándo.'
        },
        {
          titulo: 'Información para la Toma de Decisiones',
          descripcion: 'Genera reportes y listados personalizados que proporcionan datos valiosos para la planificación y decisiones administrativas.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Panel de carpetas intuitivo que permite navegar entre diferentes opciones del sistema y acceder rápidamente a la información.' },
        { titulo: 'Búsquedas Avanzadas', descripcion: 'Panel de búsqueda potente con filtros múltiples que permite encontrar registros por cualquier campo y aplicar criterios personalizados.' },
        { titulo: 'Seguridad y Auditoría de Usuarios', descripcion: 'Sistema multiusuario con perfiles (Administrador/Operador), control de accesos y seguimiento completo de acciones por usuario.' },
        { titulo: 'Informes y Listados Personalizados', descripcion: 'Generación de reportes configurables con filtros y ordenamientos.' },
        { titulo: 'Historial de Cambios', descripcion: 'Cada registro mantiene auditoría básica (usuario y fecha de creación/modificación) accesible desde las propiedades del registro.' },
        { titulo: 'Gestión de Archivos Históricos', descripcion: 'Posibilidad de crear archivos históricos para depurar la base de datos actual mientras se mantiene la consulta de datos antiguos.' }
      ]
    },
    'inmobiliario': {
      nombre: 'Impuesto Inmobiliario',
      subtitulo: 'Administración completa de la Tasa Inmobiliaria',
      icon: 'FileText',
      imagenes: [
        { archivo: 'inmobiliario-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'inmobiliario-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'inmobiliario-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Cuentas corrientes asociadas a inmuebles (adremas)',
        'Generación automática de cuotas periódicas',
        'Liquidación de impuestos inmobiliarios',
        'Emisión de comprobantes de pago',
        'Informes y reportes tributarios personalizados',
        'Gestión completa de contribuyentes',
        'Actualización automática de deudas',
        'Anulación y reemplazo de comprobantes',
        'Control de morosos y deudores',
        'Interfaz directa con módulo Catastro'
      ],
      beneficios: [
        {
          titulo: 'Integración Total con Catastro',
          descripcion: 'Trabaja en conjunto con el módulo Catastro para mantener siempre actualizados los datos de inmuebles y contribuyentes.'
        },
        {
          titulo: 'Recaudación Optimizada',
          descripcion: 'Actualización automática de deudas y generación de cuotas para maximizar la recaudación municipal.'
        },
        {
          titulo: 'Informes Personalizables',
          descripcion: 'Más de 20 reportes prediseñados y la posibilidad de crear informes personalizados según las necesidades de la administración.'
        },
        {
          titulo: 'Control de Gestión',
          descripcion: 'Control total de morosos, planes de pago y gestiones de cobro con seguimiento detallado de cada cuenta.'
        },
        {
          titulo: 'Gestión de Convenios',
          descripcion: 'Integración con el módulo de Convenios para facilitar acuerdos de pago con contribuyentes en mora.'
        },
        {
          titulo: 'Auditoría Completa',
          descripcion: 'Todas las operaciones quedan registradas con usuario, fecha y hora para total transparencia.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Navegación intuitiva para acceder a cualquier inmueble con un clic.' },
        { titulo: 'Búsqueda Avanzada', descripcion: 'Busque inmuebles por padrón, ubicación o titular con filtros personalizables.' },
        { titulo: 'Informes Flexibles', descripcion: 'Reportes en formato matricial, láser o inyección de tinta.' },
        { titulo: 'Actualización Masiva', descripcion: 'Actualice automáticamente las deudas de todos los inmuebles.' },
        { titulo: 'Seguridad y Auditoría', descripcion: 'Login local o Active Directory con registro completo.' },
        { titulo: 'Archivos Históricos', descripcion: 'Conserva datos históricos sin afectar el rendimiento.' }
      ]
    },
    'automotores': {
      nombre: 'Tasa Automotor',
      subtitulo: 'Gestión completa del Parque Automotor Municipal',
      icon: 'Car',
      imagenes: [
        { archivo: 'automotores1.png', titulo: 'Interfaz Básica' },
        { archivo: 'automotores2.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'automotores3.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Expedientes de automotores del parque automotor',
        'Consulta de datos de contribuyentes y titulares',
        'Generación masiva de cuotas para todo el padrón',
        'Emisión masiva de boletas de pago',
        'Generación de estado de deuda',
        'Distribución de boletas por email',
        'Categorías y tipos de automotores',
        'Aforos de vehículos',
        'Gestión de cobros por registro',
        'Informes personalizados de deuda'
      ],
      beneficios: [
        {
          titulo: 'Gestión Masiva Eficiente',
          descripcion: 'Genere cuotas y boletas de pago para todo el padrón en un solo proceso, ahorrando horas de trabajo administrativo.'
        },
        {
          titulo: 'Distribución por Email',
          descripcion: 'Envíe automáticamente las boletas de pago por email a los contribuyentes, reduciendo costos de impresión y correo.'
        },
        {
          titulo: 'Control del Parque Automotor',
          descripcion: 'Mantenga actualizado el padrón de vehículos con categorías, aforos y datos de titulares.'
        },
        {
          titulo: 'Informes de Deuda',
          descripcion: 'Generación rápida de estados de deuda para control fiscal y gestión de cobranza.'
        },
        {
          titulo: 'Integración con Tesorería',
          descripcion: 'Los cobros de automotores se integran automáticamente con el módulo de Tesorería.'
        },
        {
          titulo: 'Actualización Automática',
          descripcion: 'Las cuentas corrientes se actualizan automáticamente con las cuotas generadas.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Navegación intuitiva para acceder a expedientes de automotores.' },
        { titulo: 'Búsqueda por Patente', descripcion: 'Busque vehículos rápidamente por patente, dominio o titular.' },
        { titulo: 'Generación Masiva', descripcion: 'Procesos por lote para cuotas, boletas y estados de deuda.' },
        { titulo: 'Distribución por Email', descripcion: 'Envío automático de boletas a los contribuyentes.' },
        { titulo: 'Categorización de Vehículos', descripcion: 'Organice automotores por categorías, tipos y aforos.' },
        { titulo: 'Auditoría Completa', descripcion: 'Registro de todas las operaciones para total transparencia.' }
      ]
    },
    'comercio': {
      nombre: 'Tasa Habilitación Comercial',
      subtitulo: 'Sistema integral de gestión de cuentas corrientes asociadas a comercios con seguimiento de contribuyentes, cuotas e informes personalizados',
      icon: 'Store',
      imagenes: [
        { archivo: 'comercio-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'comercio-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'comercio-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Gestión completa de contribuyentes y comercios con almacenamiento de cuentas corrientes',
        'Generación automática y manual de cuotas con cálculo de vencimientos',
        'Emisión y gestión de comprobantes de pago con control de talonarios',
        'Anulación de comprobantes pagados con registro de auditoría',
        'Administración básica de parámetros y configuraciones del módulo',
        'Control de entrega con hojas de ruta y gestión de repartidores',
        'Generación de boletas de pago para distribución masiva',
        'Gestión de infracciones e intimaciones con seguimiento',
        'Consulta de archivos históricos para depuración de base de datos',
        'Pasaje a contabilidad con exportación de datos financieros'
      ],
      beneficios: [
        {
          titulo: 'Interfaz Tipo Explorador',
          descripcion: 'Acceso rápido a la información con un solo clic, visualización inmediata de registros y acciones instantáneas (crear, modificar, eliminar, copiar).'
        },
        {
          titulo: 'Búsqueda Avanzada de Datos',
          descripcion: 'Filtros ilimitados sobre prácticamente cualquier carpeta con posibilidad de configurar qué datos visualizar según tipo de búsqueda.'
        },
        {
          titulo: 'Informes y Listados Personalizados',
          descripcion: 'Impresión en cualquier tipo de impresora (chorro de tinta, láser, matricial) con filtrado y ordenación flexible de la información.'
        },
        {
          titulo: 'Seguridad y Auditoría Integral',
          descripcion: 'Identificación de usuarios con login local o Windows (Active Directory Azure), permisos configurables y registro de cada acción por registro.'
        },
        {
          titulo: 'Archivos Históricos',
          descripcion: 'Depuración de base de datos con creación de archivos históricos consultables como si estuvieran en la base actual.'
        },
        {
          titulo: 'Mayor Conectividad',
          descripcion: 'Envío de correos electrónicos directo desde el sistema, navegación en Internet y conversión a cualquier formato para adjuntar.'
        }
      ],
      caracteristicas: [
        { titulo: 'Copias de Seguridad Automatizadas', descripcion: 'Sistema independiente de backup con programación de fecha, hora y medio de almacenamiento para proteger los datos.' },
        { titulo: 'Control Total en Procesos', descripcion: 'Posibilidad de cancelar cualquier proceso iniciado (búsquedas, reportes, generaciones masivas) en cualquier momento.' },
        { titulo: 'Auditoría Técnica Extensiva', descripcion: 'Registro completo de cada paso realizado por cada usuario en fechas determinadas complementando la auditoría por registro.' },
        { titulo: 'Gestión de Relaciones de Pedido', descripcion: 'Control completo del proceso de compras y pedidos con informes específicos de relaciones.' },
        { titulo: 'Recaudación y Liquidación', descripcion: 'Informes financieros detallados de recaudación, liquidación de cuentas y control de deudores.' },
        { titulo: 'Certificados de Libre Deuda', descripcion: 'Generación automática de certificados de libre deuda para comercios al corriente con sus pagos.' }
      ]
    },
    'tesoreria': {
      nombre: 'Tesorería',
      subtitulo: 'Gestión integral de cobros y pagos municipales con control completo de recaudación y tesorería',
      icon: 'Wallet',
      imagenes: [
        { archivo: 'tesoreria-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'tesoreria-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'tesoreria-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Registro de cobros y pagos por día con control total de movimientos de caja',
        'Gestión de contribuyentes afectados y seguimiento de cuentas por cobrar',
        'Informes personalizados por distintos tipos de orden y filtros avanzados',
        'Sistema de cobranzas con múltiples opciones de pago y control de cambio',
        'Emisión de recibos de pago y comprobantes de tesorería',
        'Gestión de pagos con distintos tipos (caja chica, transferencia, cheque)',
        'Anulación de cobranzas y comprobantes con seguridad y auditoría',
        'Control de talonarios y numeración de comprobantes',
        'Gestión de tipos de pago y subcategorización de movimientos',
        'Pasaje a contabilidad y generación de asientos contables'
      ],
      beneficios: [
        {
          titulo: 'Control Total de Recaudación',
          descripcion: 'Gestión completa de cobros y pagos del municipio con registro detallado por día y contribuyente.'
        },
        {
          titulo: 'Informes Flexibles y Personalizables',
          descripcion: 'Amplia variedad de listados e informes con filtros y ordenamiento según necesidades específicas.'
        },
        {
          titulo: 'Seguridad y Trazabilidad Completa',
          descripcion: 'Auditoría de datos con identificación de usuarios y seguimiento de cada acción realizada.'
        },
        {
          titulo: 'Interfaz Intuitiva Tipo Explorador',
          descripcion: 'Acceso rápido a información con visualización inmediata y acciones directas sobre registros.'
        },
        {
          titulo: 'Integración Contable Automática',
          descripcion: 'Pasaje automático de datos a contabilidad con generación de asientos asociados.'
        },
        {
          titulo: 'Gestión Documental Digital',
          descripcion: 'Asociación de archivos digitales a pagos y envío de documentación por correo electrónico.'
        }
      ],
      caracteristicas: [
        { titulo: 'Múltiples Opciones de Cobro', descripcion: 'Cobro en efectivo, cheques, transferencias y otros medios con control de diferencia de cambio parametrizable.' },
        { titulo: 'Estados de Comprobante Avanzados', descripcion: 'Estados AUTORIZADO, CANCELADO y ANULADO con control de fecha de cancelación en vencimientos.' },
        { titulo: 'Gestión de Beneficiarios y Contribuyentes', descripcion: 'Base de datos completa con búsqueda y carga de nuevos beneficiarios para pagos.' },
        { titulo: 'Configuración de Parámetros Flexibles', descripcion: 'Redondeo automático, control de copias de tickets, forma de recaudación centralizada o por departamento.' },
        { titulo: 'Control de Topes y Límites', descripcion: 'Tope de extracción para caja chica, máxima diferencia aceptable en cobranzas, bloqueos fijos y dinámicos.' },
        { titulo: 'Reimpresión y Anulación Segura', descripcion: 'Reimpresión de tickets individuales o de operación completa, anulación de comprobantes con validación de contabilización.' }
      ]
    },
    'contabilidad': {
      nombre: 'Contabilidad',
      subtitulo: 'Gestión contable integral con control de movimientos bancarios, pasivos laborales y centros de costos',
      icon: 'CalculatorIcon',
      imagenes: [
        { archivo: 'contabilidad-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'contabilidad-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'contabilidad-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Plan de cuentas configurable con estructura jerárquica y tipos de cuentas',
        'Asientos contables automáticos y manuales con integración multi-módulo',
        'Control de libros bancos y cuentas corrientes bancarias',
        'Gestión de centros de costos para análisis por departamentos',
        'Informes financieros: Libro diario, mayor, balance general y sumas y saldos',
        'Administración de chequeras y control de cheques emitidos',
        'Gestión de entidades bancarias y cuentas corrientes',
        'Control de pasivos laborales',
        'Reportes personalizados avanzados con filtros y ordenamiento',
        'Cierre contable y renumeración de asientos'
      ],
      beneficios: [
        {
          titulo: 'Interfaz Intuitiva Tipo Explorador',
          descripcion: 'Acceso rápido a la información con un solo clic, visualización inmediata de registros y acciones instantáneas de crear, modificar o eliminar.'
        },
        {
          titulo: 'Búsqueda Avanzada sin Limitaciones',
          descripcion: 'Búsqueda de datos sobre prácticamente cualquier carpeta con filtros personalizables según el tipo de dato y control de visualización.'
        },
        {
          titulo: 'Informes Flexibles y Personalizables',
          descripcion: 'Diseño de reportes con filtros y ordenamiento personalizado, compatibilidad con impresoras de inyección, láser o matricial.'
        },
        {
          titulo: 'Seguridad y Auditoría Completa',
          descripcion: 'Identificación de usuarios con login local o Windows Active Directory, registro de auditoría por cada acción y seguimiento completo de cambios.'
        },
        {
          titulo: 'Copias de Seguridad Automatizadas',
          descripcion: 'Sistema de backup programable con selección de fecha, hora y medio de almacenamiento para protección de datos.'
        },
        {
          titulo: 'Archivos Históricos Consultables',
          descripcion: 'Creación de archivos históricos para depurar la base de datos actual, manteniendo capacidad de consultar como si estuviera en uso.'
        }
      ],
      caracteristicas: [
        { titulo: 'Integración Automática con Otros Módulos', descripcion: 'Generación automática de asientos desde Tesorería y otros módulos con vinculación al documento origen.' },
        { titulo: 'Control Presupuestario por Cuenta', descripcion: 'Asignación y seguimiento de presupuestos por cuenta con control de ejecución y alertas de desvíos en tiempo real.' },
        { titulo: 'Cuentas Acumuladoras', descripcion: 'Configuración de cuentas madre que acumulan movimientos de cuentas hijas para reporting consolidado.' },
        { titulo: 'Mayor Conectividad y Comunicación', descripcion: 'Envío de correos electrónicos directo desde el sistema, navegación integrada y exportación a múltiples formatos.' },
        { titulo: 'Control Total en Procesos', descripcion: 'Capacidad de cancelar cualquier proceso en ejecución (búsquedas, reportes, generaciones masivas) con un clic.' },
        { titulo: 'Importación y Exportación de Datos', descripcion: 'Importación de presupuestos desde planillas XLSX, importación de cuentas de otros planes y exportación a diversos formatos.' }
      ]
    },
    'cementerio': {
      nombre: 'Cementerio',
      subtitulo: 'Sistema integral de administración de cementerios para gestión de nichos, tumbas y servicios funerarios municipales',
      icon: 'Skull',
      imagenes: [
        { archivo: 'cementerio-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'cementerio-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'cementerio-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Gestión completa de nichos y tumbas con administración de cuentas asociadas a contribuyentes',
        'Administración de cuentas corrientes con control de movimientos y saldos',
        'Sistema de cuotas con generación automática o manual de períodos anuales',
        'Liquidación de tasas y aranceles de cementerio con configuración de plazos',
        'Gestión de expedientes para seguimiento de trámites y asignaciones',
        'Control de inhumaciones y registros catastrales del cementerio',
        'Generación de comprobantes y certificados de libre deuda',
        'Informes de deudores con ranking de morosidad',
        'Sistema de reprogramación de vencimientos de cuotas',
        'Panel de búsqueda y listados personalizados con múltiples filtros'
      ],
      beneficios: [
        {
          titulo: 'Control Administrativo Integral',
          descripcion: 'Centraliza toda la información de nichos, tumbas y panteones con sus responsables, permitiendo un seguimiento completo de cada ubicación.'
        },
        {
          titulo: 'Gestión Financiera Eficiente',
          descripcion: 'Automatiza la generación de cuotas y el control de pagos, mejorando la recaudación y reduciendo la morosidad.'
        },
        {
          titulo: 'Organización Catastral',
          descripcion: 'Mantiene un registro detallado de la ubicación física con datos de manzana, zona y observaciones catastrales.'
        },
        {
          titulo: 'Seguimiento de Obras y Reformas',
          descripcion: 'Permite controlar ejecuciones de obra para panteones o reformas de nichos con su documentación asociada.'
        },
        {
          titulo: 'Información en Tiempo Real',
          descripcion: 'Brinda acceso inmediato al estado de cuentas, historial de pagos y situación de cada servicio.'
        },
        {
          titulo: 'Documentación Automatizada',
          descripcion: 'Genera automáticamente cédulas, comprobantes y certificados necesarios para los trámites.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Permite navegar intuitivamente entre carpetas de datos con acceso directo a registros, búsquedas y listados.' },
        { titulo: 'Búsqueda Avanzada', descripcion: 'Ofrece filtros ilimitados sobre cualquier carpeta de datos con personalización de campos a visualizar.' },
        { titulo: 'Informes Personalizables', descripcion: 'Permite filtrar y ordenar información según necesidades.' },
        { titulo: 'Seguridad y Auditoría', descripcion: 'Registra cada acción de usuario con seguimiento independiente por registro, complementado con auditoría técnica.' },
        { titulo: 'Archivos Históricos', descripcion: 'Permite crear y consultar archivos históricos para depurar la base actual y agilizar operaciones.' },
        { titulo: 'Conectividad y Comunicación', descripcion: 'Integra envío de correos electrónicos directo desde el sistema y navegación web para mayor productividad.' }
      ]
    },
    'juzgado-faltas': {
      nombre: 'Juzgado de Faltas',
      subtitulo: 'Sistema integral de gestión para juzgados de faltas con control completo de actas, causas, fallos, resoluciones y cuentas corrientes',
      icon: 'Gavel',
      imagenes: [
        { archivo: 'juzgado-faltas-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'juzgado-faltas-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'juzgado-faltas-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Gestión completa de actas de infracción con documentación asociada y seguimiento de estados',
        'Administración integral de causas incluyendo estados, medidas, reparticiones y tipos de espectáculos',
        'Registro y gestión de fallos condenatorios y absolutorios con múltiples tipos de clasificación',
        'Control de resoluciones con seguimiento de clausura y secuestro',
        'Sistema de comprobantes y talonarios con generación de cuotas y cálculo automático de intereses',
        'Gestión de notificaciones de audiencias, fallos y resoluciones',
        'Control de cuenta corriente por acta con generación de intimaciones de pago y certificados de libre deuda',
        'Múltiples informes de gestión: deudores, recaudación, liquidación, índice de efectividad operativa',
        'Integración con policía federal y provincial para carga de actas',
        'Envío digital de documentación por email y pasaje automático a contabilidad'
      ],
      beneficios: [
        {
          titulo: 'Interfaz Tipo Explorador',
          descripcion: 'Acceso inmediato a toda la información con un solo clic, permitiendo crear, modificar, eliminar y copiar registros al instante sin complicaciones.'
        },
        {
          titulo: 'Búsqueda Avanzada sin Limitaciones',
          descripcion: 'Realice búsquedas sobre prácticamente cualquier carpeta con filtros personalizados, decidiendo qué datos visualizar y cómo ordenarlos según sus necesidades específicas.'
        },
        {
          titulo: 'Seguridad y Auditoría Integral',
          descripcion: 'Identificación de usuarios con login local o Windows Active Directory, más registro completo de cada acción realizada por cada usuario con auditoría técnica extensiva.'
        },
        {
          titulo: 'Informes Personalizados Flexibles',
          descripcion: 'Genere listados con filtrado y ordenamiento personalizado, con opciones de impresión en chorro de tinta, láser o matricial según sus requerimientos.'
        },
        {
          titulo: 'Archivos Históricos Optimizados',
          descripcion: 'Cree archivos históricos en cualquier momento para depurar la base de datos actual y agilizar operaciones, manteniendo la posibilidad de consultarlos como si estuvieran en la base activa.'
        },
        {
          titulo: 'Mayor Conectividad y Control',
          descripcion: 'Envíe correos electrónicos directamente desde el sistema, navegue en Internet, obtenga información en múltiples formatos y cancele cualquier proceso en ejecución cuando lo necesite.'
        }
      ],
      caracteristicas: [
        { titulo: 'Gestión Documental Completa', descripcion: 'Control de descargos, intimaciones de pago, certificados de libre deuda y testimonios con generación automática de documentación asociada a cada acta o causa.' },
        { titulo: 'Control de Entrega de Boletas', descripcion: 'Planilla de control de hoja de ruta con registro de comprobantes entregados, estadísticas por tipo de entrega y opción de reimprimir boletas de pago.' },
        { titulo: 'Sistema de Cuotas Flexible', descripcion: 'Múltiples tipos de cuota con diferentes formas de cálculo de interés, tipos de pago configurables y generación automática de planes de pago.' },
        { titulo: 'Indicadores de Gestión', descripcion: 'Índice de efectividad operativa y múltiples reportes de gestión para evaluar el desempeño del juzgado con proyecciones de recaudación y análisis de deudores.' },
        { titulo: 'Integración Contable', descripcion: 'Pasaje automático a contabilidad con acumulación de cuentas asociadas a los cobros, facilitando el control diario de caja y la conciliación contable.' },
        { titulo: 'Personalización Avanzada', descripcion: 'Sistema de parámetros configurables, administración básica de contribuyentes y cuentas, y mantenimiento de módulo para adaptar el sistema a las necesidades específicas de cada jurisdicción.' }
      ]
    },
    'compras': {
      nombre: 'Compras',
      subtitulo: 'Control y seguimiento integral de pedidos, autorizaciones, órdenes de compra, órdenes de pago, proveedores y sus cuentas corrientes',
      icon: 'ShoppingCart',
      imagenes: [
        { archivo: 'compras-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'compras-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'compras-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Gestión de Órdenes de Compra con agrupación de relaciones de pedido y control de estados',
        'Gestión de Órdenes de Pago con generación automática de vencimientos',
        'Administración de Proveedores con legajos completos y cuenta corriente',
        'Relaciones de Pedido con sistema de aprobación y control de prioridades',
        'Comprobantes de Proveedores con facturas, notas de crédito y débito',
        'Control de Cuentas Corrientes con seguimiento del estado de deuda',
        'Gestión de Remitos con asociación de archivos digitales',
        'Control de Ubicación con historial de ubicación física de comprobantes',
        'Informes y Reportes con auditoría completa',
        'Parametrización Avanzada con condiciones de pago y seguridad'
      ],
      beneficios: [
        {
          titulo: 'Centralización de Operaciones',
          descripcion: 'Unifica en un único módulo el control completo del ciclo de compras desde la solicitud hasta el pago, incluyendo gestión de proveedores y cuentas corrientes.'
        },
        {
          titulo: 'Optimización de Compras por Volumen',
          descripcion: 'Permite acumular múltiples relaciones de pedido de distintos departamentos en una misma orden de compra, mejorando la negociación con proveedores por cantidad.'
        },
        {
          titulo: 'Control Total de Estados',
          descripcion: 'Seguimiento completo de estados de órdenes (PENDIENTE, PAGADA, ANULADA, CANCELADA) con historial de ubicación física y registro de responsables.'
        },
        {
          titulo: 'Integración Documental Digital',
          descripcion: 'Asociación de archivos digitales (PDF, scans) a comprobantes, remitos y documentación para un control exhaustivo de la información.'
        },
        {
          titulo: 'Seguridad y Trazabilidad',
          descripcion: 'Auditoría completa de acciones de usuarios con registro de creación y modificación de datos, complementada con auditoría técnica del paso a paso de operadores.'
        },
        {
          titulo: 'Flexibilidad en Pagos',
          descripcion: 'Gestión de vencimientos con generación automática según condiciones de pago, soporte para múltiples formas de pago y control de saldos parciales.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Acceso intuitivo a la información con un solo clic, visualización inmediata de registros y acciones rápidas sobre cualquier registro.' },
        { titulo: 'Búsqueda de Datos Sin Limitaciones', descripcion: 'Búsqueda avanzada sobre prácticamente cualquier carpeta con filtros personalizables según tipo de dato y posibilidad de seleccionar qué datos visualizar.' },
        { titulo: 'Informes y Listados Personalizados', descripcion: 'Generación de reportes con selección de tipo de impresora, filtrado y ordenamiento flexible de la información.' },
        { titulo: 'Integración con Active Directory', descripcion: 'Soporte para login local o login de Windows basado en Active Directory de Azure para cumplir con políticas "one login for all".' },
        { titulo: 'Archivos Históricos', descripcion: 'Creación de archivos históricos en cualquier momento para depurar la base de datos actual y agilizar operaciones, con consulta posterior.' },
        { titulo: 'Control de Procesos', descripcion: 'Capacidad de cancelar cualquier proceso una vez iniciado y sistema de copias de seguridad automatizado.' }
      ]
    },
    'obras-publicas': {
      nombre: 'Obras Públicas',
      subtitulo: 'Gestión integral de obras públicas con control de stock, planificación de obras y atención de reclamos',
      icon: 'HardHat',
      imagenes: [
        { archivo: 'obras-publicas-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'obras-publicas-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'obras-publicas-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Control completo de stock de materiales con alertas de reposición automática',
        'Gestión de catálogo de materiales con códigos de barra y clasificación',
        'Planificación de obras en múltiples fases con asignación de recursos',
        'Cronogramas diarios de actividades con diferentes tipos de tareas',
        'Sistema de reclamos de contribuyentes con seguimiento completo',
        'Movimientos de stock asociados a reclamos, obras y pedidos',
        'Relaciones de pedido para solicitar materiales al departamento de compras',
        'Gestión de depósitos con control de ubicación de materiales',
        'Informes personalizados de saldos, movimientos y planes de obra',
        'Auditoría completa de operaciones con trazabilidad de usuarios'
      ],
      beneficios: [
        {
          titulo: 'Optimización de Recursos',
          descripcion: 'Control automático de stock mínimo, máximo y punto de pedido para evitar faltantes o sobrestock.'
        },
        {
          titulo: 'Trazabilidad Total',
          descripcion: 'Seguimiento completo de cada material desde su ingreso hasta su uso en obras o reclamos.'
        },
        {
          titulo: 'Gestión Eficiente de Reclamos',
          descripcion: 'Atención organizada de reclamos con priorización, asignación de recursos y seguimiento.'
        },
        {
          titulo: 'Planificación Estructurada',
          descripcion: 'Organización de obras en fases con asignación de materiales, tiempos y responsables.'
        },
        {
          titulo: 'Visibilidad Integral',
          descripcion: 'Cronogramas diarios que unifican reclamos, fases de obra y tareas generales.'
        },
        {
          titulo: 'Control de Gestión',
          descripcion: 'Auditoría técnica y administrativa con identificación de usuarios y permisos configurables.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Explorador', descripcion: 'Acceso intuitivo a toda la información con un solo clic, permitiendo visualizar y actuar inmediatamente sobre cualquier registro.' },
        { titulo: 'Búsqueda Avanzada', descripcion: 'Búsqueda sin limitaciones con filtros personalizables según tipo de dato y visualización selectiva de resultados.' },
        { titulo: 'Informes Flexibles', descripcion: 'Listados personalizables con opciones de filtro y ordenamiento.' },
        { titulo: 'Seguridad Integrada', descripcion: 'Login local o Windows (Active Directory Azure) con configuración de permisos por usuario.' },
        { titulo: 'Archivos Históricos', descripcion: 'Capacidad de generar archivos históricos para depurar base de datos y agilizar operaciones.' },
        { titulo: 'Conectividad Total', descripcion: 'Envío de correos electrónicos, navegación web y conversión de información a múltiples formatos.' }
      ]
    },
    'ccv': {
      nombre: 'CCV - Cuentas Corrientes Varias',
      subtitulo: 'Sistema integral de gestión de cuentas corrientes para municipalidades con generación de cuotas, comprobantes y recaudación',
      icon: 'Server',
      imagenes: [
        { archivo: 'ccv-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'ccv-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'ccv-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Gestión completa de cuentas corrientes con materiales, conceptos o valores monetarios',
        'Generación automática y manual de cuotas con cálculo de intereses',
        'Emisión de comprobantes individuales y masivos con múltiples opciones',
        'Anulación de comprobantes con validaciones de estado y control',
        'Reimpresión de comprobantes con previsualización y PDF',
        'Gestión de distribución domiciliaria con hojas de ruta',
        'Informes financieros integrales: cuenta corriente, recaudación, liquidación',
        'Transferencia de cuentas entre contribuyentes',
        'Envío digital de documentación por email',
        'Pasaje a contabilidad de operaciones con asiento automático'
      ],
      beneficios: [
        {
          titulo: 'Control Total de la Recaudación Municipal',
          descripcion: 'Centraliza la gestión de todas las cuentas corrientes variadas del municipio con seguimiento completo de deudas, pagos y estados de cuentas por contribuyente.'
        },
        {
          titulo: 'Automatización de Procesos Masivos',
          descripcion: 'Genera automáticamente cuotas anuales, boletas de pago para distribución y documentación digital, reduciendo tiempos operativos y errores manuales.'
        },
        {
          titulo: 'Flexibilidad en la Emisión de Comprobantes',
          descripcion: 'Permite emitir comprobantes manuales o masivos con múltiples opciones de impresión, exportación a PDF y previsualización.'
        },
        {
          titulo: 'Integración con Otros Sistemas Municipales',
          descripcion: 'Se conecta con Tesorería para recaudación, Contabilidad para asientos automáticos, Convenios y Juicios para certificados de deuda.'
        },
        {
          titulo: 'Información Financiera Completa y Actualizada',
          descripcion: 'Brinda informes detallados de recaudación, liquidación, deudores, ranking de morosos y proyecciones para toma de decisiones.'
        },
        {
          titulo: 'Seguridad y Auditoría de Operaciones',
          descripcion: 'Registra cada acción realizada por usuario con auditoría básica por registro y técnica paso a paso, garantizando trazabilidad completa.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador Intuitiva', descripcion: 'Permite acceder a la información de cualquier carpeta de datos con un solo clic y actuar inmediatamente sobre cualquier registro.' },
        { titulo: 'Búsqueda Avanzada de Datos', descripcion: 'Realiza búsquedas sobre prácticamente cualquier carpeta sin limitaciones, con filtros por tipo de dato y personalización de campos visibles.' },
        { titulo: 'Informes y Listados Personalizables', descripcion: 'Permite decidir el tipo de impresora, filtrar y ordenar la información según necesidades específicas, con exportación a múltiples formatos.' },
        { titulo: 'Seguridad y Auditoría Integral', descripcion: 'Identificación de usuarios con login local o Windows, configuración de permisos, registro de auditoría por cada campo modificado.' },
        { titulo: 'Archivos Históricos y Copias de Seguridad', descripcion: 'Crea archivos históricos para depurar base de datos actual manteniendo accesibilidad, con sistema automatizado de copias de seguridad.' },
        { titulo: 'Mayor Conectividad y Control de Procesos', descripcion: 'Envía correos electrónicos, navega en Internet, convierte información a cualquier formato, y permite cancelar cualquier proceso.' }
      ]
    },
    'gip': {
      nombre: 'GIP - Gestión de Convenios y Juicios',
      subtitulo: 'Módulo integral para la administración de convenios de pago y juicios con gestión completa de cuentas corrientes, cuotas y cobranzas',
      icon: 'Folder',
      imagenes: [
        { archivo: 'convenios-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'convenios-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'convenios-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Gestión completa de convenios administrativos y judiciales',
        'Administración de cuentas corrientes de convenios y juicios',
        'Generación de cuotas automáticas con cálculo de intereses',
        'Emisión y gestión de comprobantes de pago',
        'Generación masiva de boletas de pago para distribución',
        'Control de entrega de boletas con asignación a repartidores',
        'Anulación de comprobantes, convenios y juicios con auditoría',
        'Generación de certificados de deuda e informes de recaudación',
        'Pasaje de datos a contabilidad y archivos históricos',
        'Envío digital de documentación por correo electrónico'
      ],
      beneficios: [
        {
          titulo: 'Recuperación de Cartera Morosa',
          descripcion: 'Permite formalizar acuerdos de pago con contribuyentes en mora avanzada mediante convenios administrativos o juicios, facilitando la recuperación de deudas.'
        },
        {
          titulo: 'Control Total de la Gestión',
          descripcion: 'Ofrece visión completa de todas las cuentas, cuotas, pagos y saldos con auditoría de cada operación realizada.'
        },
        {
          titulo: 'Automatización de Procesos',
          descripcion: 'Genera automáticamente las cuotas de los planes de pago con cálculo de intereses según parámetros configurables.'
        },
        {
          titulo: 'Flexibilidad en la Cobranza',
          descripcion: 'Permite aplicar descuentos, congelar intereses, reasignar pagos entre cuotas, y gestionar situaciones especiales.'
        },
        {
          titulo: 'Eficiencia Operativa',
          descripcion: 'Optimiza la distribución de boletas mediante repartidores y hojas de ruta, controla las entregas y genera informes de gestión.'
        },
        {
          titulo: 'Integración y Seguridad',
          descripcion: 'Se integra con sistemas contables, permite enviar documentación por correo, mantiene archivos históricos y garantiza la seguridad.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Permite acceder a la información con un solo clic y actuar inmediatamente sobre cualquier registro.' },
        { titulo: 'Búsqueda Avanzada de Datos', descripcion: 'Busca sobre prácticamente cualquier carpeta sin limitaciones, con filtros por tipo de dato y personalización de visualización.' },
        { titulo: 'Informes Personalizados', descripcion: 'Genera más de 15 tipos de informes con filtros y ordenación personalizable.' },
        { titulo: 'Seguridad y Auditoría Integral', descripcion: 'Identifica usuarios con login local o Windows, configura permisos, registra cada acción y mantiene auditoría técnica completa.' },
        { titulo: 'Copias de Seguridad Automáticas', descripcion: 'Sistema de backup totalmente automatizado que permite programar fecha, hora y medio de almacenamiento.' },
        { titulo: 'Conectividad y Control de Procesos', descripcion: 'Permite enviar correos, navegar en Internet, exportar a cualquier formato y cancelar cualquier proceso.' }
      ]
    },
    'tap': {
      nombre: 'TAP - Tasa Alumbrado Público',
      subtitulo: 'Sistema integral de administración de tasas de alumbrado público con gestión completa de cuentas corrientes, recaudación y emisión de comprobantes',
      icon: 'FileSignature',
      imagenes: [
        { archivo: 'alumbrado-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'alumbrado-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'alumbrado-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Administración básica integral con búsqueda por CUIT y datos de cuenta',
        'Gestión completa de inmuebles (adremas) con cuentas corrientes',
        'Generación masiva de cuotas anuales con configuración flexible',
        'Emisión de comprobantes manuales y masivos con múltiples talonarios',
        'Generación de boletas de pago para distribución domiciliaria',
        'Informes de cuenta corriente detallados con estado de deuda',
        'Liquidación y recaudación con informes de cobranza',
        'Gestión de tipos de cuota con configuración de intereses',
        'Planes de descuento para deudores con simulación de pagos',
        'Anulación y reimpresión de comprobantes con control'
      ],
      beneficios: [
        {
          titulo: 'Interfaz Tipo Explorador Intuitiva',
          descripcion: 'Acceda a la información de cualquier archivo de datos con un solo clic y actúe inmediatamente sobre cualquier registro.'
        },
        {
          titulo: 'Búsqueda de Datos Ilimitada',
          descripcion: 'Realice búsquedas sobre prácticamente cualquier carpeta sin limitaciones, con filtros avanzados y personalización de campos.'
        },
        {
          titulo: 'Informes y Listados Personalizados',
          descripcion: 'Decida sobre qué tipo de impresora imprimir, filtre y ordene la información como desee, con opciones de previsualización y PDF.'
        },
        {
          titulo: 'Seguridad y Auditoría Completa',
          descripcion: 'Identificación de usuarios con configuración de permisos, login local o Windows, registro de auditoría por cada acción.'
        },
        {
          titulo: 'Copias de Seguridad Automatizadas',
          descripcion: 'Sistema aparte de copia de seguridad totalmente automatizado que permite programar fecha, hora y medio para respaldos.'
        },
        {
          titulo: 'Archivos Históricos Consultables',
          descripcion: 'Cree archivos históricos para depurar la base de datos actual y agilizar operaciones, manteniendo la posibilidad de consultarlos.'
        }
      ],
      caracteristicas: [
        { titulo: 'Integración Completa con Módulo CATASTRO', descripcion: 'Los inmuebles (adremas) se administran desde CATASTRO con sincronización automática de datos catastrales.' },
        { titulo: 'Flexibilidad en Talonarios y Comprobantes', descripcion: 'Cree tantos talonarios como necesite con múltiples impuestos asociados, plantillas y cuentas contables específicas.' },
        { titulo: 'Parametrización Avanzada del Sistema', descripcion: 'Configure cantidad de cuotas por año, fechas de vencimiento, forma de recaudación y descuentos máximos permitidos.' },
        { titulo: 'Gestión Integral de Contribuyentes', descripcion: 'Visualice datos completos de contribuyentes, grilla de adremas asociados con deuda y estadísticas del contribuyente.' },
        { titulo: 'Control Total en Procesos', descripcion: 'Cancele cualquier proceso una vez iniciado con control completo sobre las operaciones del sistema.' },
        { titulo: 'Mayor Conectividad y Productividad', descripcion: 'Envíe correos electrónicos, navegue en Internet, obtenga información convertida a cualquier formato con integración contable.' }
      ]
    },
    'thps': {
      nombre: 'Tasa Higiene, Profilaxis y Seguridad',
      subtitulo: 'Sistema de gestión integral de tasas de salubridad para comercios',
      icon: 'IdCard',
      imagenes: [
        { archivo: 'thps-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'thps-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'thps-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Administración básica de cuentas y comercios con búsqueda por CUIT, nombre y otros datos',
        'Generación automática y manual de cuotas para tasas de higiene, profilaxis y seguridad',
        'Gestión completa de comprobantes con talonarios numerados y tipos de cuota configurables',
        'Anulación de comprobantes pagados con control de numeración',
        'Generación de boletas de pago para distribución masiva',
        'Control de entrega con hojas de ruta y sistema de repartidores',
        'Gestión de contribuyentes, cuentas y actividades comerciales',
        'Sistema de reprogramación de vencimientos',
        'Pasaje de datos a contabilidad para integración financiera',
        'Envío digital de documentación a contribuyentes'
      ],
      beneficios: [
        {
          titulo: 'Centralización de Información',
          descripcion: 'Gestión integral de comercios y contribuyentes con seguimiento completo de cuentas corrientes.'
        },
        {
          titulo: 'Automatización de Procesos',
          descripcion: 'Generación automática de cuotas y comprobantes reduciendo tiempos administrativos.'
        },
        {
          titulo: 'Control y Auditoría',
          descripcion: 'Auditoría básica y técnica que registra cada acción realizada por usuario con fecha y hora.'
        },
        {
          titulo: 'Distribución Optimizada',
          descripcion: 'Sistema de repartidores con hojas de ruta y control de entrega de boletas.'
        },
        {
          titulo: 'Integración Financiera',
          descripcion: 'Pasaje directo a contabilidad y múltiples informes financieros y de recaudación.'
        },
        {
          titulo: 'Seguridad de Datos',
          descripcion: 'Archivos históricos, copias de seguridad automatizadas y control de accesos.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Acceso intuitivo a información con un clic, visualización inmediata y acciones rápidas.' },
        { titulo: 'Búsqueda Avanzada', descripcion: 'Búsquedas sin limitaciones con filtros personalizables por tipo de dato.' },
        { titulo: 'Informes Personalizados', descripcion: 'Exportación a múltiples formatos, filtrado y ordenación flexible con soporte para impresoras matriciales, láser e inyección.' },
        { titulo: 'Seguridad Multicapa', descripcion: 'Login local o integración con Windows Active Directory, auditoría por registro con propiedades accesibles.' },
        { titulo: 'Archivos Históricos', descripcion: 'Creación y consulta de archivos históricos para depurar base de datos y agilizar operaciones.' },
        { titulo: 'Mayor Conectividad', descripcion: 'Envío de emails directamente desde el sistema, navegación web integrada y conversión de documentos.' }
      ]
    },
    'tyc': {
      nombre: 'TyC - Transporte y Carnet',
      subtitulo: 'Sistema de administración de carnets de conducir, vencimientos y comprobantes',
      icon: 'Droplets',
      imagenes: [
        { archivo: 'transporte-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'transporte-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'transporte-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Administración integral de carnets de conducir con control de vencimientos',
        'Emisión y gestión de comprobantes con numeración automática vía talonarios',
        'Gestión completa de contribuyentes con datos personales y categorización',
        'Sistema de parámetros configurables para control de descuentos máximos permitidos',
        'Informes de liquidación y recaudación con filtrado por talonarios y períodos',
        'Generación de parte diario de carnets emitidos por fecha',
        'Control de vencimientos de carnets con reportes de vencidos/a vencer',
        'Anulación de comprobantes pagados con reasignación de pagos',
        'Auditoría completa de operaciones con registro de cambios por usuario',
        'Pasaje a contabilidad para integración con sistemas financieros'
      ],
      beneficios: [
        {
          titulo: 'Control Total de Vencimientos',
          descripcion: 'Gestión automatizada de fechas de vencimiento de carnets con alertas y reportes de carnets vencidos o próximos a vencer, permitiendo renovaciones oportunas.'
        },
        {
          titulo: 'Seguridad y Trazabilidad',
          descripcion: 'Auditoría completa que registra quién creó o modificó cada registro, con configuración de permisos de usuarios y opciones de login local o Windows Active Directory.'
        },
        {
          titulo: 'Flexibilidad Operativa',
          descripcion: 'Permite trabajar de forma centralizada o descentralizada por departamentos, con opciones de reasignación de pagos entre períodos contables según configuración.'
        },
        {
          titulo: 'Informes Completos',
          descripcion: 'Amplia variedad de reportes incluyendo liquidación, recaudación, parte diario, auditoría y más, con opciones de filtrado y exportación a múltiples formatos.'
        },
        {
          titulo: 'Eficiencia Administrativa',
          descripcion: 'Interfaz tipo explorador que permite acceder y operar sobre cualquier registro con un solo clic, con búsquedas avanzadas sin limitaciones y personalización de filtros.'
        },
        {
          titulo: 'Integración y Conectividad',
          descripcion: 'Capacidad de enviar correos electrónicos automáticos, navegar en Internet, exportar información a cualquier formato y mantener archivos históricos consultables.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Panel de carpetas organizado que permite acceso inmediato a Carnets, Comprobantes, Contribuyentes y Auxiliares, con visualización y acción directa sobre registros.' },
        { titulo: 'Sistema de Búsqueda Avanzado', descripcion: 'Búsquedas sin limitaciones sobre prácticamente cualquier carpeta, con filtros configurables por tipo de dato y selección personalizada de campos a visualizar.' },
        { titulo: 'Gestión de Talonarios', descripcion: 'Control completo de numeración de comprobantes con verificación automática de secuencia y corrección de numeración cuando sea necesario.' },
        { titulo: 'Copias de Seguridad Automatizadas', descripcion: 'Sistema independiente de backup totalmente automatizado que permite programar fecha, hora y medio de almacenamiento de las copias de seguridad.' },
        { titulo: 'Archivos Históricos Consultables', descripcion: 'Posibilidad de crear archivos históricos para depurar la base de datos actual, agilizar operaciones, y consultar datos históricos como si estuvieran en la base activa.' },
        { titulo: 'Control de Procesos en Tiempo Real', descripcion: 'Capacidad de cancelar cualquier proceso una vez iniciado (búsquedas, reportes, generaciones masivas de datos), brindando control total sobre las operaciones del sistema.' }
      ]
    },
    'tys': {
      nombre: 'TyS - Tasas y Servicios',
      subtitulo: 'Gestión integral de tasas y servicios municipales con administración de cuentas corrientes de inmuebles',
      icon: 'Lightbulb',
      imagenes: [
        { archivo: 'tys-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'tys-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'tys-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Administración de cuentas corrientes asociadas a inmuebles (adremas) y sus contribuyentes',
        'Generación automática y manual de cuotas anuales con configuración de fechas de vencimiento',
        'Emisión de comprobantes de pago con cálculo automático de intereses y descuentos',
        'Gestión de talonarios con numeración correlativa y control de impresión',
        'Generación masiva de boletas de pago para distribución domiciliaria',
        'Control de entrega con planillas de ruta y registro de repartidores',
        'Informes de cuenta corriente, deudores, recaudación y liquidación',
        'Anulación de comprobantes pagados con reasignación de pagos entre periodos',
        'Pasaje a contabilidad de las operaciones realizadas',
        'Envío digital de documentación por correo electrónico'
      ],
      beneficios: [
        {
          titulo: 'Centralización de Información',
          descripcion: 'Almacena todas las cuentas corrientes asociadas a inmuebles definidas desde el módulo CATASTRO, integrando datos de contribuyentes y propiedades.'
        },
        {
          titulo: 'Automatización de Procesos',
          descripcion: 'Genera automáticamente cuotas anuales para todos los inmuebles con fechas de vencimiento configurables, optimizando el presupuesto de recaudación.'
        },
        {
          titulo: 'Control de Distribución',
          descripcion: 'Permite la distribución domiciliaria de comprobantes mediante hojas de ruta, con control de entrega y estadísticas de distribución.'
        },
        {
          titulo: 'Flexibilidad en la Recaudación',
          descripcion: 'Permite trabajar de forma centralizada o descentralizada, con reasignación de pagos entre distintos periodos contables según las necesidades.'
        },
        {
          titulo: 'Información Completa y Actualizada',
          descripcion: 'Cuenta con informes prediseñados que cubren la mayoría de los requerimientos para la administración de tasas y servicios, incluyendo estado de deuda y ranking de deudores.'
        },
        {
          titulo: 'Integración con Otros Módulos',
          descripcion: 'Se integra con el módulo CATASTRO para datos de inmuebles, con TESORERÍA para recaudación y con CONTABILIDAD para el pasaje de operaciones.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Permite acceder a la información con un solo clic, visualizar registros existentes e inmediatamente actuar (crear, modificar, eliminar, copiar) sobre cualquiera de ellos.' },
        { titulo: 'Búsqueda Avanzada de Datos', descripcion: 'Búsqueda sobre prácticamente cualquier carpeta sin limitaciones, con filtros aplicables por tipo de dato y personalización de campos a visualizar.' },
        { titulo: 'Seguridad y Auditoría de Datos', descripcion: 'Identificación de usuarios con login local o Windows (Active Directory Azure), configuración de permisos y registro de cada acción creada o modificada con auditoría por registro y técnica.' },
        { titulo: 'Informes y Listados Personalizados', descripcion: 'Permite decidir sobre qué tipo de impresora imprimir (chorro de tinta, láser o matricial), filtrar y ordenar la información según necesidades específicas.' },
        { titulo: 'Archivos Históricos', descripcion: 'Posibilidad de crear archivos históricos en cualquier momento para depurar la base de datos actual y agilizar operaciones, manteniendo la capacidad de consultarlos como si estuvieran en la base actual.' },
        { titulo: 'Copias de Seguridad Automatizadas', descripcion: 'Sistema aparte de copia de seguridad totalmente automatizado que permite programar fecha, hora y medio para las copias de seguridad de los datos.' }
      ]
    },
    'tasas-servicios': {
      nombre: 'Tasas y Servicios',
      subtitulo: 'Gestión integral de tasas y servicios municipales con administración de cuentas corrientes de inmuebles',
      icon: 'Lightbulb',
      imagenes: [
        { archivo: 'tys-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'tys-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'tys-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Administración de cuentas corrientes asociadas a inmuebles (adremas) y sus contribuyentes',
        'Generación automática y manual de cuotas anuales con configuración de fechas de vencimiento',
        'Emisión de comprobantes de pago con cálculo automático de intereses y descuentos',
        'Gestión de talonarios con numeración correlativa y control de impresión',
        'Generación masiva de boletas de pago para distribución domiciliaria',
        'Control de entrega con planillas de ruta y registro de repartidores',
        'Informes de cuenta corriente, deudores, recaudación y liquidación',
        'Anulación de comprobantes pagados con reasignación de pagos entre periodos',
        'Pasaje a contabilidad de las operaciones realizadas',
        'Envío digital de documentación por correo electrónico'
      ],
      beneficios: [
        {
          titulo: 'Centralización de Información',
          descripcion: 'Almacena todas las cuentas corrientes asociadas a inmuebles definidas desde el módulo CATASTRO, integrando datos de contribuyentes y propiedades.'
        },
        {
          titulo: 'Automatización de Procesos',
          descripcion: 'Genera automáticamente cuotas anuales para todos los inmuebles con fechas de vencimiento configurables, optimizando el presupuesto de recaudación.'
        },
        {
          titulo: 'Control de Distribución',
          descripcion: 'Permite la distribución domiciliaria de comprobantes mediante hojas de ruta, con control de entrega y estadísticas de distribución.'
        },
        {
          titulo: 'Flexibilidad en la Recaudación',
          descripcion: 'Permite trabajar de forma centralizada o descentralizada, con reasignación de pagos entre distintos periodos contables según las necesidades.'
        },
        {
          titulo: 'Información Completa y Actualizada',
          descripcion: 'Cuenta con informes prediseñados que cubren la mayoría de los requerimientos para la administración de tasas y servicios, incluyendo estado de deuda y ranking de deudores.'
        },
        {
          titulo: 'Integración con Otros Módulos',
          descripcion: 'Se integra con el módulo CATASTRO para datos de inmuebles, con TESORERÍA para recaudación y con CONTABILIDAD para el pasaje de operaciones.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Permite acceder a la información con un solo clic, visualizar registros existentes e inmediatamente actuar (crear, modificar, eliminar, copiar) sobre cualquiera de ellos.' },
        { titulo: 'Búsqueda Avanzada de Datos', descripcion: 'Búsqueda sobre prácticamente cualquier carpeta sin limitaciones, con filtros aplicables por tipo de dato y personalización de campos a visualizar.' },
        { titulo: 'Seguridad y Auditoría de Datos', descripcion: 'Identificación de usuarios con login local o Windows (Active Directory Azure), configuración de permisos y registro de cada acción creada o modificada con auditoría por registro y técnica.' },
        { titulo: 'Informes y Listados Personalizados', descripcion: 'Permite decidir sobre qué tipo de impresora imprimir (chorro de tinta, láser o matricial), filtrar y ordenar la información según necesidades específicas.' },
        { titulo: 'Archivos Históricos', descripcion: 'Posibilidad de crear archivos históricos en cualquier momento para depurar la base de datos actual y agilizar operaciones, manteniendo la capacidad de consultarlos como si estuvieran en la base actual.' },
        { titulo: 'Copias de Seguridad Automatizadas', descripcion: 'Sistema aparte de copia de seguridad totalmente automatizado que permite programar fecha, hora y medio para las copias de seguridad de los datos.' }
      ]
    },
    'alumbrado-publico': {
      nombre: 'Tasa Alumbrado Público',
      subtitulo: 'Sistema integral de administración de tasas de alumbrado público con gestión completa de cuentas corrientes, recaudación y emisión de comprobantes',
      icon: 'FileSignature',
      imagenes: [
        { archivo: 'alumbrado-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'alumbrado-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'alumbrado-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Administración básica integral con búsqueda por CUIT y datos de cuenta',
        'Gestión completa de inmuebles (adremas) con cuentas corrientes',
        'Generación masiva de cuotas anuales con configuración flexible',
        'Emisión de comprobantes manuales y masivos con múltiples talonarios',
        'Generación de boletas de pago para distribución domiciliaria',
        'Informes de cuenta corriente detallados con estado de deuda',
        'Liquidación y recaudación con informes de cobranza',
        'Gestión de tipos de cuota con configuración de intereses',
        'Planes de descuento para deudores con simulación de pagos',
        'Anulación y reimpresión de comprobantes con control'
      ],
      beneficios: [
        {
          titulo: 'Interfaz Tipo Explorador Intuitiva',
          descripcion: 'Acceda a la información de cualquier archivo de datos con un solo clic y actúe inmediatamente sobre cualquier registro.'
        },
        {
          titulo: 'Búsqueda de Datos Ilimitada',
          descripcion: 'Realice búsquedas sobre prácticamente cualquier carpeta sin limitaciones, con filtros avanzados y personalización de campos.'
        },
        {
          titulo: 'Informes y Listados Personalizados',
          descripcion: 'Decida sobre qué tipo de impresora imprimir, filtre y ordene la información como desee, con opciones de previsualización y PDF.'
        },
        {
          titulo: 'Seguridad y Auditoría Completa',
          descripcion: 'Identificación de usuarios con configuración de permisos, login local o Windows, registro de auditoría por cada acción.'
        },
        {
          titulo: 'Copias de Seguridad Automatizadas',
          descripcion: 'Sistema aparte de copia de seguridad totalmente automatizado que permite programar fecha, hora y medio para respaldos.'
        },
        {
          titulo: 'Archivos Históricos Consultables',
          descripcion: 'Cree archivos históricos para depurar la base de datos actual y agilizar operaciones, manteniendo la posibilidad de consultarlos.'
        }
      ],
      caracteristicas: [
        { titulo: 'Integración Completa con Módulo CATASTRO', descripcion: 'Los inmuebles (adremas) se administran desde CATASTRO con sincronización automática de datos catastrales.' },
        { titulo: 'Flexibilidad en Talonarios y Comprobantes', descripcion: 'Cree tantos talonarios como necesite con múltiples impuestos asociados, plantillas y cuentas contables específicas.' },
        { titulo: 'Parametrización Avanzada del Sistema', descripcion: 'Configure cantidad de cuotas por año, fechas de vencimiento, forma de recaudación y descuentos máximos permitidos.' },
        { titulo: 'Gestión Integral de Contribuyentes', descripcion: 'Visualice datos completos de contribuyentes, grilla de adremas asociados con deuda y estadísticas del contribuyente.' },
        { titulo: 'Control Total en Procesos', descripcion: 'Cancele cualquier proceso una vez iniciado con control completo sobre las operaciones del sistema.' },
        { titulo: 'Mayor Conectividad y Productividad', descripcion: 'Envíe correos electrónicos, navegue en Internet, obtenga información convertida a cualquier formato con integración contable.' }
      ]
    },
    'transporte-carnet': {
      nombre: 'Transporte y Carnet',
      subtitulo: 'Sistema de administración de carnets de conducir, vencimientos y comprobantes',
      icon: 'IdCard',
      imagenes: [
        { archivo: 'transporte-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'transporte-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'transporte-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Administración integral de carnets de conducir con control de vencimientos',
        'Emisión y gestión de comprobantes con numeración automática vía talonarios',
        'Gestión completa de contribuyentes con datos personales y categorización',
        'Sistema de parámetros configurables para control de descuentos máximos permitidos',
        'Informes de liquidación y recaudación con filtrado por talonarios y períodos',
        'Generación de parte diario de carnets emitidos por fecha',
        'Control de vencimientos de carnets con reportes de vencidos/a vencer',
        'Anulación de comprobantes pagados con reasignación de pagos',
        'Auditoría completa de operaciones con registro de cambios por usuario',
        'Pasaje a contabilidad para integración con sistemas financieros'
      ],
      beneficios: [
        {
          titulo: 'Control Total de Vencimientos',
          descripcion: 'Gestión automatizada de fechas de vencimiento de carnets con alertas y reportes de carnets vencidos o próximos a vencer, permitiendo renovaciones oportunas.'
        },
        {
          titulo: 'Seguridad y Trazabilidad',
          descripcion: 'Auditoría completa que registra quién creó o modificó cada registro, con configuración de permisos de usuarios y opciones de login local o Windows Active Directory.'
        },
        {
          titulo: 'Flexibilidad Operativa',
          descripcion: 'Permite trabajar de forma centralizada o descentralizada por departamentos, con opciones de reasignación de pagos entre períodos contables según configuración.'
        },
        {
          titulo: 'Informes Completos',
          descripcion: 'Amplia variedad de reportes incluyendo liquidación, recaudación, parte diario, auditoría y más, con opciones de filtrado y exportación a múltiples formatos.'
        },
        {
          titulo: 'Eficiencia Administrativa',
          descripcion: 'Interfaz tipo explorador que permite acceder y operar sobre cualquier registro con un solo clic, con búsquedas avanzadas sin limitaciones y personalización de filtros.'
        },
        {
          titulo: 'Integración y Conectividad',
          descripcion: 'Capacidad de enviar correos electrónicos automáticos, navegar en Internet, exportar información a cualquier formato y mantener archivos históricos consultables.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Panel de carpetas organizado que permite acceso inmediato a Carnets, Comprobantes, Contribuyentes y Auxiliares, con visualización y acción directa sobre registros.' },
        { titulo: 'Sistema de Búsqueda Avanzado', descripcion: 'Búsquedas sin limitaciones sobre prácticamente cualquier carpeta, con filtros configurables por tipo de dato y selección personalizada de campos a visualizar.' },
        { titulo: 'Gestión de Talonarios', descripcion: 'Control completo de numeración de comprobantes con verificación automática de secuencia y corrección de numeración cuando sea necesario.' },
        { titulo: 'Copias de Seguridad Automatizadas', descripcion: 'Sistema independiente de backup totalmente automatizado que permite programar fecha, hora y medio de almacenamiento de las copias de seguridad.' },
        { titulo: 'Archivos Históricos Consultables', descripcion: 'Posibilidad de crear archivos históricos para depurar la base de datos actual, agilizar operaciones, y consultar datos históricos como si estuvieran en la base activa.' },
        { titulo: 'Control de Procesos en Tiempo Real', descripcion: 'Capacidad de cancelar cualquier proceso una vez iniciado (búsquedas, reportes, generaciones masivas de datos), brindando control total sobre las operaciones del sistema.' }
      ]
    },
    'convenios-juicios': {
      nombre: 'Convenios y Juicios',
      subtitulo: 'Módulo integral para la administración de convenios de pago y juicios con gestión completa de cuentas corrientes, cuotas y cobranzas',
      icon: 'FileSignature',
      imagenes: [
        { archivo: 'convenios-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'convenios-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'convenios-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Gestión completa de convenios administrativos y judiciales',
        'Administración de cuentas corrientes de convenios y juicios',
        'Generación de cuotas automáticas con cálculo de intereses',
        'Emisión y gestión de comprobantes de pago',
        'Generación masiva de boletas de pago para distribución',
        'Control de entrega de boletas con asignación a repartidores',
        'Anulación de comprobantes, convenios y juicios con auditoría',
        'Generación de certificados de deuda e informes de recaudación',
        'Pasaje de datos a contabilidad y archivos históricos',
        'Envío digital de documentación por correo electrónico'
      ],
      beneficios: [
        {
          titulo: 'Recuperación de Cartera Morosa',
          descripcion: 'Permite formalizar acuerdos de pago con contribuyentes en mora avanzada mediante convenios administrativos o juicios, facilitando la recuperación de deudas.'
        },
        {
          titulo: 'Control Total de la Gestión',
          descripcion: 'Ofrece visión completa de todas las cuentas, cuotas, pagos y saldos con auditoría de cada operación realizada.'
        },
        {
          titulo: 'Automatización de Procesos',
          descripcion: 'Genera automáticamente las cuotas de los planes de pago con cálculo de intereses según parámetros configurables.'
        },
        {
          titulo: 'Flexibilidad en la Cobranza',
          descripcion: 'Permite aplicar descuentos, congelar intereses, reasignar pagos entre cuotas, y gestionar situaciones especiales.'
        },
        {
          titulo: 'Eficiencia Operativa',
          descripcion: 'Optimiza la distribución de boletas mediante repartidores y hojas de ruta, controla las entregas y genera informes de gestión.'
        },
        {
          titulo: 'Integración y Seguridad',
          descripcion: 'Se integra con sistemas contables, permite enviar documentación por correo, mantiene archivos históricos y garantiza la seguridad.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Permite acceder a la información con un solo clic y actuar inmediatamente sobre cualquier registro.' },
        { titulo: 'Búsqueda Avanzada de Datos', descripcion: 'Busca sobre prácticamente cualquier carpeta sin limitaciones, con filtros por tipo de dato y personalización de visualización.' },
        { titulo: 'Informes Personalizados', descripcion: 'Genera más de 15 tipos de informes con filtros y ordenación personalizable.' },
        { titulo: 'Seguridad y Auditoría Integral', descripcion: 'Identifica usuarios con login local o Windows, configura permisos, registra cada acción y mantiene auditoría técnica completa.' },
        { titulo: 'Copias de Seguridad Automáticas', descripcion: 'Sistema de backup totalmente automatizado que permite programar fecha, hora y medio de almacenamiento.' },
        { titulo: 'Conectividad y Control de Procesos', descripcion: 'Permite enviar correos, navegar en Internet, exportar a cualquier formato y cancelar cualquier proceso.' }
      ]
    },
    'cuentas-corrientes': {
      nombre: 'CCV - Cuentas Corrientes Varias',
      subtitulo: 'Sistema integral de gestión de cuentas corrientes para municipalidades con generación de cuotas, comprobantes y recaudación',
      icon: 'Folder',
      imagenes: [
        { archivo: 'ccv-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'ccv-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'ccv-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Gestión completa de cuentas corrientes con materiales, conceptos o valores monetarios',
        'Generación automática y manual de cuotas con cálculo de intereses',
        'Emisión de comprobantes individuales y masivos con múltiples opciones',
        'Anulación de comprobantes con validaciones de estado y control',
        'Reimpresión de comprobantes con previsualización y PDF',
        'Gestión de distribución domiciliaria con hojas de ruta',
        'Informes financieros integrales: cuenta corriente, recaudación, liquidación',
        'Transferencia de cuentas entre contribuyentes',
        'Envío digital de documentación por email',
        'Pasaje a contabilidad de operaciones con asiento automático'
      ],
      beneficios: [
        {
          titulo: 'Control Total de la Recaudación Municipal',
          descripcion: 'Centraliza la gestión de todas las cuentas corrientes variadas del municipio con seguimiento completo de deudas, pagos y estados de cuentas por contribuyente.'
        },
        {
          titulo: 'Automatización de Procesos Masivos',
          descripcion: 'Genera automáticamente cuotas anuales, boletas de pago para distribución y documentación digital, reduciendo tiempos operativos y errores manuales.'
        },
        {
          titulo: 'Flexibilidad en la Emisión de Comprobantes',
          descripcion: 'Permite emitir comprobantes manuales o masivos con múltiples opciones de impresión, exportación a PDF y previsualización.'
        },
        {
          titulo: 'Integración con Otros Sistemas Municipales',
          descripcion: 'Se conecta con Tesorería para recaudación, Contabilidad para asientos automáticos, Convenios y Juicios para certificados de deuda.'
        },
        {
          titulo: 'Información Financiera Completa y Actualizada',
          descripcion: 'Brinda informes detallados de recaudación, liquidación, deudores, ranking de morosos y proyecciones para toma de decisiones.'
        },
        {
          titulo: 'Seguridad y Auditoría de Operaciones',
          descripcion: 'Registra cada acción realizada por usuario con auditoría básica por registro y técnica paso a paso, garantizando trazabilidad completa.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador Intuitiva', descripcion: 'Permite acceder a la información de cualquier carpeta de datos con un solo clic y actuar inmediatamente sobre cualquier registro.' },
        { titulo: 'Búsqueda Avanzada de Datos', descripcion: 'Realiza búsquedas sobre prácticamente cualquier carpeta sin limitaciones, con filtros por tipo de dato y personalización de campos visibles.' },
        { titulo: 'Informes y Listados Personalizables', descripcion: 'Permite decidir el tipo de impresora, filtrar y ordenar la información según necesidades específicas, con exportación a múltiples formatos.' },
        { titulo: 'Seguridad y Auditoría Integral', descripcion: 'Identificación de usuarios con login local o Windows, configuración de permisos, registro de auditoría por cada campo modificado.' },
        { titulo: 'Archivos Históricos y Copias de Seguridad', descripcion: 'Crea archivos históricos para depurar la base de datos actual manteniendo accesibilidad, con sistema automatizado de copias de seguridad.' },
        { titulo: 'Mayor Conectividad y Control de Procesos', descripcion: 'Envía correos electrónicos, navega en Internet, convierte información a cualquier formato, y permite cancelar cualquier proceso.' }
      ]
    },
    'servicios-varios': {
      nombre: 'Servicios Varios',
      subtitulo: 'Módulo configurable para gestión de servicios municipales especiales',
      icon: 'Zap',
      imagenes: [
        { archivo: 'servicios-varios-basica.png', titulo: 'Interfaz Básica' },
        { archivo: 'servicios-varios-intermedia.png', titulo: 'Interfaz Intermedia' },
        { archivo: 'servicios-varios-avanzada.png', titulo: 'Interfaz Avanzada' }
      ],
      funcionalidades: [
        'Administración de servicios municipales diversos y especiales',
        'Gestión completa de cuentas corrientes personalizadas',
        'Configuración flexible de parámetros según tipo de servicio',
        'Generación de comprobantes y boletas de pago',
        'Control de vencimientos y gestión de morosos',
        'Informes personalizados y reportes configurables',
        'Integración con módulos de Tesorería y Contabilidad',
        'Auditoría completa de todas las operaciones',
        'Sistema de búsqueda avanzada con filtros personalizables',
        'Archivos históricos para depuración de datos'
      ],
      beneficios: [
        {
          titulo: 'Interfaz Tipo Explorador',
          descripcion: 'Acceso intuitivo a toda la información con un solo clic, visualización inmediata de registros y acciones directas (crear, modificar, eliminar, copiar) sobre cualquier dato al instante.'
        },
        {
          titulo: 'Búsqueda de Datos Sin Limitaciones',
          descripcion: 'Realice búsquedas sobre prácticamente cualquier carpeta sin limitaciones, con filtros avanzados según tipo de dato y posibilidad de personalizar qué campos visualizar en los resultados.'
        },
        {
          titulo: 'Informes y Listados Personalizados',
          descripcion: 'Genere informes decidiendo sobre qué tipo de impresora imprimir (chorro de tinta, láser o matricial), con opciones de filtrado y ordenamiento de la información según sus necesidades específicas.'
        },
        {
          titulo: 'Seguridad y Auditoría Integral',
          descripcion: 'Identificación de usuarios con login local o Windows Active Directory, configuración de permisos, registro de auditoría por cada acción y auditoría técnica completa del paso a paso de los usuarios.'
        },
        {
          titulo: 'Archivos Históricos Consultables',
          descripcion: 'Cree archivos históricos en cualquier momento para depurar la base de datos actual y agilizar operaciones, manteniendo la posibilidad de consultarlos como si estuvieran en la base activa.'
        },
        {
          titulo: 'Mayor Conectividad y Control',
          descripcion: 'Envíe correos electrónicos directamente desde el sistema, navegue en Internet, convierta información a múltiples formatos y cancele cualquier proceso con un clic.'
        }
      ],
      caracteristicas: [
        { titulo: 'Interfaz Tipo Explorador', descripcion: 'Acceso rápido a la información de cualquier archivo de datos con un solo clic, permitiendo visualizar y actuar inmediatamente sobre los registros.' },
        { titulo: 'Búsqueda Avanzada', descripcion: 'Búsquedas sin limitaciones sobre cualquier carpeta con filtros personalizables por tipo de dato y control de visualización de resultados.' },
        { titulo: 'Informes Flexibles', descripcion: 'Decisión sobre tipo de impresora (chorro de tinta, láser o matricial), filtrado y ordenamiento personalizado de la información.' },
        { titulo: 'Seguridad y Auditoría', descripcion: 'Login local o Windows Active Directory, configuración de permisos de usuarios, registro de auditoría por acción y técnica por usuario.' },
        { titulo: 'Copias de Seguridad Automatizadas', descripcion: 'Sistema independiente de backup totalmente automatizado con programación de fecha, hora y medio de almacenamiento.' },
        { titulo: 'Archivos Históricos', descripcion: 'Creación de archivos históricos para depurar base de datos actual y agilizar operaciones, con consulta posterior como si estuvieran en base activa.' },
        { titulo: 'Mayor Conectividad', descripcion: 'Envío de correos electrónicos directo desde el sistema, navegación en Internet y conversión de información a múltiples formatos.' },
        { titulo: 'Control Total en Procesos', descripcion: 'Capacidad de cancelar cualquier proceso una vez iniciado (búsquedas, reportes, generaciones masivas de datos) con un clic.' }
      ]
    }
  };

  modulo: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug && this.modulosData[slug]) {
      this.modulo = this.modulosData[slug];
    } else {
      // Si no existe el módulo, mostrar Inmobiliario por defecto
      this.modulo = this.modulosData['inmobiliario'];
    }
  }

  volver() {
    this.router.navigate(['/']);
  }

  scrollToSection(id: string) {
    this.mobileMenuOpen = false;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit() {
    // Asegurar que la página empiece al inicio
    window.scrollTo(0, 0);
    // Iniciar el carrusel automático
    this.iniciarCarrusel();
  }

  ngOnDestroy() {
    // Limpiar el intervalo cuando se destruya el componente
    this.detenerCarrusel();
  }

  abrirImagen(nombreImagen: string) {
    this.imagenSeleccionada = nombreImagen;
  }

  getImagenActual(): any {
    if (this.modulo.imagenes && this.modulo.imagenes[this.slideActual]) {
      const img = this.modulo.imagenes[this.slideActual];
      return typeof img === 'string' ? { archivo: img, titulo: '' } : img;
    }
    return null;
  }

  cerrarImagen() {
    this.imagenSeleccionada = null;
  }

  anteriorSlide() {
    if (this.modulo.imagenes && this.slideActual > 0) {
      this.slideActual--;
    } else if (this.modulo.imagenes) {
      this.slideActual = this.modulo.imagenes.length - 1;
    }
    this.reiniciarCarrusel();
  }

  siguienteSlide() {
    if (this.modulo.imagenes && this.slideActual < this.modulo.imagenes.length - 1) {
      this.slideActual++;
    } else if (this.modulo.imagenes) {
      this.slideActual = 0;
    }
    this.reiniciarCarrusel();
  }

  irASlide(index: number) {
    this.slideActual = index;
    this.reiniciarCarrusel();
  }

  reiniciarCarrusel() {
    this.detenerCarrusel();
    this.iniciarCarrusel();
  }

  getImagenArchivo(img: any): string {
    return typeof img === 'string' ? img : img.archivo;
  }

  getImagenTitulo(img: any): string {
    return typeof img === 'string' ? '' : (img.titulo || '');
  }

  tieneTitulo(img: any): boolean {
    return typeof img !== 'string' && !!img.titulo;
  }

  iniciarCarrusel() {
    // Cambiar la imagen cada 8 segundos
    this.intervaloCarrusel = setInterval(() => {
      this.siguienteSlide();
    }, 8000);
  }

  detenerCarrusel() {
    if (this.intervaloCarrusel) {
      clearInterval(this.intervaloCarrusel);
    }
  }
}
