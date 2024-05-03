# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application's dependencies inside the Docker image
RUN npm install

# Copy the rest of the application's code to the working directory
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the application
CMD [ "node", "app.js" ]