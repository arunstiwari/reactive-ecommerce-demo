### 1. Install the following dependency
```bash
  npm i express redis cors
```

### 2. Expose the endpoints /orders


### 3. For deploying to the Google Cloud Kubernetes cluster, we first need to build the image and push it to google contaier registry
```bash
gcloud builds submit --tag gcr.io/kuberenetes-01-basic/order-service .
```

### 4. We need to build the image for the payment service 
```bash
gcloud builds submit --tag gcr.io/kuberenetes-01-basic/payment-service .
```

### 5. Similarly for Shipping Service
```bash
gcloud builds submit --tag gcr.io/kuberenetes-01-basic/shipping-service .
```
