# Docker - Portfólio Lucas Teófilo

Este documento contém instruções para executar o portfólio em produção usando Docker.

## 🐳 Pré-requisitos

- Docker instalado
- Docker Compose instalado (opcional, mas recomendado)

## 🚀 Como executar

### Opção 1: Usando Docker Compose (Recomendado)

```bash
# Construir e executar o container
docker-compose up -d --build

# Verificar se está rodando
docker-compose ps

# Ver logs
docker-compose logs -f

# Parar o container
docker-compose down
```

### Opção 2: Usando Docker diretamente

```bash
# Construir a imagem
docker build -t portfolio-lucasteoffilo .

# Executar o container
docker run -d -p 8080:80 --name portfolio portfolio-lucasteoffilo

# Verificar se está rodando
docker ps

# Ver logs
docker logs portfolio

# Parar e remover o container
docker stop portfolio
docker rm portfolio
```

## 🌐 Acessando o site

Após executar qualquer uma das opções acima, o portfólio estará disponível em:

- **URL:** http://localhost:8080

## 📁 Estrutura do projeto

```
.
├── Dockerfile              # Configuração do container de produção
├── docker-compose.yml       # Orquestração do container
├── .dockerignore           # Arquivos ignorados no build
├── index.html              # Página principal
├── trabalhos.html          # Página de trabalhos
└── assets/                 # Recursos estáticos
    ├── css/
    ├── js/
    ├── img/
    └── font/
```

## ⚙️ Configurações do Docker

### Dockerfile
- **Base:** nginx:alpine (leve e seguro)
- **Porta:** 80 (mapeada para 8080 no host)
- **Recursos:** Cache otimizado, compressão gzip

### Docker Compose
- **Porta:** 8080:80
- **Rede:** portfolio-network
- **Health Check:** Verificação automática de saúde
- **Restart Policy:** unless-stopped

## 🔧 Comandos úteis

```bash
# Reconstruir apenas a imagem
docker-compose build

# Executar em modo de desenvolvimento (com logs)
docker-compose up

# Limpar containers e imagens não utilizadas
docker system prune -a

# Verificar uso de recursos
docker stats
```

## 🚀 Deploy em produção

Para deploy em produção, considere:

1. **Usar um reverse proxy** (nginx, traefik)
2. **Configurar SSL/TLS** (Let's Encrypt)
3. **Configurar domínio personalizado**
4. **Monitoramento e logs**

### Exemplo com Traefik (labels já incluídas no docker-compose.yml)

```yaml
# Adicionar ao docker-compose.yml se usar Traefik
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.portfolio.rule=Host(`seudominio.com`)"
  - "traefik.http.routers.portfolio.tls.certresolver=letsencrypt"
```

## 📞 Suporte

Para dúvidas ou problemas:
- **Email:** lucasteofilo.contato@gmail.com
- **WhatsApp:** (21) 9 9948-0951