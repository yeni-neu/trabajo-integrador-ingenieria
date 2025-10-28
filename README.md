# trabajo-integrador-ingenieria

## Descripción

 Una mini aplicación web que cambia el color de fondo al hacer clic en un botón. 
 
 ## Tecnologías utilizadas 
 
 - HTML5 semántico 
 - CSS3 
 - JavaScript 
 - Docker + Nginx (para despliegue estático) 
 
 ## Funcionalidad 
 
 - Botón para generar un color aleatorio. 
 - Fondo de la página cambia dinámicamente. 
 - Muestra el código del color actual en pantalla. 
 
 ## Cómo ejecutar el proyecto con Docker 
 
 Construye la imagen del contenedor y ejecútala:

```bash
docker build -t cambiador-fondo .
docker run -d -p 8080:80 cambiador-fondo
```

## Verificar el contenedor en ejecución 

Para comprobar que el contenedor se está ejecutando correctamente:

```bash
docker ps
```

## Visualizar la aplicación 

Abre el navegador y accede a: http://localhost:8080