import fs from 'fs'
import path from 'path'

interface IgetPNGFilesDirectory {
  files: string[]
  directory: string
}

const getPNGFilesDirectory = (instruction: string[] | string): IgetPNGFilesDirectory => {
  const dirname = path.dirname(new URL(import.meta.url).pathname)
  const directory = path.join(dirname, '../imgs')

  if (typeof instruction === 'string') {
    const regex = new RegExp(instruction, 'i')
    const files = fs.readdirSync(directory).filter(arquivo => regex.test(arquivo))
    return { files, directory }
  }
  const files: string[] = []

  instruction.forEach(name => {
    const fileName = `${name}-2.png`
    if (fs.existsSync(`${directory}/${fileName}`)) {
      files.push(fileName)
    } else {
      files.push('back-end.png')
    }
  })

  return { files, directory }
}

export default getPNGFilesDirectory
