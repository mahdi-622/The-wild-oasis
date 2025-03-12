import Link from "next/link";

function LoginMessage() {
  return (
    <div className="bg-primary-800 text-center p-10 sm:p-12 rounded-lg shadow-md">
      <p className="text-lg sm:text-xl text-white">
        Please{" "}
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>{" "}
        to reserve this cabin.
      </p>
    </div>
  );
}

export default LoginMessage;
