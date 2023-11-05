FROM node:18.17.0-alpine

# Working DIR
WORKDIR /app

# Copy and download dependencies
COPY package.json yarn.lock ./

# Install files
RUN yarn --frozen-lockfile

# Copy the source files into the image
COPY . .

# Expose API PORT
EXPOSE 4000

CMD yarn start