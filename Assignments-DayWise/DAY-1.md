```java
// Assignment Task 
// What is CrossOrigin 
// what is CDN and how it works? 
// How CDN is diffrent from API? 
```   

## What is CrossOrigin   
#### Cross Origin Resource Sharing : It ensure the resources sharing between the client and server, wehen origin are not smame. 

*what Origin includes?* 
- * protocol (http or https)
- * domain name
- * port number
all parameter is required for matching the origin. 

**Important Points :**  
* In development, where React and Express run on different ports, CORS is almost always needed because they are considered different origins.
* In production, you can avoid CORS by serving both the React app and Express app from the same origin (same protocol, domain, and port) through the same server.
* If you choose to serve the client and server separately in both development and production (e.g., React on one domain or port and Express on another), you'll need to handle CORS on the server side to avoid cross-origin issues. 
----
## What is CDN?  
CDN is content delivery network that helps us to share the content without installing any dependencies.  

### How a CDN Works

1. **Content is Cached**: 
   - The CDN stores copies of static content (images, CSS, JavaScript, etc.) on distributed servers (edge servers) across multiple locations worldwide.

2. **User Request**: 
   - When a user visits a website, their request is routed to the nearest edge server based on their geographic location.

3. **Cache Hit/Miss**:
   - **Cache Hit**: If the requested content is already on the edge server, it's served directly from there.
   - **Cache Miss**: If the content isn't available, the edge server fetches it from the origin server, caches it, and delivers it to the user.

4. **Faster Delivery**: 
   - Since the data is served from the closest server, it reduces the distance, improving speed and reducing latency.

5. **Load Balancing**: 
   - Traffic is distributed across multiple servers, improving performance and preventing overloads.

----
## DIFF B/W API And CDN? 
API is the set of prtocols or standards to communicate with the systems or servers. 
But, CDN is the way to deliver the conetent to the clients or servers. It Always serves the data. It focus on efficiently serving the data.
