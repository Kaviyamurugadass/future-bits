import type { SSTConfig } from "sst";
import { SvelteKitSite, Api, Table } from "sst/constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as iam from "aws-cdk-lib/aws-iam";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as targets from "aws-cdk-lib/aws-route53-targets";

export default {
  config(_input) {
    return {
      name: "quick-receipts",
      region: "us-west-2",
    };
  },

  stacks(app) {
    app.stack(function Site({ stack, app }) {
      // Determine the custom domain based on the stage
      let domain;
      if (app.stage === "prod") {
        domain = "quickreceipts.net";
      } else if (app.stage === "beta") {
        domain = "beta.quickreceipts.net";
      } else if (app.stage === "kaviya") {
        domain = "kaviya.quickreceipts.net";
      }

      const site = new SvelteKitSite(stack, "site", {
        customDomain: domain
          ? {
              domainName: domain,
              hostedZone: "quickreceipts.net",
            }
          : undefined,
      });

      // Variables to hold resources that may not be created
      let quickReceiptsTable;
      let api;

      const isProdOrBeta = app.stage === "prod" || app.stage === "beta";
      const isMock = app.stage === "mock";

      if (isProdOrBeta) {
        // Create the DynamoDB table
        quickReceiptsTable = new Table(stack, "QuickReceiptsTable", {
          fields: {
            pk: "string",
            sk: "string",
            created_date: "string",
            receipt_id: "string",
            customer_email: "string",
          },
          primaryIndex: { partitionKey: "pk", sortKey: "sk" },
          globalIndexes: {
            createdDateIndex: {
              partitionKey: "pk",
              sortKey: "created_date",
              projection: ["receipt_id", "customer_email"],
            },
          },
        });

        // Import the existing Lambda function
        const quickReceiptsFunction = lambda.Function.fromFunctionName(
          stack,
          "QuickReceiptsBackend",
          "quick-receipts-backend"
        );

        // Grant the Lambda function read/write permissions to the table
        quickReceiptsTable.cdk.table.grantReadWriteData(quickReceiptsFunction);

        // Add SES send email permissions to the Lambda function
        quickReceiptsFunction.grantPrincipal.addToPrincipalPolicy(
          new iam.PolicyStatement({
            actions: ["ses:SendEmail", "ses:SendRawEmail"],
            resources: ["*"], // Adjust as needed
          })
        );

        // API
        api = new Api(stack, "Api", {
          routes: {
            "ANY /hello": {
              type: "function",
              cdk: {
                function: quickReceiptsFunction,
              },
            },
            "ANY /check": {
              type: "function",
              cdk: {
                function: quickReceiptsFunction,
              },
            },
            "ANY /template": {
              type: "function",
              cdk: {
                function: quickReceiptsFunction,
              },
            },
          },
          cors: {
            allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            allowHeaders: ["Content-Type", "Authorization"],
            allowOrigins: ["*"],
          },
        });
      } else if (isMock) {
        // Create API Gateway RestApi with mock integrations
        api = new apigateway.RestApi(stack, "MockApiGateway", {
          restApiName: "Mock API",
          description: "This API serves as a mock API.",
          deployOptions: {
            stageName: "mock",
          },
        });

        // Helper function to add resources with CORS configurations
        const addMockResource = (path: string, method: string, responseBody: string) => {
          const resource = api.root.addResource(path);

          // Add method with CORS headers
          resource.addMethod(
            method,
            new apigateway.MockIntegration({
              integrationResponses: [
                {
                  statusCode: "200",
                  responseTemplates: {
                    "application/json": responseBody,
                  },
                  responseParameters: {
                    "method.response.header.Access-Control-Allow-Origin": "'*'",
                  },
                },
              ],
              passthroughBehavior: apigateway.PassthroughBehavior.NEVER,
              requestTemplates: {
                "application/json": '{"statusCode": 200}',
              },
            }),
            {
              methodResponses: [
                {
                  statusCode: "200",
                  responseParameters: {
                    "method.response.header.Access-Control-Allow-Origin": true,
                  },
                },
              ],
            }
          );

          // Add OPTIONS method for CORS preflight
          resource.addMethod(
            "OPTIONS",
            new apigateway.MockIntegration({
              integrationResponses: [
                {
                  statusCode: "200",
                  responseTemplates: {
                    "application/json": "",
                  },
                  responseParameters: {
                    "method.response.header.Access-Control-Allow-Headers":
                      "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
                    "method.response.header.Access-Control-Allow-Origin": "'*'",
                    "method.response.header.Access-Control-Allow-Methods":
                      "'OPTIONS,ANY'",
                  },
                },
              ],
              passthroughBehavior: apigateway.PassthroughBehavior.NEVER,
              requestTemplates: {
                "application/json": '{"statusCode": 200}',
              },
            }),
            {
              methodResponses: [
                {
                  statusCode: "200",
                  responseParameters: {
                    "method.response.header.Access-Control-Allow-Headers": true,
                    "method.response.header.Access-Control-Allow-Origin": true,
                    "method.response.header.Access-Control-Allow-Methods": true,
                  },
                },
              ],
            }
          );
        };
        const customerData = [
          { "sno": 1, "customer_name": "John Doe", "email": "john.doe@example.com", "mobile_number": "+1234567890" },
          { "sno": 2, "customer_name": "Jane Smith", "email": "jane.smith@example.com", "mobile_number": "+1234567891" },
          { "sno": 3, "customer_name": "Emily Johnson", "email": "emily.johnson@example.com", "mobile_number": "+1234567892" },
          { "sno": 4, "customer_name": "Michael Brown", "email": "michael.brown@example.com", "mobile_number": "+1234567893" },
          { "sno": 5, "customer_name": "Linda Davis", "email": "linda.davis@example.com", "mobile_number": "+1234567894" },
          { "sno": 6, "customer_name": "Robert Wilson", "email": "robert.wilson@example.com", "mobile_number": "+1234567895" },
          { "sno": 7, "customer_name": "Patricia Garcia", "email": "patricia.garcia@example.com", "mobile_number": "+1234567896" },
          { "sno": 8, "customer_name": "David Martinez", "email": "david.martinez@example.com", "mobile_number": "+1234567897" },
          { "sno": 9, "customer_name": "Mary Hernandez", "email": "mary.hernandez@example.com", "mobile_number": "+1234567898" },
          { "sno": 10, "customer_name": "James Lee", "email": "james.lee@example.com", "mobile_number": "+1234567899" }
        ];
        const receiptHistory = [
          {
            receipt_id: 1, 
            receipt_name: "Receipt Innovative global paradigm",
            receipt_sended_date: "2023-01-15",
            receipt_amount: "250.00",
          },
          {
            receipt_id: 2, 
            receipt_name: "Receipt Seamless user experience",
            receipt_sended_date: "2022-12-20",
            receipt_amount: "345.75",
          },
          {
            receipt_id: 3,
            receipt_name: "Receipt Cutting-edge strategy",
            receipt_sended_date: "2023-02-28",
            receipt_amount: "180.50",
          },
          {
            receipt_id: 4, 
            receipt_name: "Receipt Dynamic synergy",
            receipt_sended_date: "2023-03-10",
            receipt_amount: "400.00",
          },
          {
            receipt_id: 5, 
            receipt_name: "Receipt Next-gen solutions",
            receipt_sended_date: "2022-11-05",
            receipt_amount: "275.90",
          },
          {
            receipt_id: 6, 
            receipt_name: "Receipt Proactive engagement",
            receipt_sended_date: "2023-04-22",
            receipt_amount: "150.25",
          },
          {
            receipt_id: 7,
            receipt_name: "Receipt Holistic growth",
            receipt_sended_date: "2023-05-15",
            receipt_amount: "99.99",
          },
          {
            receipt_id: 8, 
            receipt_name: "Receipt Optimized performance",
            receipt_sended_date: "2022-10-10",
            receipt_amount: "580.00",
          },
          {
            receipt_id: 9, 
            receipt_name: "Receipt Comprehensive analysis",
            receipt_sended_date: "2023-06-18",
            receipt_amount: "230.40",
          },
          {
            receipt_id: 10,
            receipt_name: "Receipt Enhanced collaboration",
            receipt_sended_date: "2023-07-25",
            receipt_amount: "315.60",
          },
        ];
        
        const templates = {"templates":[
          {
            pk: "TEMPLATE#001",
            sk: "USER#001",
            image_url: "https://placehold.co/200x200@2x.png",
            template_name: "Modern Invoice Template",
            type: "template",
            coordinates: {
              name: {
                color: "#0000FF",
                size: 16,
                x: 131,
                y: 373,
              },
              date: {
                color: "#0000FF",
                size: 16,
                x: 131,
                y: 400,
              },
              school: {
                color: "#0000FF",
                size: 16,
                x: 131,
                y: 400,
              },
            },
          },
          {
            pk: "TEMPLATE#002",
            sk: "USER#002",
            image_url: "https://placehold.co/200x200@2x.png",
            template_name: "Minimalistic Receipt Template",
            type: "template",
            coordinates: {
              name: {
                color: "#FF5733",
                size: 14,
                x: 150,
                y: 350,
              },
            },
          },
          {
            pk: "TEMPLATE#003",
            sk: "USER#003",
            image_url: "https://placehold.co/200x200@2x.png",
            template_name: "Classic Invoice Template",
            type: "template",
            coordinates: {}
          },
          {
            pk: "TEMPLATE#004",
            sk: "USER#004",
            image_url: "https://placehold.co/200x200@2x.png",
            template_name: "Elegant Receipt Template",
            type: "template",
            coordinates: {
              name: {
                color: "#6F42C1",
                size: 20,
                x: 140,
                y: 380,
              },
              date: {
                color: "#6F42C1",
                size: 20,
                x: 140,
                y: 410,
              },
            },
          },
          {
            pk: "TEMPLATE#005",
            sk: "USER#005",
            image_url: "https://placehold.co/200x200@2x.png",
            template_name: "Bold Invoice Template",
            type: "template",
            coordinates: {
              name: {
                color: "#DC3545",
                size: 22,
                x: 130,
                y: 365,
              },
              date: {
                color: "#DC3545",
                size: 22,
                x: 130,
                y: 395,
              },
            },
          },
          {
            pk: "TEMPLATE#006",
            sk: "USER#006",
            image_url: "https://placehold.co/200x200@2x.png",
            template_name: "Creative Receipt Template",
            type: "template",
            coordinates: {
              name: {
                color: "#17A2B8",
                size: 16,
                x: 145,
                y: 375,
              },
              date: {
                color: "#17A2B8",
                size: 16,
                x: 145,
                y: 405,
              },
            },
          },
        ]}
        
        
        // Use the helper function to add resources
        addMockResource("hello", "GET",'{"message": "Hello from mock API"}');
        addMockResource("check", "GET", '{"status": "Check successful"}');
        addMockResource("customer", "GET", JSON.stringify(customerData));
        addMockResource("receiptHistory", "POST", JSON.stringify(receiptHistory));
        addMockResource("template", "POST", JSON.stringify(templates));
        addMockResource("batch", "POST", '{"status": "Okay"}');
        addMockResource("individual", "POST", '{"status": "Okay"}');



      }

      // Prepare outputs
      const outputs: Record<string, string> = {};

      if (site.url) {
        outputs["url"] = site.url;
      }

      if (api) {
        outputs["apiUrl"] = api.url ?? "API URL not available";
      }

      if (quickReceiptsTable) {
        outputs["tableName"] = quickReceiptsTable.tableName;
      }

      stack.addOutputs(outputs);
    });
  },
} satisfies SSTConfig;