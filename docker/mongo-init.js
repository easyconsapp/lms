// 1. Cria o usuário do banco 'lms' (opcional, se necessário)
db.createUser({
  user: "lms_user",
  pwd: "lms_password",
  roles: [{ role: "readWrite", db: "lms" }]
});

// 2. Função para listar arquivos JSON no diretório 'data'
function listJSONFiles(dir) {
  const files = listFiles(dir); // Lista todos os arquivos no diretório
  return files.filter(file => file.endsWith('.json')).map(file => file.replace('.json', ''));
}

// 3. Função para importar dados de um arquivo JSON para uma collection
function loadCollectionFromFile(collectionName, dir) {
  const filePath = `${dir}/${collectionName}.json`;
  try {
    const fileContent = cat(filePath);
    const data = JSON.parse(fileContent);
    
    if (data.length > 0) {
      db[collectionName].insertMany(data);
      print(`[Success] Collection '${collectionName}' carregada com ${data.length} documentos.`);
    } else {
      print(`[Warning] Arquivo ${filePath} está vazio.`);
    }
  } catch (e) {
    print(`[Error] Falha ao carregar ${collectionName}: ${e}`);
  }
}

// 4. Diretório onde os arquivos JSON estão armazenados
const dataDir = '/docker-entrypoint-initdb.d/data';

// 5. Carrega todas as collections automaticamente
const collections = listJSONFiles(dataDir);
if (collections.length > 0) {
  print(`[Info] Arquivos JSON encontrados: ${collections.join(', ')}`);
  collections.forEach(collection => loadCollectionFromFile(collection, dataDir));
} else {
  print('[Warning] Nenhum arquivo JSON encontrado em /docker-entrypoint-initdb.d/data/');
}