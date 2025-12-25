# Frutas na Medicina Doméstica

Site moderno e responsivo sobre tratamentos naturais com frutas, com **versões específicas para mobile e desktop** que resolvem definitivamente o problema do header.

## 🚀 Versões Disponíveis

### 🔄 **Detecção Automática** (Recomendado)
```
Arquivo: index-auto.html
```
- Detecta automaticamente o dispositivo
- Redireciona para a versão apropriada
- Fallback manual disponível

### 📱 **Versão Mobile**
```
Arquivo: mobile.html
```
- Otimizada para smartphones e tablets
- Header fixo que cobre 100% da largura
- Layout vertical e navegação simplificada
- Carrossel automático

### 💻 **Versão Desktop**
```
Arquivo: desktop.html
```
- Otimizada para computadores e laptops
- Header com largura total garantida
- Layout em grid e hover effects
- Carrossel interativo completo

### 🎨 **Versões Tailwind** (Desenvolvimento)
```
index.html - Versão com Tailwind compilado
index-cdn.html - Versão com Tailwind via CDN
```

## 🎯 Problema Resolvido

O header não cobria toda a largura horizontal em dispositivos móveis. A solução foi criar **versões específicas** com técnicas CSS diferentes:

- **Mobile**: `position: fixed` com `width: 100vw`
- **Desktop**: Técnica de margin negativo robusta

## 📦 Instalação e Uso

### Uso Imediato (Sem Node.js)
```bash
# Abrir no navegador
index-auto.html  # Detecção automática
mobile.html      # Versão mobile
desktop.html     # Versão desktop
```

### Desenvolvimento com Node.js
```bash
# 1. Instalar Node.js (https://nodejs.org/)
# 2. Instalar dependências
npm install

# 3. Iniciar desenvolvimento
npm run dev
```

## 🛠️ Tecnologias Utilizadas

- **Tailwind CSS** - Framework CSS utilitário
- **Node.js** - Ambiente de execução (opcional)
- **JavaScript** - Detecção de dispositivo e interações
- **Google Fonts** - Tipografia (Poppins + Open Sans)
- **Bootstrap Icons** - Ícones

## 📁 Estrutura do Projeto

```
├── index-auto.html       # Detecção automática (RECOMENDADO)
├── mobile.html          # Versão mobile otimizada
├── desktop.html         # Versão desktop otimizada
├── index.html           # Versão Tailwind compilado
├── index-cdn.html       # Versão Tailwind CDN
├── src/
│   └── input.css        # CSS de entrada Tailwind
├── dist/
│   └── output.css       # CSS compilado
├── carrosel/            # Imagens do carrossel
├── icon/                # Ícones e favicons
├── imgsintoma/         # Imagens dos sintomas
├── tratamentos/        # Páginas de tratamentos
├── interact.js         # JavaScript para interações
├── package.json        # Configurações Node.js
├── tailwind.config.js  # Configurações Tailwind
└── VERSOES-SITE.md     # Documentação das versões
```

## 🎨 Características por Versão

### Mobile (mobile.html)
- ✅ Header fixo 100% largura
- ✅ Layout vertical otimizado
- ✅ Cards empilhados
- ✅ Botões grandes para touch
- ✅ Carrossel automático
- ✅ Tipografia mobile-friendly

### Desktop (desktop.html)
- ✅ Header largura total garantida
- ✅ Layout em grid responsivo
- ✅ Hover effects e animações
- ✅ Carrossel interativo
- ✅ Tipografia e espaçamentos generosos

## 🔧 Personalização

### Cores Personalizadas
Definidas no Tailwind config:
- `verde-escuro`: #2E7D32
- `verde-claro`: #A5D6A7
- `amarelo-banana`: #FBC02D
- `laranja`: #FB8C00

### Modificar Detecção de Dispositivo
Edite `index-auto.html`:
```javascript
const isMobile = /* seus critérios aqui */;
```

## 📱 Responsividade

### Critérios de Detecção Mobile:
- User Agent móvel
- Largura <= 768px
- Suporte a touch
- Múltiplos pontos de toque

### Breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

### Para produção:
1. Faça upload de todos os arquivos HTML
2. Inclua pastas: `carrosel/`, `icon/`, `imgsintoma/`, `tratamentos/`
3. Inclua: `interact.js`
4. Configure `index-auto.html` como página inicial

### Com Node.js:
```bash
npm run build  # Gera CSS otimizado
```

## 🤝 Manutenção

### Atualizar conteúdo:
- **Mobile**: Editar `mobile.html`
- **Desktop**: Editar `desktop.html`
- **Detecção**: Ajustar `index-auto.html`

### Adicionar páginas:
- Criar versões mobile e desktop
- Manter navegação consistente

## 📊 Benefícios da Nova Abordagem

- ✅ **Header perfeito** em todos os dispositivos
- ✅ **Performance otimizada** por tipo de dispositivo
- ✅ **UX específica** para mobile e desktop
- ✅ **Manutenção simplificada**
- ✅ **Flexibilidade total** de design

## 📄 Licença

MIT License - veja o arquivo de licença para detalhes.

---

**🎉 Problema do header resolvido definitivamente!**
Use `index-auto.html` para a melhor experiência automática.