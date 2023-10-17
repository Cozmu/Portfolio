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

export default obterArquivosPorNome
