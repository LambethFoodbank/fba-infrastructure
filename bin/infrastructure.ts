#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { InfrastructureStack } from "../lib/infrastructure-stack";

const awsAccountId = process.env['AWS_ACCOUNT_ID']

if (awsAccountId === undefined) {
  throw new Error('AWS_ACCOUNT_ID environment variable is not set.')
}

const app = new cdk.App();
new InfrastructureStack(app, "InfrastructureStack", {
  env: { account: awsAccountId, region: "eu-west-2" },
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
