import { Router } from "express";
import { readdirSync} from "fs"

const PATH_ROUTER = `${__dirname}`

const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file
}

//Escaneo de los archivos dentro del directorio
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index') {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(cleanName)
            router.use(`/api/${cleanName}`, moduleRouter.router)
        })
       
    }
}) 


export { router }