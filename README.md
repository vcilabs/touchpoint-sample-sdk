# Touchpoint sample SDK

### Setup

1. Navigate to the Digital Channels tab in Touchpoint and register your url
2. Add the registered url to your hosts file as follows:

```
127.0.0.1  url
```

2. Clone this repo and run `yarn` to install dependencies. If you do not currently have yarn installed, you will need to do that first.
3. Copy the code snippet from Touchpoint and add it to the [header.ejs](https://github.com/vcilabs/touchpoint-sample-sdk/blob/ef55b7f9525fec7226b4c4638403e02f138ae330/views/header.ejs#L38) file. 

The Touchpoint SDK uses HTTPS so you will need to generate an SSL Certificate. In your terminal, run the following commands:

```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

4. Update the paths for your generated SSL `key` and `cert` in the [server.js](https://github.com/vcilabs/touchpoint-sample-sdk/blob/ef55b7f9525fec7226b4c4638403e02f138ae330/server.js#L6) file


### Running the sample app

1. Run `yarn start` to start the sample app
2. Once the app is running, you will see the following message in your terminal `Web SDK Example Server is running on PORT 8080`
3. Navigate to the url you added to your hosts file as follows `url:8080`
4. Since you generated a self signed certificate, Chrome will block it. You will need to type `thisisunsafe` when the app initially loads to unblock it
5. In your Network tab, verify that the call to `GetWidgets` is successful.
6. The registered url will now show as `Integrated` in Touchpoint and you can deploy your activities. 


### Using Google tag manager

To use GTM with this sample app, do the following:
1. Add the Google generated `script` tag to the [header.ejs](https://github.com/vcilabs/touchpoint-sample-sdk/blob/ef55b7f9525fec7226b4c4638403e02f138ae330/views/header.ejs#L7) file
2. Add the Google generated `noscript` tag to the [tag-manager.ejs](https://github.com/vcilabs/touchpoint-sample-sdk/blob/ef55b7f9525fec7226b4c4638403e02f138ae330/views/tag-manager.ejs#L3) file

