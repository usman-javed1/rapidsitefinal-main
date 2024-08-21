"use server";

import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signIn = async (email: string, password: string) => {
    
    // const email = email;
    // const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        alert("Error");
        // return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/dashboard");
};