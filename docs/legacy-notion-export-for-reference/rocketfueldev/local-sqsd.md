# Local SQSD

You can use the [https://github.com/mogadanez/sqsd](https://github.com/mogadanez/sqsd) project to simulate Amazon SQS Daemon ("sqsd") used on AWS Beanstalk worker

Use the following environment variables to set up correctly the sqsd service

```bash
export SQSD_RUN_DAEMONIZED=1
export SQSD_WORKER_HTTP_URL=http://domain.to.job.server:port/jobs
export SQSD_QUEUE_URL=https://sqs.<AWS_REGION>.amazonaws.com/<AWS_ACCOUNT>/<SQS_QUEUE>
```

That will automatically propagate all SQS jobs to the the `job-server` instance

## Example Local Host SQSD:

`vim start-sqsd.sh`

```bash
#!/bin/bash
## Need to install sqsd globally: npm -i g sqsd
echo "Starting SQSD"

export AWS_PROFILE=dev
echo $AWS_PROFILE

export SQSD_RUN_DAEMONIZED=1
export SQSD_WORKER_HTTP_URL=http://localhost:3002/jobs
export DEBUG=sqsd,sqsd:*
export SQSD_QUEUE_URL=https://sqs.us-west-1.amazonaws.com/220623082201/collabland-dev-caleb
# export AWS_ACCESS_KEY_ID=xxx
# export AWS_SECRET_ACCESS_KEY=xxx

sqsd
```

`bash start-sqsd.sh`