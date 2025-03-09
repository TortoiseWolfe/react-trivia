FROM node:20-alpine3.19

# Install tini
RUN apk add --no-cache tini

WORKDIR /app

COPY package.json package-lock*.json ./
RUN npm install && npm cache clean --force

COPY . .

# Expose Vite's default port
EXPOSE 5173
# Expose Storybook's default port
EXPOSE 6006

# Use tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]

# Default to development mode with host flag to expose on all interfaces
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]