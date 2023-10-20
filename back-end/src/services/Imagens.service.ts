import fs from 'fs'
import path from 'path'

const obterArquivosPorNome = (nomeDoArquivo: string): string[] => {
  const dirname = path.dirname(new URL(import.meta.url).pathname)
  const diretorio = path.join(dirname, '../imgs')

  try {
    const arquivos = fs.readdirSync(diretorio)
    const arquivosFiltrados = arquivos.filter((arquivo) => {
      return arquivo.startsWith(nomeDoArquivo + '-')
    })

    const caminhosCompletos = arquivosFiltrados.map((arquivo) => {
      return path.join(diretorio, arquivo)
    })
    console.log(caminhosCompletos)

    return caminhosCompletos
  } catch (error) {
    console.error('Erro ao obter arquivos:', error)
    return []
  }
}

interface IgetPNGFilesDirectory {
  files: string[]
  directory: string
}

const GetPNGFilesDirectory = (fileName: string): IgetPNGFilesDirectory => {
  const dirname = path.dirname(new URL(import.meta.url).pathname)
  const directory = path.join(dirname, '../imgs')
  const regex = new RegExp(`^${fileName}(-\\d+)?\\.png$`, 'i')

  const files = fs.readdirSync(directory).filter(arquivo => regex.test(arquivo))

  return { files, directory }
}

export { obterArquivosPorNome }
export default GetPNGFilesDirectory
