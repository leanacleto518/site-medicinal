# 📋 Guia de Instalação - Node.js e Dependências

## 🔧 Pré-requisitos

### 1. Instalar Node.js

**Opção 1: Download Oficial (Recomendado)**
1. Acesse: https://nodejs.org/
2. Baixe a versão LTS (Long Term Support)
3. Execute o instalador e siga as instruções
4. Reinicie o terminal/prompt de comando

**Opção 2: Via Chocolatey (Windows)**
```powershell
# Instalar Chocolatey primeiro (se não tiver)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Instalar Node.js
choco install nodejs
```

### 2. Verificar Instalação
```bash
node --version
npm --version
```

## 🚀 Instalação do Projeto

Após instalar o Node.js:

```bash
# 1. Instalar dependências
npm install

# 2. Gerar CSS inicial
npm run build-css

# 3. Iniciar desenvolvimento
npm run dev
```

## 🌐 Alternativa sem Node.js

Se preferir não instalar Node.js, você pode usar o Tailwind via CDN:

1. Substitua a linha no `index.html`:
   ```html
   <!-- De: -->
   <link rel="stylesheet" href="dist/output.css">
   
   <!-- Para: -->
   <script src="https://cdn.tailwindcss.com"></script>
   <script>
     tailwind.config = {
       theme: {
         extend: {
           colors: {
             'verde-escuro': '#2E7D32',
             'verde-claro': '#A5D6A7',
             'amarelo-banana': '#FBC02D',
             'laranja': '#FB8C00',
             'vermelho-maca': '#E53935',
             'cinza-claro': '#F5F5F5',
             'cinza-texto': '#424242',
           }
         }
       }
     }
   </script>
   ```

2. Abra o `index.html` diretamente no navegador

## ⚠️ Problemas Comuns

### "npm não é reconhecido"
- Node.js não está instalado ou não está no PATH
- Reinicie o terminal após a instalação
- Verifique se a instalação foi bem-sucedida

### Erro de permissões (Linux/Mac)
```bash
sudo npm install
```

### Porta 3000 ocupada
```bash
# Usar outra porta
npx live-server --port=8080
```