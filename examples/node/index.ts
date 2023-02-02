import path from "path"
import { cwd } from "process"

const examplesPath = path.resolve(cwd(), 'examples')

console.log(examplesPath)