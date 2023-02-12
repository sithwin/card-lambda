# Install Serverless

npm i -g serverless@2

# Configure the default profile

serverless config credentials --provider aws --key 1234 --secret 5678

# Create node js Project

serverless create -t aws-nodejs
npm init -y
