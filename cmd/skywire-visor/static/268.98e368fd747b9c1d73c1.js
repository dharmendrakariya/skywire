"use strict";(self.webpackChunkskywire_manager=self.webpackChunkskywire_manager||[]).push([[268],{84268:function(e){e.exports=JSON.parse('{"common":{"save":"Guardar","cancel":"Cancelar","downloaded":"Recibido","uploaded":"Enviado","loading-error":"Hubo un error obteniendo los datos. Reintentando...","operation-error":"Hubo un error al intentar completar la operaci\xf3n.","no-connection-error":"No hay conexi\xf3n a Internet o conexi\xf3n con el hipervisor.","error":"Error:","refreshed":"Datos refrescados.","options":"Opciones","logout":"Cerrar sesi\xf3n","logout-error":"Error cerrando la sesi\xf3n.","logout-confirmation":"Are you sure you want to log out?","time-in-ms":"{{ time }}ms.","time-in-segs":"{{ time }}s.","ok":"Ok","yes":"S\xed","no":"No","unknown":"Desconocido","close":"Cerrar","window-size-error":"La ventana es demasiado estrecha para el contenido."},"labeled-element":{"edit-label":"Editar etiqueta","remove-label":"Remover etiqueta","copy":"Copiar","remove-label-confirmation":"\xbfRealmente desea eliminar la etiqueta?","unnamed-element":"Sin nombre","unnamed-local-visor":"Visor local","local-element":"Local","tooltip":"Haga clic para copiar la entrada o cambiar la etiqueta","tooltip-with-text":"{{ text }} (Haga clic para copiar la entrada o cambiar la etiqueta)"},"labels":{"title":"Etiquetas","info":"Etiquetas que ha introducido para identificar f\xe1cilmente visores, transportes y otros elementos, en lugar de tener que leer identificadores generados por una m\xe1quina.","list-title":"Lista de etiquetas","label":"Etiqueta","id":"ID del elemento","type":"Tipo","delete-confirmation":"\xbfSeguro que desea borrar la etiqueta?","delete-selected-confirmation":"\xbfSeguro que desea borrar las etiquetas seleccionados?","delete":"Borrar etiqueta","deleted":"Operaci\xf3n de borrado completada.","empty":"No hay etiquetas guardadas.","empty-with-filter":"Ninguna etiqueta coincide con los criterios de filtrado seleccionados.","filter-dialog":{"label":"La etiqueta debe contener","id":"El id debe contener","type":"El tipo debe ser","type-options":{"any":"Cualquiera","visor":"Visor","dmsg-server":"Servidor DMSG","transport":"Transporte"}}},"filters":{"filter-action":"Filtrar","filter-info":"Lista de filtros.","press-to-remove":"(Presione para remover los filtros)","remove-confirmation":"\xbfSeguro que desea remover los filtros?"},"tables":{"title":"Ordenar por","sorting-title":"Ordenado por:","sort-by-value":"Valor","sort-by-label":"Etiqueta","label":"(etiqueta)","inverted-order":"(invertido)"},"start":{"title":"Inicio"},"node":{"title":"Detalles del visor","not-found":"Visor no encontrado.","statuses":{"online":"Online","online-tooltip":"El visor se encuentra online.","connecting":"Conectando","connecting-tooltip":"El visor se encuentra online, pero todav\xeda est\xe1 conectando con el uptime tracker.","unknown":"Desconocido","unknown-tooltip":"El visor se encuentra online, pero no ha sido posible determinar si est\xe1 conectado con el uptime tracker.","partially-online":"Online con problemas","partially-online-tooltip":"El visor se encuentra online, pero desconectado del uptime tracker.","offline":"Offline","offline-tooltip":"El visor se encuentra offline."},"details":{"node-info":{"title":"Informaci\xf3n del visor","label":"Etiqueta:","public-key":"Llave p\xfablica:","symmetic-nat":"NAT sim\xe9trica:","public-ip":"IP p\xfablica:","ip":"IP:","dmsg-server":"Servidor DMSG:","ping":"Ping:","node-version":"Versi\xf3n del visor:","build-type":"Tipo de build:","skybian-version":"Versi\xf3n de Skybian:","unknown-build":"Desconocido","time":{"title":"Tiempo online:","seconds":"unos segundos","minute":"1 minuto","minutes":"{{ time }} minutos","hour":"1 hora","hours":"{{ time }} horas","day":"1 d\xeda","days":"{{ time }} d\xedas","week":"1 semana","weeks":"{{ time }} semanas"}},"transports-info":{"title":"Informaci\xf3n de Transportes","autoconnect":"Autoconectar:","autoconnect-info":"Al activarse, el visor crear\xe1 autom\xe1ticamente los transportes necesarios cuando se solicite la conexi\xf3n a un visor p\xfablico. Al desactivarse, los transportes deber\xe1n ser creados antes de poder establecer la conexi\xf3n.","enabled":"Activado","disabled":"Desactivado","enable-button":"Activar","disable-button":"Desactivar","enable-confirmation":"\xbfSeguro que desea activar la funci\xf3n de autoconectar?","disable-confirmation":"\xbfSeguro que desea desactivar la funci\xf3n de autoconectar?","enable-done":"La funci\xf3n de autoconectar ha sido activada.","disable-done":"La funci\xf3n de autoconectar ha sido desactivada."},"router-info":{"title":"Informaci\xf3n del Enrutador","min-hops":"Saltos m\xednimos:","max-hops":"Saltos m\xe1ximos:","change-config-button":"Cambiar configuraci\xf3n"},"node-health":{"title":"Informaci\xf3n de Salud","status":"Estatus:","transport-discovery":"Transport discovery:","route-finder":"Route finder:","setup-node":"Setup node:","uptime-tracker":"Uptime tracker:","address-resolver":"Address resolver:","element-offline":"Offline"},"node-traffic-data":"Datos de tr\xe1fico"},"tabs":{"info":"Info","apps":"Apps","routing":"Enrutamiento"},"error-load":"Hubo un error al intentar refrescar los datos. Reintentando..."},"router-config":{"title":"Configuraci\xf3n del Enrutador","info":"Aqu\xed podr\xe1 configurar cuantos saltos la conexi\xf3n deber\xe1 realizar a trav\xe9s de otros visores de Skywire antes de alcanzar el destino final. NOTA: los cambios no afectar\xe1n a las rutas ya existentes.","min-hops":"Saltos m\xednimos","save-config-button":"Guardar configuraci\xf3n","done":"Cambios guardados."},"nodes":{"title":"Lista de visores","dmsg-title":"DMSG","update-all":"Actualizar todos los visores online","hypervisor":"Hypervisor","state":"Estado","state-tooltip":"Estado actual","label":"Etiqueta","key":"Llave","dmsg-server":"Servidor DMSG","ping":"Ping","hypervisor-info":"Este visor es el Hypervisor actual.","copy-key":"Copiar llave","copy-dmsg":"Copiar llave DMSG","copy-data":"Copiar datos","view-node":"Ver visor","delete-node":"Remover visor","delete-all-offline":"Remover todos los visores offline","error-load":"Hubo un error al intentar refrescar la lista. Reintentando...","empty":"No hay ning\xfan visor conectado a este hypervisor.","empty-with-filter":"Ningun visor coincide con los criterios de filtrado seleccionados.","delete-node-confirmation":"\xbfSeguro que desea remover el visor de la lista?","delete-all-offline-confirmation":"\xbfSeguro que desea remover todos los visores offline de la lista?","delete-all-filtered-offline-confirmation":"Todos los visores offline que satisfagan los criterios de filtrado actuales ser\xe1n removidos de la lista. \xbfSeguro que desea continuar?","deleted":"Visor removido.","deleted-singular":"1 visor offline removido.","deleted-plural":"{{ number }} visores offline removidos.","no-visors-to-update":"No hay visores para actualizar.","filter-dialog":{"online":"El visor debe estar","label":"La etiqueta debe contener","key":"La llave debe contener","dmsg":"La llave del servidor DMSG debe contener","online-options":{"any":"Online u offline","online":"Online","offline":"Offline"}}},"edit-label":{"label":"Etiqueta","done":"Etiqueta guardada.","label-removed-warning":"La etiqueta fue removida."},"settings":{"title":"Configuraci\xf3n","password":{"initial-config-help":"Use esta opci\xf3n para establecer la contrase\xf1a inicial. Despu\xe9s de establecer una contrase\xf1a no es posible usar esta opci\xf3n para modificarla.","help":"Opciones para cambiar la contrase\xf1a.","old-password":"Contrase\xf1a actual","new-password":"Nueva contrase\xf1a","repeat-password":"Repita la contrase\xf1a","password-changed":"Contrase\xf1a cambiada.","error-changing":"Error cambiando la contrase\xf1a.","initial-config":{"title":"Establecer contrase\xf1a inicial","password":"Contrase\xf1a","repeat-password":"Repita la contrase\xf1a","set-password":"Establecer contrase\xf1a","done":"Contrase\xf1a establecida. Por favor \xfasela para acceder al sistema.","error":"Error. Por favor aseg\xfarese de que no hubiese establecido la contrase\xf1a anteriormente."},"errors":{"bad-old-password":"La contrase\xf1a actual introducida no es correcta.","old-password-required":"La contrase\xf1a actual es requerida.","new-password-error":"La contrase\xf1a debe tener entre 6 y 64 caracteres.","passwords-not-match":"Las contrase\xf1as no coinciden.","default-password":"No utilice la contrase\xf1a por defecto (1234)."}},"updater-config":{"open-link":"Mostrar la configuraci\xf3n del actualizador","open-confirmation":"La configuraci\xf3n del actualizador es s\xf3lo para usuarios experimentados. Seguro que desea continuar?","help":"Utilice este formulario para modificar la configuraci\xf3n que utilizar\xe1 el actualizador. Se ignorar\xe1n todos los campos vac\xedos. La configuraci\xf3n se utilizar\xe1 para todas las operaciones de actualizaci\xf3n, sin importar qu\xe9 elemento se est\xe9 actualizando, as\xed que por favor tenga cuidado.","channel":"Canal","version":"Versi\xf3n","archive-url":"URL del archivo","checksum-url":"URL del checksum","not-saved":"Los cambios a\xfan no se han guardado.","save":"Guardar cambios","remove-settings":"Remover la configuraci\xf3n","saved":"Las configuracion personalizada ha sido guardada.","removed":"Las configuracion personalizada ha sido removida.","save-confirmation":"\xbfSeguro que desea aplicar la configuraci\xf3n personalizada?","remove-confirmation":"\xbfSeguro que desea remover la configuraci\xf3n personalizada?"},"change-password":"Cambiar contrase\xf1a","refresh-rate":"Frecuencia de refrescado","refresh-rate-help":"Tiempo que el sistema espera para actualizar autom\xe1ticamente los datos.","refresh-rate-confirmation":"Frecuencia de refrescado cambiada.","seconds":"segundos"},"login":{"password":"Contrase\xf1a","incorrect-password":"Contrase\xf1a incorrecta.","initial-config":"Configurar lanzamiento inicial"},"actions":{"menu":{"terminal":"Terminal","config":"Configuraci\xf3n","update":"Actualizar","reboot":"Reiniciar","logs":"Ver logs"},"reboot":{"confirmation":"\xbfSeguro que desea reiniciar el visor?","done":"El visor se est\xe1 reiniciando."},"terminal-options":{"full":"Terminal completa","simple":"Terminal simple"},"terminal":{"title":"Terminal","input-start":"Terminal de Skywire para {{address}}","error":"Error inesperado mientras se intentaba ejecutar el comando."}},"update":{"title":"Actualizar","error-title":"Error","processing":"Buscando actualizaciones...","no-update":"No hay ninguna actualizaci\xf3n para el visor. La versi\xf3n instalada actualmente es:","no-updates":"No se encontraron nuevas actualizaciones.","already-updating":"Algunos visores ya est\xe1n siendo actualizandos:","with-error":"No fue posible verificar los siguientes visores:","update-available":"Las siguientes actualizaciones fueron encontradas:","update-available-singular":"Las siguientes actualizaciones para 1 visor fueron encontradas:","update-available-plural":"Las siguientes actualizaciones para {{ number }} visores fueron encontradas:","update-available-additional-singular":"Las siguientes actualizaciones adicionales para 1 visor fueron encontradas:","update-available-additional-plural":"Las siguientes actualizaciones adicionales para {{ number }} visores fueron encontradas:","update-instructions":"Haga clic en el bot\xf3n \'Instalar actualizaciones\' para continuar.","updating":"La operaci\xf3n de actualizaci\xf3n se ha iniciado, puede abrir esta ventana nuevamente para verificar el progreso:","version-change":"De {{ currentVersion }} a {{ newVersion }}","selected-channel":"Canal seleccionado:","downloaded-file-name-prefix":"Descargando: ","speed-prefix":"Velocidad: ","time-downloading-prefix":"Tiempo descargando: ","time-left-prefix":"Tiempo aprox. faltante: ","starting":"Preparando para actualizar","finished":"Conexi\xf3n de estado terminada","install":"Instalar actualizaciones"},"apps":{"log":{"title":"Log","empty":"No hay mensajes de log para el rango de fecha seleccionado.","filter-button":"Mostrando s\xf3lo logs generados desde:","filter":{"title":"Filtro","filter":"Mostrar s\xf3lo logs generados desde","7-days":"Los \xfaltimos 7 d\xedas","1-month":"Los \xfaltimos 30 d\xedas","3-months":"Los \xfaltimos 3 meses","6-months":"Los \xfaltimos 6 meses","1-year":"El \xfaltimo a\xf1o","all":"mostrar todos"}},"apps-list":{"title":"Aplicaciones","list-title":"Lista de aplicaciones","app-name":"Nombre","port":"Puerto","state":"Estado","state-tooltip":"Estado actual","auto-start":"Autoinicio","empty":"El visor no tiene ninguna aplicaci\xf3n.","empty-with-filter":"Ninguna app coincide con los criterios de filtrado seleccionados.","disable-autostart":"Deshabilitar autoinicio","enable-autostart":"Habilitar autoinicio","autostart-disabled":"Autoinicio deshabilitado","autostart-enabled":"Autoinicio habilitado","unavailable-logs-error":"No es posible mostrar los logs mientras la aplicaci\xf3n no se est\xe1 ejecutando.","filter-dialog":{"state":"El estado debe ser","name":"El nombre debe contener","port":"El puerto debe contener","autostart":"El autoinicio debe estar","state-options":{"any":"Iniciada o detenida","running":"Iniciada","stopped":"Detenida"},"autostart-options":{"any":"Activado or desactivado","enabled":"Activado","disabled":"Desactivado"}}},"vpn-socks-server-settings":{"socks-title":"Configuraci\xf3n de Skysocks","vpn-title":"Configuraci\xf3n de VPN-Server","new-password":"Nueva contrase\xf1a (dejar en blanco para eliminar la contrase\xf1a)","repeat-password":"Repita la contrase\xf1a","passwords-not-match":"Las contrase\xf1as no coinciden.","secure-mode-check":"Usar modo seguro","secure-mode-info":"Cuando est\xe1 activo, el servidor no permite SSH con los clientes y no permite ning\xfan tr\xe1fico de clientes VPN a la red local del servidor.","save":"Guardar","remove-passowrd-confirmation":"Ha dejado el campo de contrase\xf1a vac\xedo. \xbfSeguro que desea eliminar la contrase\xf1a?","change-passowrd-confirmation":"\xbfSeguro que desea cambiar la contrase\xf1a?","changes-made":"Los cambios han sido realizados."},"vpn-socks-client-settings":{"socks-title":"Configuraci\xf3n de Skysocks-Client","vpn-title":"Configuraci\xf3n de VPN-Client","discovery-tab":"Buscar","remote-visor-tab":"Introducir manualmente","settings-tab":"Configuracion","history-tab":"Historial","use":"Usar estos datos","change-note":"Cambiar nota","remove-entry":"Remover entrada","note":"Nota:","note-entered-manually":"Introducido manualmente","note-obtained":"Obtenido del servicio de descubrimiento","key":"Llave:","port":"Puerto:","location":"Ubicaci\xf3n:","state-available":"Disponible","state-offline":"Offline","public-key":"Llave p\xfablica del visor remoto","password":"Contrase\xf1a","password-history-warning":"Nota: la contrase\xf1a no se guardar\xe1 en el historial.","copy-pk-info":"Copiar la llave p\xfablica.","copied-pk-info":"La llave p\xfablica ha sido copiada.","copy-pk-error":"Hubo un problema al intentar cambiar la llave p\xfablica.","no-elements":"Actualmente no hay elementos para mostrar. Por favor, int\xe9ntelo de nuevo m\xe1s tarde.","no-elements-for-filters":"No hay elementos que cumplan los criterios de filtro.","no-filter":"No se ha seleccionado ning\xfan filtro","click-to-change":"Haga clic para cambiar","remote-key-length-error":"La llave p\xfablica debe tener 66 caracteres.","remote-key-chars-error":"La llave p\xfablica s\xf3lo debe contener caracteres hexadecimales.","save":"Guardar","remove-from-history-confirmation":"\xbfSeguro de que desea eliminar la entrada del historial?","change-key-confirmation":"\xbfSeguro que desea cambiar la llave p\xfablica del visor remoto?","changes-made":"Los cambios han sido realizados.","no-history":"Esta pesta\xf1a mostrar\xe1 las \xfaltimas {{ number }} llaves p\xfablicas usadas.","default-note-warning":"La nota por defecto ha sido utilizada.","pagination-info":"{{ currentElementsRange }} de {{ totalElements }}","killswitch-check":"Activar killswitch","killswitch-info":"Cuando est\xe1 activo, todas las conexiones de red se desactivar\xe1n si la aplicaci\xf3n se est\xe1 ejecutando pero la protecci\xf3n VPN est\xe1 interrumpida (por errores temporales o cualquier otro problema). Esto evita fugas de datos.","settings-changed-alert":"Los cambios a\xfan no se han guardado.","save-settings":"Guardar configuracion","change-note-dialog":{"title":"Cambiar Nota","note":"Nota"},"password-dialog":{"title":"Introducir Contrase\xf1a","password":"Contrase\xf1a","info":"Se le solicita una contrase\xf1a porque una contrase\xf1a fue utilizada cuando se cre\xf3 la entrada seleccionada, pero no fue guardada por razones de seguridad. Puede dejar la contrase\xf1a vac\xeda si es necesario.","continue-button":"Continuar"},"filter-dialog":{"title":"Filtros","country":"El pa\xeds debe ser","any-country":"Cualquiera","location":"La ubicaci\xf3n debe contener","pub-key":"La llave p\xfablica debe contener","apply":"Aplicar"}},"stop-app":"Detener","start-app":"Iniciar","view-logs":"Ver logs","settings":"Configuraci\xf3n","open":"Abrir","error":"Se produjo un error y no fue posible realizar la operaci\xf3n.","stop-confirmation":"\xbfSeguro que desea detener la aplicaci\xf3n?","stop-selected-confirmation":"\xbfSeguro que desea detener las aplicaciones seleccionadas?","disable-autostart-confirmation":"\xbfSeguro que desea deshabilitar el autoinicio de la aplicaci\xf3n?","enable-autostart-confirmation":"\xbfSeguro que desea habilitar el autoinicio de la aplicaci\xf3n?","disable-autostart-selected-confirmation":"\xbfSeguro que desea deshabilitar el autoinicio de las aplicaciones seleccionadas?","enable-autostart-selected-confirmation":"\xbfSeguro que desea habilitar el autoinicio de las aplicaciones seleccionadas?","operation-completed":"Operaci\xf3n completada.","operation-unnecessary":"La selecci\xf3n ya tiene la configuraci\xf3n solicitada.","status-running":"Corriendo","status-stopped":"Detenida","status-failed":"Fallida","status-running-tooltip":"La aplicaci\xf3n est\xe1 actualmente corriendo","status-stopped-tooltip":"La aplicaci\xf3n est\xe1 actualmente detenida","status-failed-tooltip":"Algo sali\xf3 mal. Revise los mensajes de la aplicaci\xf3n para m\xe1s informaci\xf3n"},"transports":{"title":"Transportes","info":"Conexiones que tiene con visores remotos de Skywire, para permitir que las aplicaciones Skywire locales se comuniquen con las aplicaciones que se ejecutan en esos visores remotos.","list-title":"Lista de transportes","offline":"Offline","persistent":"Persistente","persistent-tooltip":"Transportes persistentes, los cuales son creados autom\xe1ticamente al iniciar el visor y son recreados autom\xe1ticamente en caso de desconexi\xf3n.","persistent-transport-tooltip":"Este transporte es persistente, as\xed que es creado autom\xe1ticamente al iniciar el visor y es recreado autom\xe1ticamente en caso de desconexi\xf3n.","persistent-transport-button-tooltip":"Este transporte es persistente, as\xed que es creado autom\xe1ticamente al iniciar el visor y es recreado autom\xe1ticamente en caso de desconexi\xf3n. Presione aqu\xed para volverlo no persistente.","non-persistent-transport-button-tooltip":"Presione aqu\xed para volver persistente el transporte. Los transportes persistentes son creados autom\xe1ticamente al iniciar el visor y son recreados autom\xe1ticamente en caso de desconexi\xf3n.","make-persistent":"Volver persistente","make-non-persistent":"Volver no persistente","make-selected-persistent":"Volver persistentes los seleccionados","make-selected-non-persistent":"Volver no persistentes los seleccionados","changes-made":"Cambios hechos.","no-changes-needed":"Ning\xfan cambio fue necesario.","id":"ID","remote-node":"Remoto","type":"Tipo","create":"Crear transporte","make-persistent-confirmation":"\xbfSeguro que desea volver persistente el transporte?","make-non-persistent-confirmation":"\xbfSeguro que desea volver no persistente el transporte?","make-selected-persistent-confirmation":"\xbfSeguro que desea volver persistentes los transportes seleccionados?","make-selected-non-persistent-confirmation":"\xbfSeguro que desea volver no persistentes los transportes seleccionados?","make-offline-non-persistent-confirmation":"\xbfSeguro que desea volver no persistente el transporte? No seguir\xe1 siendo mostrado en la lista mientras se encuentre offline.","delete-confirmation":"\xbfSeguro que desea borrar el transporte?","delete-persistent-confirmation":"Este transporte es persistente, as\xed que puede ser recreado poco despu\xe9s de ser borrado. \xbfSeguro que desea borrarlo?","delete-selected-confirmation":"\xbfSeguro que desea borrar los transportes seleccionados?","delete":"Borrar transporte","deleted":"Operaci\xf3n de borrado completada.","empty":"El visor no tiene ning\xfan transporte.","empty-with-filter":"Ningun transporte coincide con los criterios de filtrado seleccionados.","details":{"title":"Detalles","basic":{"title":"Informaci\xf3n b\xe1sica","persistent":"Persistente:","id":"ID:","local-pk":"Llave p\xfablica local:","remote-pk":"Llave p\xfablica remota:","type":"Tipo:"},"data":{"title":"Transmisi\xf3n de datos","uploaded":"Datos enviados:","downloaded":"Datos recibidos:"}},"dialog":{"remote-key":"Llave p\xfablica remota","label":"Nombre del transporte (opcional)","transport-type":"Tipo de transporte","make-persistent":"Hacer persistente","persistent-tooltip":"Los transportes persistentes son creados autom\xe1ticamente al iniciar el visor y son recreados autom\xe1ticamente en caso de desconexi\xf3n.","only-persistent-created":"El transporte persistente fue creado, pero podr\xeda no haber sido activado.","success":"Transporte creado.","success-without-label":"El transporte fue creado, pero no fue posible guardar la etiqueta.","errors":{"remote-key-length-error":"La llave p\xfablica remota debe tener 66 caracteres.","remote-key-chars-error":"La llave p\xfablica remota s\xf3lo debe contener caracteres hexadecimales.","transport-type-error":"El tipo de transporte es requerido."}},"filter-dialog":{"persistent":"El transporte debe ser","id":"El id debe contener","remote-node":"La llave remota debe contener","persistent-options":{"any":"Cualquiera","persistent":"Persistente","non-persistent":"No persistente"}}},"routes":{"title":"Rutas","info":"Caminos utilizados para llegar a los visores remotos con los que se han establecido transportes. Las rutas se generan autom\xe1ticamente seg\xfan sea necesario.","list-title":"Lista de rutas","key":"Llave","type":"Tipo","source":"Inicio","destination":"Destino","delete-confirmation":"\xbfSeguro que desea borrar la ruta?","delete-selected-confirmation":"\xbfSeguro que desea borrar las rutas seleccionadas?","delete":"Borrar ruta","deleted":"Operaci\xf3n de borrado completada.","empty":"El visor no tiene ninguna ruta.","empty-with-filter":"Ninguna ruta coincide con los criterios de filtrado seleccionados.","details":{"title":"Detalles","basic":{"title":"Informaci\xf3n b\xe1sica","key":"Llave:","rule":"Regla:"},"summary":{"title":"Resumen de regla","keep-alive":"Keep alive:","type":"Tipo de regla:","key-route-id":"ID de la llave de la ruta:"},"specific-fields-titles":{"app":"Campos de applicaci\xf3n","forward":"Campos de reenv\xedo","intermediary-forward":"Campos de reenv\xedo intermedio"},"specific-fields":{"route-id":"ID de la siguiente ruta:","transport-id":"ID del siguiente transporte:","destination-pk":"Llave p\xfablica de destino:","source-pk":"Llave p\xfablica de origen:","destination-port":"Puerto de destino:","source-port":"Puerto de origen:"}},"filter-dialog":{"key":"La llave debe contener","type":"El tipo debe ser","source":"El inicio debe contener","destination":"El destino debe contener","any-type-option":"Cualquiera"}},"copy":{"tooltip":"Presione para copiar","tooltip-with-text":"{{ text }} (Presione para copiar)","copied":"\xa1Copiado!"},"selection":{"select-all":"Seleccionar todo","unselect-all":"Deseleccionar todo","delete-all":"Borrar los elementos seleccionados","start-all":"Iniciar las apps seleccionadas","stop-all":"Detener las apps seleccionadas","enable-autostart-all":"Habilitar el autoinicio de las apps seleccionadas","disable-autostart-all":"Deshabilitar el autoinicio de las apps seleccionadas"},"refresh-button":{"seconds":"Refrescado hace unos segundos","minute":"Refrescado hace un minuto","minutes":"Refrescado hace {{ time }} minutos","hour":"Refrescado hace una hora","hours":"Refrescado hace {{ time }} horas","day":"Refrescado hace un d\xeda","days":"Refrescado hace {{ time }} d\xedas","week":"Refrescado hace una semana","weeks":"Refrescado hace {{ time }} semanas","error-tooltip":"Hubo un error al intentar refrescar los datos. Reintentando autom\xe1ticamente cada {{ time }} segundos..."},"view-all-link":{"label":"Ver todos los {{ number }} elementos"},"paginator":{"first":"Primera","last":"\xdaltima","total":"Total: {{ number }} p\xe1ginas","select-page-title":"Seleccionar p\xe1gina"},"confirmation":{"header-text":"Confirmaci\xf3n","confirm-button":"S\xed","cancel-button":"No","close":"Cerrar","error-header-text":"Error","done-header-text":"Hecho"},"language":{"title":"Seleccionar lenguaje"},"tabs-window":{"title":"Cambiar pesta\xf1a"},"vpn":{"title":"Panel de Control de VPN","start":"Inicio","servers":"Servidores","settings":"Configuracion","unnamed":"Sin nombre","starting-blocked-server-error":"No se puede conectar con el servidor seleccionado porque se ha agregado a la lista de servidores bloqueados.","unexpedted-error":"Se produjo un error inesperado y no se pudo completar la operaci\xf3n.","remote-access-title":"Parece que est\xe1 accediendo al sistema de manera remota","remote-access-text":"Esta aplicaci\xf3n s\xf3lo permite administrar la protecci\xf3n VPN del dispositivo en el que fue instalada. Los cambios hechos con ella no afectar\xe1n a dispositivos remotos como el que parece estar usando. Tambi\xe9n es posible que los datos de IP que se muestren sean incorrectos.","server-change":{"busy-error":"El sistema est\xe1 ocupado. Por favor, espere.","backend-error":"No fue posible cambiar el servidor. Por favor, aseg\xfarese de que la clave p\xfablica sea correcta y de que la aplicaci\xf3n VPN se est\xe9 ejecutando.","already-selected-warning":"El servidor seleccionado ya est\xe1 siendo utilizando.","change-server-while-connected-confirmation":"La protecci\xf3n VPN se interrumpir\xe1 mientras se cambia el servidor y algunos datos pueden transmitirse sin protecci\xf3n durante el proceso. \xbfDesea continuar?","start-same-server-confirmation":"Ya hab\xeda seleccionado ese servidor. \xbfDesea conectarte a \xe9l?"},"error-page":{"text":"La aplicaci\xf3n de cliente VPN no est\xe1 disponible.","more-info":"No fue posible conectarse a la aplicaci\xf3n cliente VPN. Esto puede deberse a un error de configuraci\xf3n, un problema inesperado con el visor o porque utiliz\xf3 una clave p\xfablica no v\xe1lida en la URL.","text-pk":"Configuraci\xf3n inv\xe1lida.","more-info-pk":"La aplicaci\xf3n no puede ser iniciada porque no ha especificado la clave p\xfablica del visor.","text-storage":"Error al guardar los datos.","more-info-storage":"Ha habido un conflicto al intentar guardar los datos y la aplicaci\xf3n se ha cerrado para prevenir errores. Esto puede suceder si abre la aplicaci\xf3n en m\xe1s de una pesta\xf1a o ventana.","text-pk-change":"Operaci\xf3n inv\xe1lida.","more-info-pk-change":"Por favor, utilice esta aplicaci\xf3n para administrar s\xf3lo un cliente VPN."},"connection-info":{"state-title":"El estado de tu conexi\xf3n es actualmente:","state-connecting":"Conectando","state-connecting-info":"Se est\xe1 activando la protecci\xf3n VPN.","state-connected":"Conectado","state-connected-info":"La protecci\xf3n VPN est\xe1 activada.","state-disconnecting":"Desconectando","state-disconnecting-info":"Se est\xe1 desactivando la protecci\xf3n VPN.","state-reconnecting":"Reconectando","state-reconnecting-info":"Se est\xe1 restaurando la protecci\xf3n de VPN.","state-disconnected":"Desconectado","state-disconnected-info":"La protecci\xf3n VPN est\xe1 desactivada.","state-info":"Estado actual de la conexi\xf3n.","latency-info":"Latencia actual.","upload-info":"Velocidad de subida.","download-info":"Velocidad de descarga."},"connection-error":{"text":"Error de conexi\xf3n","info":"Problema conectando con la app vpn. Algunos datos mostrados podr\xedan estar desactualizados."},"status-page":{"start-title":"Iniciar VPN","no-server":"\xa1Ning\xfan servidor seleccionado!","disconnect":"Desconectar","last-error":"\xdaltimo error:","unknown-error":"Error desconocido.","disconnect-confirmation":"\xbfRealmente desea detener la protecci\xf3n VPN?","upload-info":"Estad\xedsticas de datos subidos.","download-info":"Estad\xedsticas de datos descargados.","latency-info":"Estad\xedsticas de latencia.","total-data-label":"total","problem-connecting-error":"No fue posible conectarse al servidor. El servidor puede no ser v\xe1lido o estar temporalmente inactivo.","problem-starting-error":"No fue posible iniciar la VPN. Por favor, aseg\xfarese de que la aplicaci\xf3n base de cliente VPN est\xe9 ejecutandose.","problem-stopping-error":"No fue posible detener la VPN. Por favor, aseg\xfarese de que la aplicaci\xf3n base de cliente VPN est\xe9 ejecutandose.","generic-problem-error":"No fue posible realizar la operaci\xf3n. Por favor, aseg\xfarese de que la aplicaci\xf3n base de cliente VPN est\xe9 ejecutandose.","select-server-warning":"Por favor, seleccione un servidor primero.","data":{"ip":"Direcci\xf3n IP:","ip-problem-info":"Hubo un problema al intentar obtener la IP. Por favor, verif\xedquela utilizando un servicio externo.","ip-country-problem-info":"Hubo un problema al intentar obtener el pa\xeds. Por favor, verif\xedquelo utilizando un servicio externo.","ip-refresh-info":"Refrescar","ip-refresh-time-warning":"Por favor, espere {{ seconds }} segundo(s) antes de refrescar los datos.","ip-refresh-loading-warning":"Por favor, espere a que finalice la operaci\xf3n anterior.","country":"Pa\xeds:","server":"Servidor:","server-note":"Nota del servidor:","original-server-note":"Nota original del servidor:","local-pk":"Llave p\xfablica del visor local:","remote-pk":"Llave p\xfablica del visor remoto:","unavailable":"No disponible"}},"server-options":{"tooltip":"Opciones","connect-without-password":"Conectarse sin contrase\xf1a","connect-without-password-confirmation":"La conexi\xf3n se realizar\xe1 sin la contrase\xf1a. \xbfSeguro que desea continuar?","connect-using-password":"Conectarse usando una contrase\xf1a","connect-using-another-password":"Conectarse usando otra contrase\xf1a","edit-name":"Nombre personalizado","edit-label":"Nota personalizada","make-favorite":"Hacer favorito","make-favorite-confirmation":"\xbfRealmente desea marcar este servidor como favorito? Se eliminar\xe1 de la lista de bloqueados.","make-favorite-done":"Agregado a la lista de favoritos.","remove-from-favorites":"Quitar de favoritos","remove-from-favorites-done":"Eliminado de la lista de favoritos.","block":"Bloquear servidor","block-done":"Agregado a la lista de bloqueados.","block-confirmation":"\xbfRealmente desea bloquear este servidor? Se eliminar\xe1 de la lista de favoritos.","block-selected-confirmation":"\xbfRealmente desea bloquear el servidor actualmente seleccionado? Se cerrar\xe1n todas las conexiones.","block-selected-favorite-confirmation":"\xbfRealmente desea bloquear el servidor actualmente seleccionado? Se cerrar\xe1n todas las conexiones y se eliminar\xe1 de la lista de favoritos.","unblock":"Desbloquear servidor","unblock-done":"Eliminado de la lista de bloqueados.","remove-from-history":"Quitar del historial","remove-from-history-confirmation":"\xbfRealmente desea quitar del historial el servidor?","remove-from-history-done":"Eliminado del historial.","edit-value":{"name-title":"Nombre Personalizado","note-title":"Nota Personalizada","name-label":"Nombre personalizado","note-label":"Nota personalizada","apply-button":"Aplicar","changes-made-confirmation":"Se ha realizado el cambio."}},"server-conditions":{"selected-info":"Este es el servidor actualmente seleccionado.","blocked-info":"Este servidor est\xe1 en la lista de bloqueados.","favorite-info":"Este servidor est\xe1 en la lista de favoritos.","history-info":"Este servidor est\xe1 en el historial de servidores.","has-password-info":"Se estableci\xf3 una contrase\xf1a para conectarse con este servidor."},"server-list":{"date-small-table-label":"Fecha","date-info":"\xdaltima vez en la que us\xf3 este servidor.","country-small-table-label":"Pa\xeds","country-info":"Pa\xeds donde se encuentra el servidor.","name-small-table-label":"Nombre","location-small-table-label":"Ubicaci\xf3n","public-key-small-table-label":"Lp","public-key-info":"Llave p\xfablica del servidor.","congestion-rating-small-table-label":"Calificaci\xf3n de congesti\xf3n","congestion-rating-info":"Calificaci\xf3n del servidor relacionada con lo congestionado que suele estar.","congestion-small-table-label":"Congesti\xf3n","congestion-info":"Congesti\xf3n actual del servidor.","latency-rating-small-table-label":"Calificaci\xf3n de latencia","latency-rating-info":"Calificaci\xf3n del servidor relacionada con la latencia que suele tener.","latency-small-table-label":"Latencia","latency-info":"Latencia actual del servidor.","hops-small-table-label":"Saltos","hops-info":"Cu\xe1ntos saltos se necesitan para conectarse con el servidor.","note-small-table-label":"Nota","note-info":"Nota acerca del servidor.","gold-rating-info":"Oro","silver-rating-info":"Plata","bronze-rating-info":"Bronce","notes-info":"Nota personalizada: {{ custom }} - Nota original: {{ original }}","empty-discovery":"Actualmente no hay servidores VPN para mostrar. Por favor, int\xe9ntelo de nuevo m\xe1s tarde.","empty-history":"No hay historial que mostrar.","empty-favorites":"No hay servidores favoritos para mostrar.","empty-blocked":"No hay servidores bloqueados para mostrar.","empty-with-filter":"Ning\xfan servidor VPN coincide con los criterios de filtrado seleccionados.","add-manually-info":"Agregar el servidor manualmente.","current-filters":"Filtros actuales (presione para eliminar)","none":"Ninguno","unknown":"Desconocido","tabs":{"public":"P\xfablicos","history":"Historial","favorites":"Favoritos","blocked":"Bloqueados"},"add-server-dialog":{"title":"Ingresar manualmente","pk-label":"Llave p\xfablica del servidor","password-label":"Contrase\xf1a del servidor (si tiene)","name-label":"Nombre del servidor (opcional)","note-label":"Nota personal (opcional)","pk-length-error":"La llave p\xfablica debe tener 66 caracteres.","pk-chars-error":"La llave p\xfablica s\xf3lo debe contener caracteres hexadecimales.","use-server-button":"Usar servidor"},"password-dialog":{"title":"Introducir Contrase\xf1a","password-if-any-label":"Contrase\xf1a del servidor (si tiene)","password-label":"Contrase\xf1a del servidor","continue-button":"Continuar"},"filter-dialog":{"country":"El pa\xeds debe ser","name":"El nombre debe contener","location":"La ubicaci\xf3n debe contener","public-key":"La llave p\xfablica debe contener","congestion-rating":"La calificaci\xf3n de congesti\xf3n debe ser","latency-rating":"La calificaci\xf3n de latencia debe ser","rating-options":{"any":"Cualquiera","gold":"Oro","silver":"Plata","bronze":"Bronce"},"country-options":{"any":"Cualquiera"}}},"settings-page":{"setting-small-table-label":"Ajuste","value-small-table-label":"Valor","killswitch":"Killswitch","killswitch-info":"Cuando est\xe1 activo, todas las conexiones de red se desactivar\xe1n si la aplicaci\xf3n se est\xe1 ejecutando pero la protecci\xf3n VPN es interrumpida (por errores temporales o cualquier otro problema). Esto evita fugas de datos.","get-ip":"Obtener informaci\xf3n de IP","get-ip-info":"Cuando est\xe1 activa, la aplicaci\xf3n utilizar\xe1 servicios externos para obtener informaci\xf3n sobre la IP actual.","data-units":"Unidades de datos","data-units-info":"Permite seleccionar las unidades que se utilizar\xe1n para mostrar las estad\xedsticas de transmisi\xf3n de datos.","minimum-hops":"Saltos m\xednimos","minimum-hops-info":"Permite configurar la cantidad m\xednima de saltos que la conexi\xf3n deber\xe1 realizar a trav\xe9s de otros visores de Skywire antes de alcanzar el destino final.","setting-on":"Encendido","setting-off":"Apagado","working-warning":"El sistema est\xe1 ocupado. Por favor, espere a que finalice la operaci\xf3n anterior.","change-while-connected-confirmation":"La protecci\xf3n VPN se interrumpir\xe1 mientras se realiza el cambio. \xbfDesea continuar?","data-units-modal":{"title":"Unidades de Datos","only-bits":"Bits para todas las estad\xedsticas","only-bytes":"Bytes para todas las estad\xedsticas","bits-speed-and-bytes-volume":"Bits para velocidad y bytes para volumen (predeterminado)"}}}}')}}]);