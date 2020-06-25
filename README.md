### 1. First create a cluster in Kuberenetes using the following command
```bash
gcloud container clusters create ecommerce-app --num-nodes 2 --enable-basic-auth --issue-client-certificate --zone europe-west1-b
```

### 2. Then create a docker image of order-service using gcloud build and push it to google container repository using following command
```bash
cd ./orderservice

gcloud builds submit --tag gcr.io/kuberenetes-01-basic/order-service .

```

### 3. Then create a docker image of payment-service using gcloud build and push it to google container repository using following command
```bash
cd ./paymentservice

gcloud builds submit --tag gcr.io/kuberenetes-01-basic/payment-service .

```

### 4. Then create a docker image of shipping-service using gcloud build and push it to google container repository using following command
```bash
cd ./shippingservice

gcloud builds submit --tag gcr.io/kuberenetes-01-basic/shipping-service .

```

### 5. Now all the docker images are pushed to google container repository. Now we can deploy the redis first
```bash
kubectl create -f redis.yaml

```
Verify deployments using 
```bash
kubectl get deployments

kubectl get services
```

### 6. Now do the deployments of orderservice, paymentservice and shipping service
```bash
kubectl create -f orderservice.yaml

kubectl create -f paymentservice.yaml

kubectl create -f shippingservice.yaml
```

### 7. Now once the service is running, open the postman http://<external_ip_order_service>/orders/initiated and use the POST. In the body add the following json 
```json
{
	"order": {
		"id": "Order-121",
		"desc": "ABC"
	}
}
```
### 8. Now once you have tested it, don't forgt to delete the cluster using the following command
```bash
gcloud container clusters delete ecommerce-app
```
