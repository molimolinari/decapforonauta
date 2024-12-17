# Usa una imagen base de Node.js
FROM node:18-alpine

# Crea el directorio de la aplicación y establece el directorio de trabajo
WORKDIR /app

# Instala Gatsby CLI globalmente
RUN npm install -g gatsby-cli

# Copia el archivo package.json para instalar dependencias
COPY package.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto en el que Gatsby servirá la aplicación (en modo desarrollo)
EXPOSE 8000

# Comando para iniciar el servidor de desarrollo de Gatsby
CMD ["gatsby", "develop", "-H", "0.0.0.0"]