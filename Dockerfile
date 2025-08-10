# Multi-stage Dockerfile para Angular em produção

# Estágio 1: Build da aplicação Angular
FROM node:18-alpine AS build

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Build da aplicação para produção
RUN npm run build:prod

# Estágio 2: Servir com nginx
FROM nginx:alpine AS production

# Remover arquivos padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar arquivos buildados do estágio anterior
COPY --from=build /app/docs /usr/share/nginx/html

# Expor porta 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]