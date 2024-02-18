import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Userscomponent } from "../components/UsersComponent";

export function Dashboard(){
    return <div>
        <AppBar/>
        <Balance value={10000}/>
        <Userscomponent/>
    </div>
}