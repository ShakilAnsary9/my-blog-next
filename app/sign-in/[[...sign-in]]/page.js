import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center mt-24">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-current hover:bg-dark",
            footerActionLink: "text-current hover:text-dark",
          },
        }}
      />
    </div>
  );
}
