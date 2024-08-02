# Infrastructure

## Prerequisite
- Node.js

## Get AWS credentials
1. Go to the Lambeth Foodbank AWS Start page and login 
2. Click on "Access Keys" under the LambethFoodBank account, and follow the instructions to inject your credentials in the terminal.
3. Additionally, set the environment variable `AWS_ACCOUNT_ID` to the id for the same AWS account
4. To check this has worked, run `aws s3 ls`. You will probably get a single line returned (something like `2024-05-16 11:13:28 cdk-xxxxxxxxx-assets-xxxxxxxxxxxx-eu-west-2`), but as long as it doesn't error you're probably connected. 

## Useful commands
* `npm run build` to compile typescript to js
* `npm run watch` to watch for changes and compile
* `npm run test` to perform the jest unit tests
* `npx cdk deploy` to deploy this stack to your default AWS account/region
* `npx cdk diff` to compare deployed stack with current state
* `npx cdk synth` to emit the synthesized CloudFormation template
* `npm run style` to run prettier on the code
