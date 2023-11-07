# Estágio 1: Build da aplicação Angular
FROM node:18.12.1-alpine3.17 AS build

WORKDIR /app

# Copie os arquivos de configuração e pacotes
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm i

# Copie o código-fonte da aplicação
COPY . .

# Realize o build da aplicação
RUN npm run build --

# Estágio 2: Implantação no Nginx
FROM nginx:alpine

# Copie os arquivos de build do estágio 1 para o servidor Nginx
COPY --from=build /app/dist/pokedex-main /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
