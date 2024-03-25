import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Theme } from "./components/Theme";
import { useState } from "react";
import { IProjectsContext, ProjectsContext } from "./contexts/ProjectsContext";
import { Project } from "./models/Project";

export const Layout = () => {
  const [projectsList] = useState<IProjectsContext>({
    projects: [
      new Project(
        "1",
        2023,
        "School project",
        "/src/assets/naturesite.png",
        "REPLICATE DESIGN",
        "Made at medieinstitutet by Elsa Eriksson",
        "For this school assignment, I created a responsive website utilizing flex/grid to organize the layout of key pages such as the homepage, about page, and contact page. The goal was to closely emulate the design and functionality of an established web page.",
        "Built with HTML and SCSS",
        "https://github.com/ElsaEriksson/replicate-design",
        "https://replicatedesignbyelsa.netlify.app/"
      ),
      new Project(
        "2",
        2023,
        "School project",
        "/src/assets/todolist.png",
        "TO DO LIST",
        "Made at medieinstitutet by Elsa Eriksson",
        "For this school assignment, I created a to-do list page. The page displays a list of tasks and allows users to mark tasks as done or remove them from the list. It also includes a form for users to add new tasks and task sorting capabilities.",
        "Built with HTML, SCSS and JavaScript",
        "https://github.com/ElsaEriksson/todo-list",
        "https://main--todolistbyelsa.netlify.app/"
      ),
      new Project(
        "3",
        2024,
        "School project",
        "/src/assets/whiskends.png",
        "THE WEBSHOP",
        "Made at medieinstitutet by Elsa Eriksson, Jessica Hermansson and Adam Wadin",
        "I participated in an agile development team that created a webshop for this school project. We built a landing page, product details page, checkout page, and shopping cart. Key features included adding products to the cart, simulating a purchase at checkout, calculating total prices, and managing product quantities.",
        "Built with HTML, SCSS, and TypeScript",
        "https://github.com/ElsaEriksson/the-webshop",
        "https://whiskends.netlify.app/"
      ),
      new Project(
        "4",
        2024,
        "School project",
        "/src/assets/thezoo.png",
        "THE ZOO",
        "Made at medieinstitutet by Elsa Eriksson",
        "In this school assignment, I used React to create a zoo-themed page. The application retrieves a list of animals from an API endpoint and stores them locally using localStorage. The homepage displays animals' names and brief descriptions. Clicking on an animal navigates to a dedicated page showing more details, including the option to mark the animal as fed.",
        "Built with HTML, SCSS, and TypeScript",
        "https://github.com/ElsaEriksson/the-zoo",
        "https://thezoobyelsa.netlify.app/"
      ),
      new Project(
        "5",
        2024,
        "School project",
        "/src/assets/smakriket.png",
        "THE RESTAURANT",
        "Made at medieinstitutet by Elsa Eriksson and Jessica Hermansson",
        "We developed a restaurant website using React for this school project and utilized an API for data handling. The main focus was implementing booking functionality based on specific requirements, such as the number of people, date, and time. A form collects user details and completes the booking process. Additionally, an admin interface allows restaurant staff to manage bookings.",
        "Built with HTML, SCSS, JavaScript and TypeScript",
        "https://github.com/ElsaEriksson/the-restaurant",
        "https://smakriket.netlify.app/"
      ),
      new Project(
        "6",
        2024,
        "School project",
        "/src/assets/thechat.png",
        "THE CHAT",
        "Made at medieinstitutet by Elsa Eriksson, Johan Hammarstedt and Leon McVey",
        "In this group project, we implemented a real-time chat application using socket.io for back-end communication and React for the front-end. The chat allows users to connect, enter their names, and instantly send messages that are visible to all participants. A user can also create specific channels and edit or delete messages after they send them.",
        "Built with HTML, SCSS, JavaScript and TypeScript",
        "https://github.com/ElsaEriksson/the-chat",
        "http//:..."
      ),
    ],
  });

  return (
    <>
      <section className="page">
        <Theme />
        <header>{<Navigation />}</header>
        <main className="container--mainContent">
          <ProjectsContext.Provider value={projectsList}>
            <Outlet />
          </ProjectsContext.Provider>
        </main>
        <footer></footer>
      </section>
    </>
  );
};
