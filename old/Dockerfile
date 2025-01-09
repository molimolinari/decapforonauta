# Usa una imagen base de Node.js
FROM node:18-alpine

# Crea el directorio de la aplicación y establece el directorio de trabajo
WORKDIR /app

# Instala Gatsby CLI globalmente
RUN npm install next@latest react@latest react-dom@latest

# Copia el archivo package.json para instalar dependencias
COPY package.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto en el que Gatsby servirá la aplicación (en modo desarrollo)
EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]