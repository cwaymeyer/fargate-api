#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FargateApiStack } from '../lib/fargate-api-stack';

const app = new cdk.App();
new FargateApiStack(app, 'FargateApiStack');
