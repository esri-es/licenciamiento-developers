# Licenciamiento para ArcGIS Developers
Este repositorio ha sido creado con el objetivo de poder reunir el máximo número de preguntas y respuestas relativas a cómo funcionan las [licencias para desarrollar aplicaciones](https://developers.arcgis.com/pricing/) usando ArcGIS.

Antes de [hacer una pregunta](https://github.com/esri-es/licenciamiento-developers/issues/new) te sugerimos que revises esta documentación y que busques entre las [preguntas ya realizadas](https://github.com/ArcGIS/developer-licensing/issues) a ver si puedes encontrar información que te pueda ser de ayuda.

## Licencias para entornos de desarrollo
Los ADPs (ArcGIS Developer Plans) son los cinco paquetes que se han creado para agrupar las licencias que pueden ser necesarias a la hora de **desarrollar una aplicación**.
>**Nota**: en algunos casos es necesario adquirir licencias adicionales una vez la aplicación esté lista para salir a producción.

Tendrás que [crearte una cuenta de desarrollador gratuita](https://developers.arcgis.com/sign-up) para poder descargar gran parte del software del que hablamos en este documento y para que tu aplicación pueda hacer uso de alguno de los servicios de ArcGIS Online (mapas base, servicios de geocodificación o análisis, alojamiento de datos, etc).

### Plan: Essentials
Este paquete **no tiene ningún coste** e incluye licencias para poder usar 11 utilidades de desarrollo (SDKs y APIs),  3 generadores [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) de aplicaciones y extender o personalizar 40 aplicaciones web creadas por Esri (*licenciadas con [Apache v2.0](https://github.com/Esri/Viewer/blob/master/license.txt)*). Por tanto usar las SDKs, APIs y generadores de aplicaciones en entornos de desarrollo es totalmente gratuito. Concretamente nos referimos a:

* **SDKs que funcionan en el lado del cliente**: [ArcGIS API for JS](https://developers.arcgis.com/javascript/), [ArcGIS API for Python](https://developers.arcgis.com/python), junto a las SDKs nativas: [Runtime SDK for Android](https://developers.arcgis.com/android/), [Runtime SDK for iOS](https://developers.arcgis.com/ios/), [Runtime SDK for Java](https://developers.arcgis.com/java/) ,[Runtime SDK for macOS](https://developers.arcgis.com/macos/), [Runtime SDK for .NET](https://developers.arcgis.com/net/), [Runtime SDK for WPF](http://resources.arcgis.com/en/help/runtime-wpf/concepts/index.html#/Welcome_to_the_help_for_developing_Operations_Dashboard_for_ArcGIS_add_ins/0170000000np000000/) (deprecated), [Runtime SDK for Qt](https://developers.arcgis.com/qt/), [ArcGIS Pro SDK for .NET](https://pro.arcgis.com/en/pro-app/sdk/), [ArcObjects SDK for .NET](http://desktop.arcgis.com/en/arcobjects/latest/net/webframe.htm#f7237f0b-128f-4d39-b2a5-9904818c5e0d.htm) y [ArcObjects SDK for Java](http://desktop.arcgis.com/en/arcobjects/latest/java/#80146cac-6b50-4c82-a9f5-7a5be3406c5b.htm). 

* **Constructores**: [Web AppBuilder Developer Edition](https://developers.arcgis.com/web-appbuilder/), [AppStudio Basic](http://appstudio.arcgis.com/) (online version), [Survey123](http://survey123.arcgis.com/) (online).

* **Aplicaciones configurables**: las más de [40 aplicaciones web configurables](https://esri-es.github.io/awesome-arcgis/arcgis/products/configurable-apps/) creadas por Esri y alojadas en Github.

¿Dónde se puede acceder/descargar cada una?:

|Tecnología|Acceder y/o descargar|Documentación|
|---|---|---|
|ArcGIS API for JS|Acceder va CDN y [descargar](https://developers.arcgis.com/downloads/)|Versión: [3.x](https://developers.arcgis.com/javascript/3/) \| [4.x](https://developers.arcgis.com/javascript/)|
|ArcGIS API for Python|[Descargar vía Conda o Docker](https://developers.arcgis.com/python/guide/install-and-set-up/)|[Documentación](https://developers.arcgis.com/python/)|
|...|...|...|

### Plan: Builder
*TODO*

### Plan: Proffesional
*TODO*

### Plan: Premium
*TODO*

### Plan: Enterprise
*TODO*

## Licencias para entornos de producción
*TODO*

## FAQ:
¿Qué licencia necesito para poder desarrollar con...?:
* [ArcPy](http://desktop.arcgis.com/en/arcmap/latest/analyze/arcpy/what-is-arcpy-.htm)

¿Qué licencia necesito para poder extender ...?:
* [Operations Dashboard](http://doc.arcgis.com/en/operations-dashboard/windows-desktop/author/custom-addins.htm) (Widgets): sólo las licencias de Operations Dashboard.

* [ArcGIS Enterprise](http://doc.arcgis.com/en/operations-dashboard/windows-desktop/author/custom-addins.htm) (SOIs o SOEs): En desarrollo requiere al menos del paquete Proffesional, pero si dispones de licencias de producción puedes usar esas mismas.

* [GeoEvent Server](http://server.arcgis.com/en/geoevent/latest/administer/extending-geoevent-server.htm): las propias licencias de ArcGIS Enterprise y las de GeoEvent Server. En desarrollo requiere del paquete Enterprise, pero si dispones de licencias de producción puedes usar esas mismas.

* [ArcGIS Pro](https://pro.arcgis.com/en/pro-app/sdk/): sólo las licencias de ArcGIS Pro. Para desarrollo te vale con el paquete de desarrollo Proffesional o si dispones de ellas, las propias licencias de ArcGIS Pro de producción.
