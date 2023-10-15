# Use the official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn install --freeze-lockfile

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the port that Next.js app will run on
EXPOSE 3001

# Define the command to start the Next.js app on port 7111
CMD ["yarn", "start", "--", "-p", "7111"]
