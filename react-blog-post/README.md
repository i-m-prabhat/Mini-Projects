# React Blog Post

This is a React blog page that takes input as title and description and stores the title in a slug and stores it in a JSON-server with the current date, and shows the blog's title and date in another component. When you click on the blog title, it shows the full blog, and the title slug shows in the URL

## <a href="https://reactblogbyp.netlify.app/">Deployment</a>

## Snapshots 
![Screenshot (244)](https://user-images.githubusercontent.com/117756490/218303719-1fe220c2-7302-4447-989f-ecceed879925.png)
![Screenshot (245)](https://user-images.githubusercontent.com/117756490/218303722-9f4dab1c-ba01-432e-bfea-c491705a9d41.png)
![Screenshot (246)](https://user-images.githubusercontent.com/117756490/218303726-a9b8bf2a-0895-4336-bc92-aabb6a15b209.jpg)
![Screenshot (247)](https://user-images.githubusercontent.com/117756490/218303728-b315c003-d8c2-4824-a386-58322b2bfd7e.jpg)
![Screenshot (247)](https://user-images.githubusercontent.com/117756490/218303729-3d9ea30a-312a-4529-b1e1-ccebdf3f2023.png)
![Screenshot (248)](https://user-images.githubusercontent.com/117756490/218303730-8c064e0e-171c-401b-8bbc-2b9213b8cf31.png)



## Code Explanation

The above code is a React application that creates and displays blogs. The application has two components: BlogPage and BlogDetail.

BlogPage component:

It is the main component that displays a form to add new blogs and a list of existing blogs.
It uses the useState hook to manage the state of the title and description of the new blog being added.
It uses the useEffect hook to fetch a list of existing blogs from the JSON server and store it in the component's state.
The component also contains a handleSubmit function that is called when the form is submitted. This function uses axios to send a POST request to the JSON server to add a new blog. The new blog data includes the title, description, current date, and a title slug (the title in lowercase with spaces replaced by hyphens).
The component displays a form to add new blogs and a list of existing blogs. The list of blogs includes the title and date of each blog and uses a Link component from react-router-dom to create a link to the full blog detail.
BlogDetail component:

This component displays the full detail of a single blog.
It uses the useParams hook from react-router-dom to get the title slug of the blog from the URL.
It uses the useEffect hook to fetch the detail of the blog from the JSON server based on the title slug.
The component displays the title, description, and date of the blog.
The App component is the root component of the application and it uses Route components from react-router-dom to define the routing of the application. It has two routes: the main route (/) that displays the BlogPage component, and the blog detail route (/blogs/:titleSlug) that displays the BlogDetail component.

The JSON server is used to store and retrieve the blogs. The application uses axios to send HTTP requests to the JSON server to add and retrieve blogs.


### How to start the json server

Start the JSON server by running the following command in your terminal: ``json-server db.json --port=5000``

### This Blog post project is created by Prabhat
