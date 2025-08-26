# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port that Vite dev server runs on
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
