import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
import { useState } from "react";

export default function LoginForm() {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <>
            <TextInput
                label="Email"
                placeholder="Email"
                value={email}
                onChange={setEmail}
            />
            <TextInput
                label="Password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
            />

            <Button title="Login" style={{ marginTop: 10 }} handlePress={() => { }} />
        </>
    );
}