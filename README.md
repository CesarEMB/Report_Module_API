Para ejecutar el sistema es necesario tener conocimiento de Node.js y MongoDB

npm run dev //Para correr el sistema en un entorno de desarrollo
npm run build && npm run start //Para construir el entorno de producción y ejecutar

Datos necesarios en la base de datos:

career //Registro de las carreras 
director //Registro del director actual
document //Registro de los documentos generados por el sistema
enrolledSubject //Registro de las materias "inscritas"
period //Registro de los periodos 
periodList //Registo de los periodos segun el estudiante
student //Registro de los datos del estudiante 
subjet //Registro de las materias existentes
user //Registro de los datos del usuario necesario para iniciar sesion
yearSubject //Registro de una lista de materias segun el periodo 

Variables de entorno del sistema:

//Para Dev
PORT= //Puerto donde se podrá acceder al sistema
MONGODB_URI_TEST= //Base de datos para pruebas (ej: local)

//Necesarias por el sistema
MONGODB_URI= //Base de datos para el despliegue (ej: un host)
TOKEN= //Token usado por jsonwebtoken para la sesión
