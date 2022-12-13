import {
  aws_ec2 as ec2,
  aws_ecs as ecs,
  aws_ecs_patterns as ecs_patterns,
  Stack,
  StackProps,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export class FargateApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "myAPI", { maxAzs: 2 });
    const cluster = new ecs.Cluster(this, "Cluster", { vpc });

    new ecs_patterns.ApplicationLoadBalancedFargateService(
      this,
      "FargateService",
      {
        cluster,
        taskImageOptions: {
          image: ecs.ContainerImage.fromAsset("./src"),
        },
      }
    );
  }
}
