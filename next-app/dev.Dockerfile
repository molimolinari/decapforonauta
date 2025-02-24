# syntax=docker.io/docker/dockerfile:1

FROM node:18-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json ./

# Instalar dependencias
RUN npm install

COPY src ./src
COPY public ./public
COPY content ./content
COPY next.config.js .
COPY tsconfig.json .

#Markdown
RUN npm install gray-matter remark remark-html

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

# Comando por defecto para iniciar la aplicación
CMD ["npm", "run", "dev"]

