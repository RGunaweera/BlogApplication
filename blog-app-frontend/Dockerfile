# Stage 1: Build the React app
FROM node:18-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Install serve globally to serve the build folder
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Set the command to start the app
CMD ["serve", "-s", "build"]