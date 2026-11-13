# Prácticas Connect – Unidad 3

Prototipo académico para gestionar prácticas profesionales.

## Funcionalidades
- Registro básico de estudiantes y empresas.
- Publicación y búsqueda de vacantes.
- Postulación de estudiantes.
- Seguimiento del estado de postulaciones.
- Persistencia de datos en el navegador (`localStorage`).

## Tecnologías
React, Vite, JavaScript y Vitest.

## Requisitos
Instalar Node.js (versión LTS) y Visual Studio Code.

## Ejecutar
1. Descomprime el ZIP y abre la carpeta en VS Code.
2. Abre Terminal > New Terminal.
3. Ejecuta `npm install`.
4. Ejecuta `npm run dev`.
5. Abre la URL local que indique Vite (normalmente http://localhost:5173).

## Pruebas
Ejecuta `npm test`. Incluye tres pruebas unitarias: validación de correo, filtro de vacantes y creación de vacantes.

## Limitaciones
Es un prototipo académico frontend. Los datos se guardan en el navegador y no se comparten entre usuarios o dispositivos. No tiene autenticación real ni backend/base de datos central. No debe usarse con datos personales reales ni en producción.

## GitHub
Crea un repositorio vacío y luego ejecuta:
`git init`  
`git add .`  
`git commit -m "Primer prototipo Practicas Connect"`  
`git branch -M main`  
`git remote add origin URL_DEL_REPOSITORIO`  
`git push -u origin main`
