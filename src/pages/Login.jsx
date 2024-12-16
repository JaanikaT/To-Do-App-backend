import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


// peale importi tuleb kõik label, input ja button muuta suurte tähtedega Label, Input ja Button
export const Login = () => {
    return(
        <div>
            <form className="max-w-xs mx-auto flex flex-col gap-4">
                <h3>Logi sisse</h3>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email"/>
                </div>
                <div>
                    <Label htmlFor="password">Parool</Label>
                    <Input type="password" name="password" id="password"/>
                </div>
                <Button type="submit">Logi sisse</Button>
            </form>

        </div>
    ) 
};