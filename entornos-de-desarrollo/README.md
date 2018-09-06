# Planes para entornos de desarrollo
Los ADPs (ArcGIS Developer Plans) hacen referencia a los cinco "paquetes" que se han creado para agrupar las licencias que pueden ser necesarias a la hora de **desarrollar una aplicación**, por tanto sólo se pueden usar para entornos de desarrollo y pruebas.

>**Nota**: en algunos casos cuando la aplicación esté lista para salir a producción, además de las licencias que veremos en este apartado puede que haya que adquirir alguna licencia/plan adicional como se puede ver en [Licencias para entornos de producción](../entornos-de-desarrollo/README.md).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Planes](#planes)
  - [Plan: Essentials](#plan-essentials)
  - [Plan: Builder](#plan-builder)
  - [Plan: Professional](#plan-professional)
  - [Plan: Premium](#plan-premium)
  - [Plan: Enterprise](#plan-enterprise)
- [Soporte](#soporte)
  - [Servicio de Soporte Técnico de Esri España](#servicio-de-soporte-t%C3%A9cnico-de-esri-espa%C3%B1a)
  - [Comunidad](#comunidad)
- [FAQ:](#faq)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Planes

Gran parte de la información de esta página ha sido extraída y **posteriormente enriquecida** a partir de la tabla disponible en [developers.arcgis.com/pricing](https://developers.arcgis.com/pricing/).

### Plan: Essentials

**Precio:** 0€

Este paquete [freemium](https://es.wikipedia.org/wiki/Freemium) incluye licencias para poder usar 11 utilidades de desarrollo (SDKs y APIs) y 3 generadores [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) de aplicaciones. Por tanto usar las SDKs, APIs y generadores de aplicaciones que veremos en este plan (*en entornos de desarrollo y pruebas*) es totalmente gratuito. Concretamente nos referimos a:

* **SDKs y APIs**: [ArcGIS API for JS](https://developers.arcgis.com/javascript/), [ArcGIS API for Python](https://developers.arcgis.com/python), [REST APIs](https://esri-es.github.io/awesome-arcgis/esri/open-vision/open-specifications/arcgis-rest-api/) (ArcGIS Online, ArcGIS Open Data, ...) y las Runtime SDKs para: [Android](https://developers.arcgis.com/android/), [iOS](https://developers.arcgis.com/ios/), [Java](https://developers.arcgis.com/java/), [macOS](https://developers.arcgis.com/macos/), [.NET](https://developers.arcgis.com/net/), [Qt](https://developers.arcgis.com/qt/) y [WPF](http://resources.arcgis.com/en/help/runtime-wpf/concepts/index.html#/Welcome_to_the_help_for_developing_Operations_Dashboard_for_ArcGIS_add_ins/0170000000np000000/) (deprecated).

* **Constructores**: [Web AppBuilder **Developer Edition**](https://developers.arcgis.com/web-appbuilder/), [AppStudio Basic](http://appstudio.arcgis.com/) (online version), [Survey123](http://survey123.arcgis.com/) (online), [Operations Dashboard](https://esri-es.github.io/awesome-arcgis/arcgis/products/operations-dashboard/) (online) y [aplicaciones configurables](https://www.arcgis.com/home/search.html?q=tags%3AArcGIS%20web%20application%20template%20owner%3Aesri_en&t=content&sortField=modified&sortOrder=desc&start=1) (incluidos los [storymaps](http://storymaps.esri.com/))

* **ArcGIS Online** (un usuario de nivel 2): una cuenta de organización pero mono-usuario que incluye también un *ArcGIS Online Deployment Plan* de 50 créditos mensuales (gratuito) (*sin posibilidad de adquirir más usuarios*).

* **Github projects**: aunque quizás sobra decirlo, pero también se puede reutilizar o extender cualquiera de los [proyectos publicados por Esri en Github](http://github.com/esri).

* **Apps listas para usar** (se pueden probar, pero está limitado a un sólo usuario): [Collector](http://doc.arcgis.com/en/collector/), [Workforce](https://workforce.arcgis.com/), [Explorer](http://doc.arcgis.com/en/explorer/), [ArcGIS Earth](https://www.esri.com/en-us/arcgis/products/arcgis-earth), [ArcGIS Companion](https://www.esri.com/arcgis-blog/products/apps/announcements/introducing-arcgis-companion/), [AuGEO](https://www.esri.com/arcgis-blog/products/apps/3d-gis/ar-for-your-gis/), y cualquier otra [aplicación gratuita](https://marketplace.arcgis.com/?start=1&view=grid&sortOrder=desc&sortField=uploaded&q=esri&type=esri&transaction=free) o [aplicación de labs.esri.com](http://labs.esri.com/). Algunas de estas apps [se pueden integrar](https://github.com/esri?utf8=%E2%9C%93&q=-integration&type=&language=) en flujos de trabajo con desarrollos propios

**¿Dónde se puede acceder/descargar cada una?:**

|Tecnología|Acceder y/o descargar|Documentación|
|---|---|---|
|ArcGIS REST API|[Depende de la instancia](https://developers.arcgis.com/rest/services-reference/get-started-with-the-services-directory.htm#ESRI_SECTION1_F8B80CEAB3F543FEA6B17E60B9C6810A)|[Documentación](https://developers.arcgis.com/rest/)
|ArcGIS API for JavaScript|[CDN](https://developers.arcgis.com/javascript/latest/guide/get-api/#cdn), [custom builds](https://github.com/Esri/jsapi-resources/tree/master/4.x/bower) y [descargar](https://developers.arcgis.com/downloads/)|[v3.x](https://developers.arcgis.com/javascript/3/) ó [v4.x](https://developers.arcgis.com/javascript/)|
|ArcGIS API for Python|[Descargar vía Conda o Docker](https://developers.arcgis.com/python/guide/install-and-set-up/)|[Documentación](https://developers.arcgis.com/python/)|
|Runtime SDK for Android|[Descargar](https://developers.arcgis.com/downloads/) o [Gradle](https://developers.arcgis.com/android/10-2/guide/install-and-set-up.htm#ESRI_SECTION1_C9913E8160D74241977115BEA470E1C3)|[v100](https://developers.arcgis.com/android/) ó [v10.2.x](https://developers.arcgis.com/android/10-2/)|
|Runtime SDK for iOS|[Descargar](https://developers.arcgis.com/downloads/) o [CocoaPods](https://developers.arcgis.com/ios/latest/swift/guide/install.htm#ESRI_SECTION1_9448ADD25F414BA3BA0319E77C1E8FF8)|[v100](https://developers.arcgis.com/ios/) ó [v10.2.x](https://developers.arcgis.com/ios/10-2/)
|Runtime SDK for .NET|[Descargar](https://developers.arcgis.com/downloads/) o [NuGet](https://developers.arcgis.com/net/latest/wpf/guide/install-the-sdk.htm#ESRI_SECTION1_BA40EF70B43B4F789B33C2CAA2053873)|[v100](https://developers.arcgis.com/net/) ó [v10.2.x](https://developers.arcgis.com/net/10-2/)|
|Runtime SDK for macOS|[Descargar](https://developers.arcgis.com/downloads/) o [CocoaPods](https://developers.arcgis.com/macos/latest/swift/guide/install-and-setup.htm#ESRI_SECTION1_9448ADD25F414BA3BA0319E77C1E8FF8)|[v100](https://developers.arcgis.com/macos/) ó [v10.2.x](https://developers.arcgis.com/macos/10-2/)|
|Runtime SDK for Java|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/java/) ó [v10.2.x](https://developers.arcgis.com/java/10-2/)|
|Runtime SDK for Qt|[Descargar](https://developers.arcgis.com/downloads/)|[v100](https://developers.arcgis.com/qt/) ó [v10.2.x](https://developers.arcgis.com/qt/10-2/)|
|Web AppBuilder Developer Edition|[Descargar](https://developers.arcgis.com/downloads/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/web-appbuilder/developer-edition/)|
|Runtime SDK for WPF (retired)|[Descargar](https://developers.arcgis.com/downloads/)|[Documentación](http://resources.arcgis.com/en/help/runtime-wpf/concepts/index.html#/Welcome_to_the_help_for_developing_Operations_Dashboard_for_ArcGIS_add_ins/0170000000np000000/)|

> **Nota**: también se pueden extender o personalizar cualquiera de las [40 aplicaciones web configurables creadas por Esri](https://esri-es.github.io/awesome-arcgis/arcgis/products/configurable-apps/) licenciadas con [Apache v2.0](https://choosealicense.com/licenses/apache-2.0/) y publicadas en Github.

---

### Plan: Builder

**Precio:** 1.875€/año  + I.V.A.

Especialmente pensado para proyectos que requieran crear una aplicación que funcione en **múltiples sistemas operativos y plataformas (móvil y desktop)**. Y/o en los que se cuenta con un equipo de desarrollo limitado (por: tiempo, tamaño o experiencia) para poder hacerlo.

Por ello **además de lo que incluye el Plan Essentials**, este plan incluye:

|Tecnología|Acceder y/o descargar|Documentación|Detalles|
|---|---|---|---|
|AppStudio for ArcGIS (Standard)|[Descargar](https://doc.arcgis.com/en/appstudio/download/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/appstudio/)|Con más de [60 ejemplos de código](https://github.com/Esri/arcgis-appstudio-samples) para acelerar la creación de aplicaciones multiplataforma.|
|Collector for ArcGIS|[Descargar](http://doc.arcgis.com/en/collector/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/collector-for-arcgis/)|Integrable o automatizable a través de [collector-tools](https://github.com/Esri/collector-tools) y [collector-integration](https://github.com/Esri/collector-integration).|
|Workforce for ArcGIS|[Descargar](https://workforce.arcgis.com/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/workforce/)|Automatizable: [workforce-scripts](https://github.com/Esri/workforce-scripts).|
|Explorer for ArcGIS|[Descargar](http://doc.arcgis.com/en/explorer/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/explorer-for-arcgis/)|Integrable usando [explorer-integration](https://github.com/Esri/explorer-integration).|
|Survey123 for ArcGIS|[Descargar](https://doc.arcgis.com/en/survey123/download/)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/survey123/)|n.a.|
|Organización  de ArcGIS Online|[arcgis.com](https://www.arcgis.com)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-online/)|Con dos usuarios de Nivel 2 y tres usuarios de Nivel 1 + [ArcGIS Online Deployment plan](https://developers.arcgis.com/pricing/credits/) por defecto: 50 créditos/mes|
|ArcGIS Desktop Basic (ArcGIS Pro & ArcMap)|[Download ArcGIS Pro](http://links.esri.com/pro/download/current) & [ArcMap](http://desktop.arcgis.com/en/arcmap/latest/get-started/main/get-started-with-arcmap.htm#ESRI_SECTION1_1920CFA5E30C477B9BD943844531DE11)|[ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) Basic ([ArcGIS Pro](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcgis-pro/) & [ArcMap](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcmap-arccatalog/))|Para preparar y trabajar tus datos, realizar análisis, etc|

---

### Plan: Professional

**Precio:** 2.400€/año + I.V.A.

Este plan está pensando para aquellos que necesitan:
* [ArcGIS Enterprise](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/) para sus desarrollos, ya sea porque quieren extenderlo mediante los SOIs/SOEs, porque necesiten usar [GeoDatabases](https://esri-es.github.io/awesome-arcgis/arcgis/content/data-storage/geodatabase/) o porque sus aplicaciones requieren de geoprocesos.
* O bien extender [ArcGIS Pro](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcgis-pro/).

Este plan **además de lo descrito en el Plan Builder** incluye:
* [ArcGIS Enterprise](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/) (Advanced).
* [ArcGIS Pro SDK for .NET](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcgis-pro/), [ArcObjects SDK for .NET](http://desktop.arcgis.com/en/arcobjects/latest/net/webframe.htm#f7237f0b-128f-4d39-b2a5-9904818c5e0d.htm) y [ArcObjects SDK for Java](http://desktop.arcgis.com/en/arcobjects/latest/java/#80146cac-6b50-4c82-a9f5-7a5be3406c5b.htm) para extender [ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) y [ArcGIS Enterprise](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/) con herramientas personalizadas.
* [ArcGIS Engine](http://www.esri.com/software/arcgis/arcgisengine).
* [Navigator for ArcGIS](http://www.esri.com/products/navigator), puedes usarlo para calcular rutas gracias a [su esquema de URLs](https://github.com/Esri/navigator-integration).
* Capabilities for [ArcGIS Server](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/arcgis-server/): 3D Analyst for Server, [Network Analyst](https://esri-es.github.io/awesome-arcgis/arcgis/products/extensions/network-analyst/) for Server, Spatial Analyst for Server, etc.
* [ArcGIS Utility Network Management](https://www.esri.com/en-us/arcgis/products/arcgis-utility-network-management/overview) extension para ArcGIS Enterprise
* ArcGIS Desktop Extensions: Advanced 3D, [Network Analyst](https://esri-es.github.io/awesome-arcgis/arcgis/products/extensions/network-analyst/) y Spatial Analysis
* [Image Analyst](https://www.esri.com/en-us/arcgis/products/arcgis-image-analyst/overview) extension para ArcGIS Pro
* etc.

|Tecnología|Acceder y/o descargar|Documentación|
|---|---|---|
|ArcGIS Pro SDK for .NET|[Descargar](https://github.com/Esri/arcgis-pro-sdk#installing-arcgis-pro-sdk-for-net)|[Documentación](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/arcgis-pro/)|
|ArcObjects SDK for .NET|[my.esri.com](https://my.esri.com/#/downloads/Developer%20Tools)|[Documentación](http://desktop.arcgis.com/en/arcobjects/latest/net/webframe.htm#f7237f0b-128f-4d39-b2a5-9904818c5e0d.htm)|
|ArcObjects SDK for Java|[my.esri.com](https://my.esri.com/#/downloads/Developer%20Tools)|[Documentación](http://desktop.arcgis.com/en/arcobjects/latest/java/#80146cac-6b50-4c82-a9f5-7a5be3406c5b.htm)|

---

### Plan: Premium

**Precio:** 3.960€/año + I.V.A.

Este plan es como el *Plan Proffessional* pero para proyectos que requieran una gestión avanzada de datos a través de [ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) Standard.

> **Nota** sólo se incluye una licencia de Desktop y es Standard en lugar de Basic.

---

### Plan: Enterprise

**Precio:** 5.375€/año + I.V.A.

Este plan es como el *Plan Proffessional* pero en este caso incluye licencias de:
* [ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) Advanced.
* ArcGIS Server roles: [GeoEvent Server](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/arcgis-server/geoevent-server/), GeoAnalytics and [Image Server](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/arcgis-server/image-server/).
* Entrada para cualquiera de los siguientes Developer Summits: [Palm Springs](http://esri.com/events/devsummit), [Europa](http://www.esri.com/events/devsummit-europe) (Berlin) o [Washington DC](http://www.esri.com/events/devsummit-dc).

> **Nota** sólo se incluye una licencia de Desktop y es Advanced en lugar de Standard.

## Soporte

### Servicio de Soporte Técnico de Esri España

Todos los planes salvo el *Essentials* incluyen soporte técnico de Esri España. Este está especialmente diseñado para ayudar en los errores que surjan en el uso de los productos de la Plataforma ArcGIS.

Más información en la [web de Esri España](http://www.esri.es/sobre-esri/soporte/).

### Comunidad

En cualquier caso, cualquier persona que lo desee (incluído los miembros del *plan Essentials*) puede recurrir a la comunidad en busca de ayuda sobre errores o cualquier otro tipo de dudas (arquitectura, buenas prácticas, etc).

* [Iniciativas de comunidad en español](https://github.com/esri-es/devsummits-esri-spain/blob/gh-pages/2017/ppts/iniciativas-para-desarrolladores/presentation.md#comunidad).
* [Iniciativas internacionales de comunidad](https://esri-es.github.io/awesome-arcgis/esri/community/).

## FAQ:

> **Nota**: Si tu pregunta no se encuentra respondida aquí, busca a ver si otra persona la ha planteado en los [issues del repositorio](https://github.com/esri-es/licenciamiento-developers/issues) y si no siéntete libre de crear un nuevo issue.

**Q: Qué indican los niveles de usuario**
El nivel de usuario indica los privilegios que puede tener. De manera muy simplificada un usuario de nivel 1 se podra decir que es de "sólo lectura" y uno de nivel 2 de "lectura y escritura", ([más info](https://blogs.esri.com/esri/arcgis/2016/12/20/your-guide-to-named-user-levels/)).

**Q: ¿Qué licencia necesito para poder desarrollar con... ?:**
* [ArcPy](http://desktop.arcgis.com/en/arcmap/latest/analyze/arcpy/what-is-arcpy-.htm): sólo se pueden crear scripts con ArcPy si dispones de licencias de [ArcGIS Desktop](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-desktop/) o [ArcGIS Enterprise](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/).

* [ArcGIS Engine](http://www.esri.com/software/arcgis/arcgisengine) (deprecated): El *Professional Plan*, aunque para los desarrollos que se hacían antes con ArcGIS Engine recomendamos usar las nuevas Runtime SDKs.

**Q: ¿Qué licencia necesito para poder extender... ?:**
* [Operations Dashboard](http://doc.arcgis.com/en/operations-dashboard/windows-desktop/author/custom-addins.htm) (crear widgets): sólo las licencias de Operations Dashboard.

* [ArcGIS Enterprise](http://doc.arcgis.com/en/operations-dashboard/windows-desktop/author/custom-addins.htm) (crear SOIs o SOEs): En desarrollo requiere al menos del *Proffesional Plan*, pero si dispones de licencias de producción puedes usar esas mismas.

* [GeoEvent Server](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-enterprise/arcgis-server/geoevent-server/) (crear conectores o procesadores): las propias licencias de ArcGIS Enterprise y las de GeoEvent Server. En desarrollo requiere del paquete Enterprise, pero si dispones de licencias de producción puedes usar esas mismas.

* [ArcGIS Pro](https://pro.arcgis.com/en/pro-app/sdk/): sólo las licencias de ArcGIS Pro. Para desarrollo te vale con el *Professional Plan* o si dispones de ellas, las propias licencias de ArcGIS Pro de producción.

**Q: ¿A qué equivale mi EDN respecto a los nuevos planes?**

A: En la siguiente tabla puedes ver las correspondencias:

|EDN/Developer Subscription|Equivalencia con el nuevo plan|
|---|---|
|EDN + Desktop Adv. Add-On|Enterprise Plan|
|EDN + Desktop Std. Add-On|Premium Plan|
|EDN sólo <br>O EDN + AppStudio Add-on y/o Desktop Basic Add-On|Professional Plan|
|AppStudio for ArcGIS|Builder Plan|
|Plan gratuito o de pago|Essentials Plan|

**Q: ¿Y si compro un Plan y somos cinco miembros en el equipo de desarrollo?**

A: Deberás enviar la invitación de los dos usuarios nominales a los miembros
de tu equipo que se vayan a encargar de crear los servicios, generar los App IDs, etc.
Una vez creados el AppID y el AppSecret el resto del equipo puede construir las apps.

**Q: Ya tengo licenciado mi software con EDN, ¿tengo que volver a licenciar algo?**

A: No, el software licenciado mediante el EDN no se ve afectado, se aplican los mismo términos y se ofrecerá más software y herramientas simplemente activando la nueva suscripción - Contacta con suministros: cgi@esri.es

**Q: ¿Cuántos usuarios nominales de ArcGIS Enterprise se incluyen con una suscripción?**

A: (3) nivel 1 y (2) nivel 2
