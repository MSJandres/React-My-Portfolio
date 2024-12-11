// Desc: Portfolio page

import webApi from '../assets/images/web-api.png';
import vehicle from '../assets/images/vehicle-builder.png';
import javascript from '../assets/images/javascript-employee-payroll-tracker.png';
import task from '../assets/images/task-tracker.png';
import Project from '../components/Project.jsx';

export default function Portfolio() {
    return (
      <div className='mainCard'>
        <h1>My Portfolio</h1>
        <div id="my-work">

          <Project
          id={"app-1"}
          src={webApi}
          alt={"web-api"}
          mainLink={"https://msjandres.github.io/Web-API/"} 
          mainLinkTitle={"web-api"} 
          subLink={"https://github.com/MSJandres/Web-API.git"} 
          subLinkTitle={"github repository"}
          />

          <Project
          id={"app-2"}
          src={vehicle}
          alt={"vehicle-builder"}
          mainLink={"https://github.com/MSJandres/TypeScript-and-OOP-Vehicle-Builder"} 
          mainLinkTitle={"vehicle-builder app"} 
          subLink={"https://drive.google.com/file/d/1aMGjq9H-3KJeD77ucM3yOw8uAzhUM2ZG/view"} 
          subLinkTitle={"video walkthrough"}
          />

          <Project  
          id={"app-3"}
          src={javascript}
          alt={"javascript-employee-payroll-tracker"}
          mainLink={"https://github.com/MSJandres/JavaScript.git"}
          mainLinkTitle={"javascript-employee-payroll-tracker "}
          subLink={"https://msjandres.github.io/JavaScript/"}
          subLinkTitle={"github repository"}
          />

          <Project
          id={"app-4"}
          src={task}
          alt={"task-tracker"}
          mainLink={"https://toli-a.github.io/project1/"} 
          mainLinkTitle={"task-tracker app"} 
          subLink={"https://github.com/toli-A/project1"} 
          subLinkTitle={"github repository"}
          />

         

        </div>
      </div>
    );
}
  