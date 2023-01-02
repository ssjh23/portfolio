# My Personal Portfolio Website


> Hello! This is my portfolio website and also what I consider to be my first personal coding project. While it definitely is far from being the most well-designed ( Code and Aesthetic wise :") ), I have learned quite a bit of Frontend tools and will write things that I think could have been done better further down in this README, something like a post-project reflection <br><br>
> You are free to fork this repo and make any modifications ( ._.):+1:, just give credit when credit is due. For this project, the design itself I have taken inspiration from another project which I will give credit below, but code-wise I wrote it all from scratch ( No component templates )
> Any suggestions for improvement is really really much appreciated. Just raise and issue and I will take a look at it

## How to run 
```
Installing Dependencies: 
npm install

Running Project locally: 
npm run dev 

Generating Changelogs with tag: 
npm run release
```
## Tools used
1. Builder: [Vite](https://vitejs.dev/)
2. Main Frontend Library: [React](https://beta.reactjs.org/)
3. State Management: [Zustand](https://zustand-demo.pmnd.rs/)
4. CSS: [TailwindCSS](https://tailwindcss.com/)
5. Animation/Orchestration: [Framer Motion](https://www.framer.com/motion/)

## Pitfalls (What can be improved)
#### Image Sizing
> I used SVG assets mostly from Wikipedia Commons, exceptions are the Express, Axios and Selenium Logo. However, scaling them to make them appear to be of the same size to fit into the screen was challenging in the sense that setting a fixed height attribute for all the images does not work due to their different resolutions. 
#### SRP for Skills page
> The skills page could have some of its content abstracted into its own component, such as each topic (Language, Framework etc.). However it was troublesome to refactor because the layout for that page changes due to Responsive Design from lower to higher resolution
#### Responsive Design
> I challenged myself to make the website look 'decent' on all resolutions as I never had to build apps that had to be working on all devices. I learned here what is the approach to writing CSS for responsive design, and that I realised I had to refactor almost all the CSS. The common approach is to start doing CSS on mobile first, and then work one's way up. I however did my first version of the website on a 2560*1440 monitor. Refactoring the CSS took me another 2 weeks (CSS is by far my worst skill).

## Credit
The design was inspired by [Brittany Chiang](https://brittanychiang.com/). I used the colour palette, fonts and some of the component designs.
