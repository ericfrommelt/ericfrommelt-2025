import ConvertkitSignupForm from "../components/Subscribe";
export default function SubscribePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <ConvertkitSignupForm formId={process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID || "YOUR_CONVERTKIT_FORM_ID_HERE"} />
    </div>
  );
 }