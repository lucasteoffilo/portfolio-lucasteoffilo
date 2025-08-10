# Docker - Portfólio Angular Lucas Teófilo

Este documento contém instruções para executar o portfólio Angular em produção usando Docker.

## 🐳 Pré-requisitos

- Docker instalado
- Docker Compose instalado (opcional, mas recomendado)
- Node.js 18+ (apenas para desenvolvimento local)

## 🚀 Como executar

### Opção 1: Usando Docker Compose (Recomendado)

#### Produção
```bash
# Construir e executar em produção
docker-compose up -d --build portfolio-prod

# Verificar se está rodando
docker-compose ps

# Ver logs
docker-compose logs -f portfolio-prod

# Parar o container
docker-compose down
```

#### Desenvolvimento
```bash
# Executar em modo desenvolvimento
docker-compose --profile dev up -d --build portfolio-dev

# Ver logs do desenvolvimento
docker-compose logs -f portfolio-dev
```

### Opção 2: Usando Docker diretamente

```bash
# Construir a imagem
docker build -t lucasteoffilo-portfolio .

# Executar o container
docker run -d -p 8080:80 --name portfolio lucasteoffilo-portfolio

# Verificar se está rodando
docker ps

# Ver logs
docker logs portfolio

# Parar e remover o container
docker stop portfolio
docker rm portfolio
```

## 🌐 Acessando a aplicação

Após executar qualquer uma das opções acima:

- **Produção:** http://localhost:8080
- **Desenvolvimento:** http://localhost:4200

## 📁 Estrutura do projeto

```
.
├── Dockerfile              # Multi-stage build para Angular
├── docker-compose.yml       # Orquestração dos containers
├── .dockerignore           # Arquivos ignorados no build
├── package.json            # Dependências do Angular
├── angular.json            # Configuração do Angular
├── src/                    # Código fonte da aplicação
│   ├── app/
│   ├── assets/
│   ├── environments/
│   └── styles/
└── docs/                   # Build de produção (gerado)
```

## ⚙️ Configurações do Docker

### Dockerfile Multi-stage

**Estágio 1 - Build:**
- Base: `node:18-alpine`
- Instala dependências com `npm ci`
- Executa build de produção com `npm run build:prod`
- Output: pasta `docs/`

**Estágio 2 - Produção:**
- Base: `nginx:alpine`
- Copia arquivos buildados do estágio anterior
- Configuração otimizada para Angular SPA
- Headers de segurança
- Compressão gzip
- Cache de arquivos estáticos

### Docker Compose

**Serviço de Produção:**
- Porta: 8080:80
- Health check automático
- Restart policy: unless-stopped
- Labels para Traefik

**Serviço de Desenvolvimento:**
- Porta: 4200:4200
- Volume binding para hot reload
- Profile: dev (opcional)

## 🔧 Comandos úteis

```bash
# Reconstruir apenas a imagem
docker-compose build portfolio-prod

# Executar em modo de desenvolvimento com logs
docker-compose --profile dev up portfolio-dev

# Limpar containers e imagens não utilizadas
docker system prune -a

# Verificar uso de recursos
docker stats

# Acessar container em execução
docker exec -it lucasteoffilo-portfolio-prod sh

# Ver configuração do nginx
docker exec lucasteoffilo-portfolio-prod cat /etc/nginx/conf.d/default.conf
```

## 🚀 Deploy em produção

Para deploy em produção, considere:

### 1. Variáveis de ambiente
```bash
# Criar arquivo .env
echo "NODE_ENV=production" > .env
echo "API_URL=https://api.seudominio.com" >> .env
```

### 2. Reverse proxy com Traefik
```yaml
# docker-compose.prod.yml
version: '3.8'
services:
  portfolio:
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.portfolio.rule=Host(`seudominio.com`)"
      - "traefik.http.routers.portfolio.tls.certresolver=letsencrypt"
      - "traefik.http.routers.portfolio.middlewares=secure-headers"
```

### 3. SSL/TLS com Let's Encrypt
```bash
# Usar Traefik ou Caddy para SSL automático
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### 4. Monitoramento
```bash
# Adicionar healthcheck personalizado
wget --quiet --tries=1 --spider http://localhost/health || exit 1
```

## 🔒 Segurança

O Dockerfile inclui:
- Headers de segurança (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)
- Usuário não-root no nginx
- Imagens Alpine (menor superfície de ataque)
- Multi-stage build (reduz tamanho da imagem final)

## 📊 Otimizações

- **Build otimizado:** AOT compilation, tree-shaking, minificação
- **Cache de dependências:** Layers Docker otimizadas
- **Compressão gzip:** Reduz tamanho dos arquivos transferidos
- **Cache de arquivos estáticos:** Headers de cache para melhor performance
- **Health checks:** Monitoramento automático da aplicação

## 🐛 Troubleshooting

### Problema: Build falha
```bash
# Limpar cache do Docker
docker builder prune -a

# Verificar logs detalhados
docker-compose build --no-cache --progress=plain
```

### Problema: Aplicação não carrega
```bash
# Verificar logs do nginx
docker logs lucasteoffilo-portfolio-prod

# Verificar configuração
docker exec lucasteoffilo-portfolio-prod nginx -t
```

### Problema: Roteamento não funciona
- Verifique se a configuração `try_files $uri $uri/ /index.html;` está presente
- Confirme que é uma SPA Angular

## 📞 Suporte

Para dúvidas ou problemas:
- **Email:** lucasteofilo.contato@gmail.com
- **WhatsApp:** (21) 9 9948-0951

## 📝 Notas de versão

- **v1.0:** Dockerfile multi-stage inicial
- **v1.1:** Adicionado docker-compose e configurações de segurança
- **v1.2:** Otimizações de cache e compressão