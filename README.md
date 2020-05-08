**Program Standard Module to run in Launchpad**

**Note** : These both repo does exist in the same directory.
for local environment
Go in the dxc-program-standards-ui
Type Command - **npm run build** - It will generate a build folder in the same directory.

Now, You have to go in the dxc-launchpad
Type Command - **npm i --save ../dxc-program-standards-ui** - It will Symlink  
Type Command - **npm start** - Voila!

Add this as dependency in package.json
"@mktginnovate/dxc-program-standards-ui": "beta",
"@mktginnovate/non-premise-frontend": "alpha",

import it in App.tss
import { AppBuild as ProgramStandard } from "@mktginnovate/dxc-program-standards-ui";
import { NonPremiseComponent } from "@mktginnovate/non-premise-frontend";

<Route
                    exact
                    path="/planning/non-premise"
                    component={NonPremiseComponent}
                  />

addthis link below program standard link
<NavLink exact to="/planning/non-premise">

<li className={classes.planningMenusActiveList}>Non-Premises</li>
</NavLink>
**How to use Redux with React Functional Components**

Below steps are to be followed(refer dxc-launchpad):

Always use
import {useSelector, useDispatch} from 'react-redux';
in component

1. Create a reducer file in REDUCERS folder
2. Then import that file in STORE folder
3. And call useDispatch from the component where you want to emit an event.
4. useSelector to get all the state values.
5. After dispatch (useDispatch), it goes to the reducer file
   where I have called the APIs also internally i.e., getUsers().
6. Which is in API folder

**How to import Program Standard Module in the Lanuchpad**
**Note** : Please check first Is there any dependency named 'dxc-program-standards' already exists. If yes, then remove it from package.json dependency and folder under node_modules 'dxc-program-standards' and follow the below steps :

1. npm install git+https://bharat-rathod:xEFx4eWyqeKFyrYej4ez@bitbucket.org/BaleshBhatt/dxc-program-standards-ui.git#development
2. import {AppBuild as ProgramStandard} from 'dxc-program-standards; in App.tsx file
3. <Route exact path="/planning/program-standard" component={ProgramStandard} /> in App.tsx file
